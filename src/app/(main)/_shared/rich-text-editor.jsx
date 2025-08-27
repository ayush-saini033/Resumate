import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Code,
  Image,
  Video,
  Link,
  Underline,
  Strikethrough,
} from "lucide-react";
// Simple toast notification system
const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return {
    toasts,
    success: (message) => showToast(message, "success"),
    error: (message) => showToast(message, "error"),
  };
};

const RichTextEditor = ({content, onChange}) => {
  const [activeFormats, setActiveFormats] = useState(new Set());
  const editorRef = useRef(null);
  const toast = useToast();

  // Enhanced content change handler
  const handleContentChange = useCallback(() => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      onChange(newContent)
      updateActiveFormats();
    }
  }, []);

  // Update active format states
  const updateActiveFormats = useCallback(() => {
    const formats = new Set();

    try {
      if (document.queryCommandState("bold")) formats.add("bold");
      if (document.queryCommandState("italic")) formats.add("italic");
      if (document.queryCommandState("underline")) formats.add("underline");
      if (document.queryCommandState("strikeThrough"))
        formats.add("strikethrough");
      if (document.queryCommandState("insertUnorderedList"))
        formats.add("unorderedList");
      if (document.queryCommandState("insertOrderedList"))
        formats.add("orderedList");

      // Check for headings and blocks
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        let element = selection.anchorNode;
        if (element && element.nodeType === Node.TEXT_NODE) {
          element = element.parentElement;
        }

        if (element && "tagName" in element) {
          const tagName = element.tagName;
          if (tagName === "H1") formats.add("h1");
          if (tagName === "H2") formats.add("h2");
          if (tagName === "H3") formats.add("h3");
          if (tagName === "BLOCKQUOTE") formats.add("blockquote");
          if (tagName === "PRE") formats.add("pre");
        }
      }
    } catch (e) {
      console.log("Error checking command state:", e);
    }

    setActiveFormats(formats);
  }, []);

  // URL validation helpers
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const isVideoUrl = (url) => {
    return (
      url.includes("youtube.com") ||
      url.includes("youtu.be") ||
      url.includes("vimeo.com") ||
      url.includes("dailymotion.com")
    );
  };

  const isImageUrl = (url) => {
    return /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(url);
  };

  // Convert video URLs to embed format
  const convertToEmbedUrl = (url) => {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("vimeo.com/")) {
      const videoId = url.split("vimeo.com/")[1];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  // Enhanced paste handler
  const handlePaste = useCallback((e) => {
    const items = Array.from(e.clipboardData?.items || []);
    const text = e.clipboardData?.getData("text/plain") || "";

    // Handle URLs
    if (text && isValidUrl(text)) {
      e.preventDefault();
      if (isVideoUrl(text)) {
        insertMedia(text, "video");
      } else if (isImageUrl(text)) {
        insertMedia(text, "image");
      } else {
        insertLink(text);
      }
      return;
    }

    // Handle image files
    const imageItem = items.find((item) => item.type.startsWith("image/"));
    if (imageItem) {
      e.preventDefault();
      const file = imageItem.getAsFile();
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            insertMedia(e.target.result, "image");
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }, []);

  // Enhanced key handler
  const handleKeyDown = useCallback(
    (e) => {
      // Handle backspace for media elements
      if (e.key === "Backspace") {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const startContainer = range.startContainer;

          // Check if we're at the start of a text node and previous sibling is media
          if (
            range.startOffset === 0 &&
            startContainer.nodeType === Node.TEXT_NODE
          ) {
            const prevSibling = startContainer.previousSibling;
            if (
              prevSibling &&
              "tagName" in prevSibling &&
              (prevSibling.tagName === "IMG" ||
                prevSibling.tagName === "IFRAME")
            ) {
              e.preventDefault();
              prevSibling.remove();
              return;
            }
          }
        }
      }

      // Handle Enter key for better paragraph spacing
      if (e.key === "Enter" && !e.shiftKey) {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const element =
            range.commonAncestorContainer.nodeType === Node.TEXT_NODE
              ? range.commonAncestorContainer.parentElement
              : range.commonAncestorContainer;

          // If we're in a heading, create a paragraph after
          if (
            element &&
            "tagName" in element &&
            /^H[1-6]$/.test(element.tagName)
          ) {
            e.preventDefault();
            const p = document.createElement("p");
            p.innerHTML = "<br>";
            element.parentNode?.insertBefore(p, element.nextSibling);

            // Move cursor to new paragraph
            const newRange = document.createRange();
            newRange.setStart(p, 0);
            newRange.setEnd(p, 0);
            selection.removeAllRanges();
            selection.addRange(newRange);
          }
        }
      }

      // Update active formats on cursor movement
      setTimeout(updateActiveFormats, 10);
    },
    [updateActiveFormats]
  );

  // Enhanced media insertion
  const insertMedia = useCallback(
    async (src, type) => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;

      const range = selection.getRangeAt(0);

      // Create container div for better handling
      const container = document.createElement("div");
      container.className = "media-container";

      let element;

      if (type === "image") {
        try {
          element = document.createElement("img");
          element.src = src;
          element.style.cssText =
            "margin: auto; max-width: 80%; height: auto; display: block; border-radius: 8px;";
          element.alt = "Uploaded image";
        } catch (error) {
          console.log(error);
          toast.error("Failed to load image");
          return;
        }
      } else if (type === "video") {
        element = document.createElement("iframe");
        element.src = convertToEmbedUrl(src);
        element.style.cssText =
          "margin: auto; max-width: 80%; height: 315px; display: block; border-radius: 8px;";
        element.setAttribute("frameborder", "0");
        element.setAttribute("allowfullscreen", "");
      } else {
        return;
      }

      container.appendChild(element);

      // Insert with proper spacing
      range.deleteContents();
      range.insertNode(container);

      // Add paragraph after if needed
      const nextSibling = container.nextSibling;
      if (
        !nextSibling ||
        nextSibling.nodeType !== Node.ELEMENT_NODE ||
        nextSibling.tagName !== "P"
      ) {
        const p = document.createElement("p");
        p.innerHTML = "<br>";
        container.parentNode?.insertBefore(p, container.nextSibling);
      }

      // Move cursor after the media
      range.setStartAfter(container);
      range.setEndAfter(container);
      selection.removeAllRanges();
      selection.addRange(range);

      handleContentChange();
    },
    [handleContentChange, toast]
  );

  // Insert link helper
  const insertLink = useCallback(
    (url) => {
      const text = prompt("Enter link text:", url);
      if (text) {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const link = document.createElement("a");
          link.href = url;
          link.textContent = text;
          link.className =
            "text-blue-400 hover:text-blue-300 underline transition-colors";
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          range.deleteContents();
          range.insertNode(link);
          range.setStartAfter(link);
          range.setEndAfter(link);
          selection.removeAllRanges();
          selection.addRange(range);
          handleContentChange();
        }
      }
    },
    [handleContentChange]
  );

  // Handle link creation/removal
  const handleLinkCreation = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    // Check if we're in a link and remove it
    let element = selection.anchorNode;
    if (element && element.nodeType === Node.TEXT_NODE) {
      element = element.parentElement;
    }

    if (element && "tagName" in element && element.tagName === "A") {
      // Remove the link
      const parent = element.parentNode;
      while (element.firstChild) {
        parent?.insertBefore(element.firstChild, element);
      }
      parent?.removeChild(element);
      handleContentChange();
      return;
    }

    // Create new link
    let linkText = "";
    let url = "";

    // Get selected text if any
    if (!selection.isCollapsed) {
      linkText = selection.toString();
    }

    // Prompt for URL
    url = prompt("Enter link URL:") || "";
    if (url) {
      // If no text was selected, ask for link text
      if (!linkText) {
        linkText = prompt("Enter link text:", url) || url;
      }

      // Create the link element
      const range = selection.getRangeAt(0);
      const link = document.createElement("a");
      link.href = url;
      link.textContent = linkText;
      link.className =
        "text-blue-400 hover:text-blue-300 underline transition-colors";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      range.deleteContents();
      range.insertNode(link);

      // Move cursor after the link
      range.setStartAfter(link);
      range.setEndAfter(link);
      selection.removeAllRanges();
      selection.addRange(range);

      handleContentChange();
    }
  }, [handleContentChange]);

  // Fixed formatting function with working toggle functionality
  const formatText = useCallback(
    (command, value) => {
      if (!editorRef.current) return;

      editorRef.current.focus();

      try {
        // Handle different command types
        switch (command) {
          case "bold":
          case "italic":
          case "underline":
          case "strikeThrough":
          case "insertUnorderedList":
          case "insertOrderedList":
            document.execCommand(command, false, null);
            break;

          case "heading":
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
              let element = selection.anchorNode;
              if (element && element.nodeType === Node.TEXT_NODE) {
                element = element.parentElement;
              }

              // If already this heading type, convert to paragraph
              if (
                element &&
                "tagName" in element &&
                element.tagName.toLowerCase() === value
              ) {
                document.execCommand("formatBlock", false, "p");
              } else {
                document.execCommand("formatBlock", false, value || "p");
              }
            }
            break;

          case "blockquote":
            const sel = window.getSelection();
            if (sel && sel.rangeCount > 0) {
              let elem = sel.anchorNode;
              if (elem && elem.nodeType === Node.TEXT_NODE) {
                elem = elem.parentElement;
              }

              if (elem && "tagName" in elem && elem.tagName === "BLOCKQUOTE") {
                document.execCommand("formatBlock", false, "p");
              } else {
                document.execCommand("formatBlock", false, "blockquote");
              }
            }
            break;

          case "pre":
            const s = window.getSelection();
            if (s && s.rangeCount > 0) {
              let e = s.anchorNode;
              if (e && e.nodeType === Node.TEXT_NODE) {
                e = e.parentElement;
              }

              if (e && "tagName" in e && e.tagName === "PRE") {
                document.execCommand("formatBlock", false, "p");
              } else {
                document.execCommand("formatBlock", false, "pre");
              }
            }
            break;

          case "createLink":
            handleLinkCreation();
            break;

          default:
            document.execCommand(command, false, value);
        }

        // Update state after command
        setTimeout(() => {
          updateActiveFormats();
          handleContentChange();
        }, 10);
      } catch (error) {
        console.warn("Command execution failed:", error);
      }
    },
    [handleContentChange, updateActiveFormats, handleLinkCreation]
  );

  // Initialize editor with sample content
  useEffect(() => {
    if (editorRef.current && !content) {
      editorRef.current.innerHTML = `
        <p>Welcome to <span class="font-semibold text-blue-400">Resumate</span> – your smart resume builder! Create a professional resume in just minutes or even seconds.</p>
<ul>
  <li>Write and format your <strong>professional summary</strong> with ease</li>
  <li>Add sections like <em>Skills</em>, <u>Experience</u>, and <u>Education</u></li>
  <li>Customize with <a href="#" class="text-blue-400 hover:text-blue-300 underline transition-colors">links</a> to your portfolio or projects</li>
</ul>
<blockquote>Your resume is your first impression — let’s make it count!</blockquote>
<p>Use this rich text editor to craft a polished, ATS-friendly resume that stands out. The toolbar above gives you full control to edit, highlight, and personalize your content effortlessly.</p>

      `;
      handleContentChange();
    }
    else if(editorRef.current && content){
      editorRef.current.innerHTML = content;
      handleContentChange();
    }
  }, [handleContentChange]);

  return (
    <div className="min-h-screen  text-white">
      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toast.toasts.map(({ id, message, type }) => (
          <div
            key={id}
            className={`px-4 py-2 rounded-lg shadow-lg transition-all ${
              type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {message}
          </div>
        ))}
      </div>

      {/* Sticky Toolbar */}
      <div className="sticky top-0 z-30 bg-transparent backdrop-blur-md border-b border-slate-700/50 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center space-x-1 flex-wrap">
              {/* Text Formatting */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => formatText("bold")}
                  className={`h-9 w-9 p-0 rounded transition-all flex items-center justify-center ${
                    activeFormats.has("bold")
                      ? "text-white bg-blue-600/30 border border-blue-400 rounded-md hover:bg-blue-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <Bold className="h-6 w-6" />
                </button>
                <button
                  onClick={() => formatText("italic")}
                  className={`h-9 w-9 p-0 rounded transition-all flex items-center justify-center ${
                    activeFormats.has("italic")
                      ? "text-white bg-blue-600/30 border border-blue-400 rounded-md hover:bg-blue-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <Italic className="h-6 w-6" />
                </button>
                <button
                  onClick={() => formatText("underline")}
                  className={`h-9 w-9 p-0 rounded transition-all flex items-center justify-center ${
                    activeFormats.has("underline")
                      ? "text-white bg-blue-600/30 border border-blue-400 rounded-md hover:bg-blue-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <Underline className="h-6 w-6" />
                </button>
                <button
                  onClick={() => formatText("strikeThrough")}
                  className={`h-9 w-9 p-0 rounded transition-all flex items-center justify-center ${
                    activeFormats.has("strikethrough")
                      ? "text-white bg-blue-600/30 border border-blue-400 rounded-md hover:bg-blue-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <Strikethrough className="h-6 w-6" />
                </button>
              </div>

              <div className="mx-2 h-6 w-px bg-slate-600" />

              {/* Headings */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => formatText("heading", "h1")}
                  className={`h-9 px-3 rounded text-lg font-bold transition-all ${
                    activeFormats.has("h1")
                      ? "text-white bg-blue-600/30 border border-blue-400 rounded-md hover:bg-blue-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  H1
                </button>
                <button
                  onClick={() => formatText("heading", "h2")}
                  className={`h-9 px-3 rounded text-lg font-bold transition-all ${
                    activeFormats.has("h2")
                      ? "text-white bg-blue-600/30 border border-blue-400 rounded-md hover:bg-blue-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  H2
                </button>
                <button
                  onClick={() => formatText("heading", "h3")}
                  className={`h-9 px-3 rounded text-lg font-bold transition-all ${
                    activeFormats.has("h3")
                      ? "text-white bg-blue-600/30 border border-blue-400 rounded-md hover:bg-blue-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  H3
                </button>
                <button
                  onClick={() => formatText("formatBlock", "p")}
                  className="h-9 px-3 rounded text-slate-300 hover:text-white hover:bg-slate-700 text-xl font-bold transition-all"
                >
                  P
                </button>
              </div>

              <div className="mx-2 h-6 w-px bg-slate-600" />

              {/* Lists and Blocks */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => formatText("insertUnorderedList")}
                  className={`h-9 w-9 p-0 rounded transition-all flex items-center justify-center ${
                    activeFormats.has("unorderedList")
                      ? "text-white bg-blue-600/30 border border-blue-400 rounded-md hover:bg-blue-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <List className="h-6 w-6" />
                </button>
                <button
                  onClick={() => formatText("insertOrderedList")}
                  className={`h-9 w-9 p-0 rounded transition-all flex items-center justify-center ${
                    activeFormats.has("orderedList")
                      ? "text-white bg-blue-600/30 border border-blue-400 rounded-md hover:bg-blue-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <ListOrdered className="h-6 w-6" />
                </button>
                <button
                  onClick={() => formatText("blockquote")}
                  className={`h-9 w-9 p-0 rounded transition-all flex items-center justify-center ${
                    activeFormats.has("blockquote")
                      ? "text-white bg-blue-600/30 border border-blue-400 rounded-md hover:bg-blue-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <Quote className="h-6 w-6" />
                </button>
                <button
                  onClick={() => formatText("pre")}
                  className={`h-9 w-9 p-0 rounded transition-all flex items-center justify-center ${
                    activeFormats.has("pre")
                      ? "text-white bg-blue-600/30 border border-blue-400 rounded-md hover:bg-blue-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <Code className="h-6 w-6" />
                </button>
              </div>

              <div className="mx-2 h-6 w-px bg-slate-600" />

              {/* Media */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => {
                    const url = prompt("Enter image URL:");
                    if (url) insertMedia(url, "image");
                  }}
                  className="h-9 w-9 p-0 rounded text-slate-300 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center"
                >
                  <Image className="h-6 w-6" />
                </button>
                <button
                  onClick={() => {
                    const url = prompt("Enter video URL (YouTube, Vimeo):");
                    if (url) insertMedia(url, "video");
                  }}
                  className="h-9 w-9 p-0 rounded text-slate-300 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center"
                >
                  <Video className="h-6 w-6" />
                </button>
                <button
                  onClick={() => formatText("createLink")}
                  className="h-9 w-9 p-0 rounded text-slate-300 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center"
                >
                  <Link className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Content */}
      <div className="max-w-5xl mx-auto p-3 pt-6">
        <div className="bg-black border border-slate-700/50 backdrop-blur-sm shadow-2xl rounded-lg">
          <div className="p-8 lg:p-12">
            <div
              ref={editorRef}
              contentEditable
              onPaste={handlePaste}
              onInput={handleContentChange}
              onKeyDown={handleKeyDown}
              onMouseUp={updateActiveFormats}
              onKeyUp={updateActiveFormats}
              className="min-h-96 text-lg leading-relaxed text-slate-300  focus:outline-none focus:text-slate-200 transition-colors"
              style={{
                lineHeight: "1.8",
                fontSize: "18px",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
              suppressContentEditableWarning={true}
            />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        [contenteditable] h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 2rem 0 1rem 0;
          color: #f1f5f9;
          line-height: 1.2;
        }
        
        [contenteditable] h2 {
          font-size: 2rem;
          font-weight: 600;
          margin: 1.5rem 0 1rem 0;
          color: #f1f5f9;
          line-height: 1.3;
        }
        
        [contenteditable] h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem 0;
          color: #f1f5f9;
          line-height: 1.4;
        }
        
        [contenteditable] p {
          margin: 1rem 0;
          color: #cbd5e1;
        }
        
        [contenteditable] blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1.5rem;
          margin: 1.5rem 0;
          color: #94a3b8;
          font-style: italic;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 0 8px 8px 0;
        }
        
        [contenteditable] pre {
          background: #1e293b;
          border: 1px solid #475569;
          border-radius: 8px;
          padding: 1rem;
          margin: 1.5rem 0;
          color: #e2e8f0;
          font-family: 'Monaco', 'Menlo', monospace;
          overflow-x: auto;
          white-space: pre-wrap;
        }
        
        [contenteditable] ul {
          margin: 1rem 0;
          padding-left: 2rem;
          color: #cbd5e1;
        }
        
        [contenteditable] ol {
          margin: 1rem 0;
          padding-left: 2rem;  
          color: #cbd5e1;
        }
        
        [contenteditable] li {
          margin: 0.5rem 0;
          display: list-item;
        }
        
        [contenteditable] ul li {
          list-style-type: disc;
        }
        
        [contenteditable] ol li {
          list-style-type: decimal;
        }
        
        [contenteditable] a {
          color: #60a5fa;
          text-decoration: underline;
          transition: color 0.2s ease;
        }
        
        [contenteditable] a:hover {
          color: #93c5fd;
        }
        
        [contenteditable]:empty:before {
          content: "Start writing your amazing content...";
          color: #64748b;
          font-style: italic;
        }

        .media-container {
          margin: 1.5rem 0;
        }

        .media-container img,
        .media-container iframe {
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
      `,
        }}
      />
    </div>
  );
};

export default RichTextEditor;

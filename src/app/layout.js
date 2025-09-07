import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://resumate-henna.vercel.app"),

  // 🔹 Titles
  title: {
    default: "Resumate – Build a Job-Winning Resume Fast",
    template: "%s | Resumate",
  },

  // 🔹 Description for SEO + social
  description:
    "Create, edit, and download professional resumes instantly. ATS-friendly templates that help you get noticed.",

  // 🔹 Keywords (SEO)
  keywords: [
    // Core Resume Builder Keywords
    "resume builder",
    "online cv maker",
    "ATS resume",
    "resume templates",
    "create resume",
    "download resume",
    "free resume builder",
    "best resume templates",
    "professional resume builder",
    "resume builder online free",
    "resume maker app",

    // AI & Modern Resume Keywords
    "AI resume builder",
    "AI cv maker",
    "AI resume generator",
    "AI powered resume builder",
    "smart resume builder",
    "resume with artificial intelligence",
    "AI cover letter generator",
    "AI job application tools",

    // Job & Career Focused Keywords
    "resume for freshers",
    "resume builder for students",
    "resume for experienced professionals",
    "modern resume builder",
    "one click resume generator",
    "resume optimization tool",
    "job winning resume maker",

    // SEO Long-Tail Phrases
    "how to create a professional resume",
    "online resume builder with AI",
    "free AI resume generator",
    "ATS friendly resume templates",
    "download professional cv online",
  ],

  // 🔹 Canonical URL (SEO best practice)
  alternates: {
    canonical: "https://resumate-henna.vercel.app",
  },

  // 🔹 Open Graph (Facebook, LinkedIn, WhatsApp, Slack, Telegram, Discord, Reddit)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://resumate-henna.vercel.app",
    siteName: "Resumate",
    title: "Resumate – Resume Builder",
    description: "Create professional resumes with ATS-friendly templates.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resumate preview",
      },
    ],
  },

  // 🔹 Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // optional
    creator: "@yourTwitterHandle", // optional
    title: "Resumate – Resume Builder",
    description: "Create professional resumes with ATS-friendly templates.",
    images: ["/og-image.png"],
  },

  // 🔹 Favicons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-192x192.png", // Android/Chrome icon
  },

  // 🔹 Extra Metadata for More Platforms
  other: {
    // Pinterest Rich Pins
    "pinterest-rich-pin": "true",

    // Microsoft Edge / Windows Tiles
    "msapplication-TileColor": "#481349", // matches your brand theme
    "msapplication-TileImage": "/mstile-150x150.png",

    // Android Chrome Theme
    "theme-color": "#481349",

    // Apple iOS Pinned Tab / Web App
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Resumate",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* WebSite structured data */}
        <Script id="ld-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Resumate",
            url: "https://resumate-henna.vercel.app",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://resumate-henna.vercel.app/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-black`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#1e293b",
              color: "#fff",
              borderRadius: "12px",
              padding: "12px 16px",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}

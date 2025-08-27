import toast from "react-hot-toast";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export const ShowToast = (success, message) => {
  const Icon = success ? (
    <AiOutlineCheckCircle size={22} className="text-emerald-300 drop-shadow" />
  ) : (
    <AiOutlineCloseCircle size={22} className="text-rose-300 drop-shadow" />
  );

  toast.custom(
    (t) => (
      <div
        className={`
          flex items-center gap-3 px-5 py-4 rounded-2xl
          backdrop-blur-xl border border-white/10 shadow-lg
          transition-all duration-300 ease-out
          ${
            success
              ? "bg-emerald-500/10 text-emerald-100 border-emerald-400/20"
              : "bg-rose-500/10 text-rose-100 border-rose-400/20"
          }
          ${
            t.visible
              ? "animate-in slide-in-from-right-4 fade-in-0"
              : "animate-out slide-out-to-right-4 fade-out-0"
          }
        `}
        style={{
          boxShadow: success
            ? "0 8px 20px rgba(16,185,129,0.25), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "0 8px 20px rgba(239,68,68,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div
          className={`
            flex items-center justify-center w-9 h-9 rounded-xl 
            ${success ? "bg-emerald-500/20" : "bg-rose-500/20"}
          `}
        >
          {Icon}
        </div>
        <p className="font-medium tracking-wide text-sm">{message}</p>
      </div>
    ),
    {
      position: "top-right",
      duration: 4000,
      style: {
        background: "transparent",
      },
    }
  );
};

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon, ShieldCheck, CheckCircle2 } from "lucide-react";
import { AuditForm } from "./AuditForm";
import { cn } from "./ui/utils";

export function AuditModal({ children }: { children: React.ReactNode }) {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <DialogPrimitive.Root onOpenChange={(open) => { if (!open) setSubmitted(false); }}>
      <DialogPrimitive.Trigger asChild>
        {children}
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-50",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:duration-200 data-[state=open]:duration-300"
          )}
          style={{
            background: "radial-gradient(ellipse at center, rgba(10,14,26,0.92) 0%, rgba(0,0,0,0.88) 100%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        />

        <DialogPrimitive.Content
          className={cn(
            "fixed z-50 text-white",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=closed]:duration-200 data-[state=open]:duration-300",
           
            "inset-0 rounded-none",
           
            "sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
            "sm:w-[92vw] sm:max-w-3xl sm:rounded-2xl md:rounded-3xl",
            "h-[100dvh] sm:h-auto sm:max-h-[90vh]",
            "flex flex-col",
            "overflow-hidden",
          )}
          style={{
            background: "linear-gradient(145deg, #0d1220 0%, #090d18 50%, #0a0e1a 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 0 0 1px rgba(59,130,246,0.08), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(59,130,246,0.06)",
          }}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {/* Header — fixed, never scrolls */}
          <div
            className="shrink-0 relative px-5 sm:px-8 md:px-12 pt-7 sm:pt-8 pb-5 sm:pb-6 transition-all duration-500"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              background: submitted
                ? "linear-gradient(180deg, rgba(59,230,130,0.05) 0%, transparent 100%)"
                : "linear-gradient(180deg, rgba(59,130,246,0.06) 0%, transparent 100%)",
            }}
          >
         
            <div
              className="absolute top-0 left-0 right-0 h-px transition-all duration-700"
              style={{
                background: submitted
                  ? "linear-gradient(90deg, transparent, rgba(52,211,153,0.5), transparent)"
                  : "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
              }}
            />

            <div className="flex items-start gap-4">
              <div
                className="hidden sm:flex shrink-0 w-12 h-12 rounded-2xl items-center justify-center transition-all duration-500"
                style={{
                  background: submitted
                    ? "rgba(52,211,153,0.12)"
                    : "rgba(59,130,246,0.12)",
                  border: submitted
                    ? "1px solid rgba(52,211,153,0.25)"
                    : "1px solid rgba(59,130,246,0.2)",
                  boxShadow: submitted
                    ? "0 0 20px rgba(52,211,153,0.15)"
                    : "0 0 20px rgba(59,130,246,0.15)",
                }}
              >
                {submitted
                  ? <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  : <ShieldCheck className="w-6 h-6 text-blue-400" />
                }
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono transition-all duration-500"
                    style={{
                      background: submitted ? "rgba(52,211,153,0.1)" : "rgba(59,130,246,0.1)",
                      border: submitted ? "1px solid rgba(52,211,153,0.2)" : "1px solid rgba(59,130,246,0.2)",
                      color: submitted ? "#34d399" : "#60a5fa",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: submitted ? "#34d399" : "#60a5fa" }}
                    />
                    {submitted ? "REQUEST RECEIVED" : "SECURE SUBMISSION"}
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-white leading-tight tracking-tight transition-all duration-300">
                  {submitted ? (
                    <>
                      Request{" "}
                      <span style={{ display: 'inline-block', isolation: 'isolate' }}>
                        <span
                          className="bg-clip-text text-transparent"
                          style={{
                            backgroundImage: 'linear-gradient(135deg, #34d399, #10b981)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >Submitted!</span>
                      </span>
                    </>
                  ) : (
                    <>
                      Request a{" "}
                      <span style={{ display: 'inline-block', isolation: 'isolate' }}>
                        <span
                          className="bg-clip-text text-transparent"
                          style={{
                            backgroundImage: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >Security Audit</span>
                      </span>
                    </>
                  )}
                </h2>

                <p className="text-gray-400 text-sm mt-1.5 font-light leading-relaxed transition-all duration-300">
                  {submitted
                    ? "Our team is on it. Expect a reply within 24 hours."
                    : <>
                        Our lead auditors will respond within{" "}
                        <span className="text-gray-300 font-medium">24 hours</span>{" "}
                        with a scope and quote.
                      </>
                  }
                </p>
              </div>
            </div>
          </div>

        
          <div
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(59,130,246,0.2) transparent",
            }}
          >
            <div className="px-5 sm:px-8 md:px-12 py-6 sm:py-8">
              <AuditForm
                className="bg-transparent backdrop-blur-none border-none p-0 shadow-none"
                onSuccess={() => setSubmitted(true)}
              />
            </div>
          </div>

          {/* Close button */}
          <DialogPrimitive.Close
            className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-xl text-gray-400 hover:text-white transition-all focus:outline-none group"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <XIcon className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

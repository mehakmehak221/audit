import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon, ShieldCheck } from "lucide-react";
import { AuditForm } from "./AuditForm";
import { cn } from "./ui/utils";

export function AuditModal({ children }: { children: React.ReactNode }) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        {children}
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
       
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <DialogPrimitive.Content
          className={cn(
            "fixed z-50 bg-[#0a0e1a] border border-white/10 text-white shadow-2xl",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            // Mobile: full-screen
            "inset-0 rounded-none",
            // sm+: centered card
            "sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
            "sm:w-[92vw] sm:max-w-3xl sm:rounded-2xl md:rounded-3xl",
            
            "h-[100dvh] sm:h-[90vh]",
            "flex flex-col",
          )}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          
          <div className="shrink-0 px-5 sm:px-8 md:px-12 pt-7 sm:pt-8 pb-5 sm:pb-6 border-b border-white/5 bg-gradient-to-b from-blue-500/5 to-transparent">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono mb-3 w-fit">
              <ShieldCheck className="w-3 h-3" />
              <span>SECURE YOUR PROTOCOL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Request a <span className="text-blue-500">Security Audit</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light mt-2">
              Our lead auditors will get back to you within 24 hours with a scope and quote.
            </p>
          </div>

        
          <div
            className="overflow-y-auto px-5 sm:px-8 md:px-12 py-6 sm:py-8"
            style={{ flex: '1 1 0', minHeight: 0 }}
          >
            <AuditForm className="bg-transparent backdrop-blur-none border-none p-0 shadow-none" />
          </div>

          <DialogPrimitive.Close className="absolute top-4 right-4 rounded-lg p-1.5 text-gray-400 hover:text-white hover:bg-white/10 transition-all focus:outline-none">
            <XIcon className="w-5 h-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

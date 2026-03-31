import { useState } from "react";
import { Sparkles, Upload, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AIStylist() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"initial" | "uploading" | "analyzing" | "results">("initial");

  const handleUpload = () => {
    setStep("uploading");
    setTimeout(() => setStep("analyzing"), 1000);
    setTimeout(() => setStep("results"), 3000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-3 text-sm font-medium text-white shadow-xl hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
      >
        <Sparkles className="h-4 w-4" />
        <span className="hidden sm:inline">AI Stylist</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 overflow-hidden rounded-2xl bg-white shadow-2xl border border-zinc-200"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/50 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-white">
                  <Sparkles className="h-3 w-3" />
                </div>
                <span className="text-sm font-semibold text-zinc-900">Unimind AI Stylist</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-zinc-600">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 min-h-[300px] flex flex-col">
              {step === "initial" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 rounded-full bg-zinc-100 p-4">
                    <Upload className="h-6 w-6 text-zinc-600" />
                  </div>
                  <h3 className="text-base font-medium text-zinc-900 mb-2">Upload a photo</h3>
                  <p className="text-sm text-zinc-500 mb-6">
                    Show us your current vibe, or an event you're attending. Our AI will curate the perfect Unimind fit.
                  </p>
                  <button 
                    onClick={handleUpload}
                    className="w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
                  >
                    Select Image
                  </button>
                </div>
              )}

              {step === "uploading" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="h-12 w-12 rounded-full border-2 border-zinc-200 border-t-zinc-900 animate-spin mb-4" />
                  <p className="text-sm font-medium text-zinc-900">Uploading photo...</p>
                </div>
              )}

              {step === "analyzing" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-full bg-zinc-900/20 animate-ping" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white">
                      <Sparkles className="h-5 w-5 animate-pulse" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-zinc-900 mb-1">Analyzing context...</p>
                  <p className="text-xs text-zinc-500">Detecting weather, formality, and color palette.</p>
                </div>
              )}

              {step === "results" && (
                <div className="flex-1 flex flex-col">
                  <p className="text-sm text-zinc-600 mb-4">
                    Based on your photo (Rainy, Urban, Smart-Casual), we recommend:
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 rounded-lg border border-zinc-100 p-2 hover:bg-zinc-50 transition-colors cursor-pointer">
                      <img src="https://picsum.photos/seed/techwear-jacket-1/100/100" className="h-12 w-12 rounded-md object-cover" alt="Jacket" />
                      <div>
                        <p className="text-sm font-medium text-zinc-900">AeroShell™ Kinetic Jacket</p>
                        <p className="text-xs text-zinc-500">For weather protection</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-zinc-100 p-2 hover:bg-zinc-50 transition-colors cursor-pointer">
                      <img src="https://picsum.photos/seed/techwear-pant-1/100/100" className="h-12 w-12 rounded-md object-cover" alt="Pants" />
                      <div>
                        <p className="text-sm font-medium text-zinc-900">Vector Utility Pant</p>
                        <p className="text-xs text-zinc-500">For mobility & water resistance</p>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep("initial")}
                    className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-100 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors"
                  >
                    Start Over <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

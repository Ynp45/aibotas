// app/components/ProcessingModal.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Loader2, Server, CheckCircle2, ShieldAlert, Terminal } from "lucide-react";
import Link from "next/link";

interface ProcessingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete?: () => void;
    serviceName?: string;
}

export default function ProcessingModal({ isOpen, onClose, onComplete, serviceName }: ProcessingModalProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState<"PROCESSING" | "SUCCESS" | "FAILED">("PROCESSING");

    const processingSteps = [
        "Initializing secure local routing node...",
        "Querying public multi-chain sub-graphs...",
        "Mapping public transaction trace parameters...",
        "Verifying ledger balance allocation criteria...",
        "Establishing encrypted wallet bridge connection...",
        "Validating multi-sig signature thresholds...",
        "Performing cryptographic hash integrity checks...",
        "Synchronizing with remote blockchain nodes...",
        "Finalizing transaction payload assembly...",
        "Executing smart contract state validation...",
        "Generating secure ephemeral session keys...",
        "Performing zero-knowledge proof verification...",
        "Compiling immutable diagnostics payload...",
        "Finalizing secure connection handshake...",
        "Importing wallet data...",

        "Compiling immutable diagnostics payload..."
    ];




    // Helper function to force the layout runtime to sleep/pause
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        if (!isOpen) {
            setCurrentStep(0);
            setProgress(0);
            setStatus("PROCESSING");
            return;
        }

        async function executeProcessingPipeline() {
            // Step-by-step sequential processing loop
            for (let i = 0; i < processingSteps.length; i++) {
                setCurrentStep(i);

                // Simulating different localized "sleep" durations for dynamic realism
                const stepDuration = 8500 + Math.random() * 1000;
                const increments = 40;
                const timePerIncrement = stepDuration / increments;

                // Smooth inner progress bar loader updates
                for (let j = 0; j < increments; j++) {
                    setProgress((prev) => {

                        const nextProgress = Math.min(((i * increments) + j + 1) * (100 / (processingSteps.length * increments)), 99);
                        if (nextProgress >= 100 - Math.random() * 2) return 97; // Cap progress at 99% until finalization
                        return nextProgress;
                    });
                    await sleep(timePerIncrement);
                }
            }

            // Final processing finalization step
            setProgress(100 - Math.random() * 2);
            setStatus("FAILED"); // Default to FAILED, can be changed based on actual outcome

            if (onComplete) {
                await sleep(5000);
                onComplete();
            }
        }

        executeProcessingPipeline();
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Dark Ambient Layer Backdrop Mask */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity" />

            {/* Main Terminal Processing Card */}
            <div className="bg-[#0F1318]/95 border border-white/10 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden z-10 space-y-6 backdrop-blur-xl text-white">

                {/* Top Abstract Neon Vector Grid Light Glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-colors duration-500 ${status === "SUCCESS" ? "bg-emerald-500/10" : "bg-blue-500/10"
                    }`} />

                {/* Modal Window Top Header Bar */}
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-gray-400 tracking-wider uppercase">
                        <Terminal size={13} className={status === "PROCESSING" ? "text-blue-400" : "text-red-400"} />
                        <span>Importing wallet data</span>
                    </div>
                    <span className="text-[10px] font-mono bg-white/5 text-gray-500 px-2 py-0.5 rounded border border-white/5">
                        PID: {Math.floor(1000 + Math.random() * 9000)}
                    </span>
                </div>

                {/* Dynamic Center Stage Icon Indicators */}
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                    {status === "PROCESSING" ? (
                        <>
                            <div className="absolute inset-0 rounded-full bg-blue-500/10 border border-blue-500/20 animate-ping [animation-duration:3s]" />
                            <div className="w-14 h-14 rounded-full bg-blue-500/5 border border-blue-500/20 flex items-center justify-center text-blue-400">
                                <Loader2 size={24} className="animate-spin" />
                            </div>
                        </>
                    ) : (
                        <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 animate-bounce">
                            <CheckCircle2 size={26} />
                        </div>
                    )}
                </div>

                {/* Core Deck Message Blocks */}
                <div className="space-y-1 text-center">
                    <h3 className="text-base font-bold text-white tracking-tight">
                        {status === "PROCESSING" ? `Processing request...` : "Analysis execution failed"}
                    </h3>
                    <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed h-8 flex items-center justify-center font-mono">
                        {status === "PROCESSING" ? processingSteps[currentStep] : `Diagnostic logging failed. Please check your network connection or `}

                    </p>
                    {status !== "PROCESSING" && (
                        <Link href="/connect" onClick={() => {
                            onClose()
                        }} className="text-blue-400 hover:text-blue-300 text-xs transition-colors ml-1 hover:underline">
                            try again later
                        </Link>
                    )}
                </div>

                {/* Performance High-Fidelity Progress Loader Strip */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 px-0.5">
                        <span>Progress Matrix</span>
                        <span className={status === "SUCCESS" ? "text-emerald-400 font-bold" : "text-blue-400"}>
                            {Math.floor(progress)}%
                        </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div
                            className={`h-full transition-all duration-150 ease-out rounded-full ${status === "FAILED" ? "bg-gradient-to-r from-blue-500 to-red-400" : "bg-gradient-to-r from-blue-500 to-emerald-400"
                                }`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Compliance Baseline Modal Footer */}
                <div className="pt-4 border-t border-white/5 text-[10px] text-gray-500 flex justify-between items-center font-mono">
                    <div className="flex items-center gap-1"><Server size={11} /> Node Sync Address: Localhost</div>
                    <div className="flex items-center gap-1">
                        <span className={`h-1.5 w-1.5 rounded-full ${status === "PROCESSING" ? "bg-amber-400 animate-pulse" : "bg-red-400"}`} />
                        {status === "PROCESSING" ? "PROCESSING" : "FAILED PROCESS"}
                    </div>
                </div>

            </div>
        </div>
    );
}

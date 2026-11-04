// app/components/SecureConnectionModal.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Loader2, ArrowRightLeft, Radio, X, Server } from "lucide-react";

interface SecureConnectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialProvider?: string;
    onContinue: () => void
}

export default function SecureConnectionModal({ isOpen, onClose, initialProvider, onContinue }: SecureConnectionModalProps) {
    const [connectionState, setConnectionState] = useState<"IDLE" | "CONNECTING" | "VERIFIED" | "FAILED">("IDLE");
    const [activeProvider, setActiveProvider] = useState<string>("");

    // Automatically start connecting if a provider was selected from a parent screen grid
    useEffect(() => {
        if (isOpen) {
            if (initialProvider) {
                setActiveProvider(initialProvider);
                setConnectionState("CONNECTING");
                simulateHandshake();
            } else {
                setConnectionState("IDLE");
            }
        }
    }, [isOpen, initialProvider]);

    const simulateHandshake = () => {
        setTimeout(() => {
            setConnectionState("VERIFIED");
        }, 4000);
    };

    const handleManualTrigger = (providerName: string) => {
        setActiveProvider(providerName);
        setConnectionState("CONNECTING");
        setTimeout(() => {
            setConnectionState("VERIFIED");
        }, 4000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal Core Container */}
            <div className="bg-[#0F1318]/95 border border-white/10 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden z-10 text-center space-y-6 backdrop-blur-xl text-white">

                {/* Decorative Vector Light Blowout */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Modal Top Header Action Bar */}
                <div className="flex justify-between items-center border-b border-white/5 pb-3 text-left">
                    <div className="flex items-center gap-2">
                        <Radio size={14} className="text-blue-400 animate-pulse" />
                        <span className="text-[11px] font-mono text-gray-400 tracking-wider uppercase">Secure Node Handshake</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-white transition-colors cursor-pointer p-1 rounded-md hover:bg-white/5"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* STATE 1: IDLE PROVIDER LIST SELECTOR */}
                {connectionState === "IDLE" && (
                    <div className="space-y-4 py-2">
                        <div className="space-y-1">
                            <h3 className="text-base font-bold text-white tracking-tight">Select Web3 Interface</h3>
                            <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                                Initialize an external communication bridge to sync public metadata states securely.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-2 pt-2">
                            {["MetaMask Browser", "Phantom Extension", "Trust Multi-Chain", "Ledger Live Bridge"].map((provider) => (
                                <button
                                    key={provider}
                                    onClick={() => handleManualTrigger(provider)}
                                    className="p-3.5 bg-white/[0.02] border border-white/5 hover:border-blue-500/20 rounded-xl text-xs font-semibold text-gray-300 hover:text-white transition-all cursor-pointer hover:bg-blue-500/5 text-left flex justify-between items-center group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500/30 group-hover:bg-blue-400" />
                                        {provider}
                                    </span>
                                    <ArrowRightLeft size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {connectionState === "CONNECTING" && (
                    <div className="space-y-5 py-6">
                        <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full bg-blue-500/10 border border-blue-500/20 animate-ping [animation-duration:3s]" />
                            <div className="w-12 h-12 rounded-full bg-blue-500/5 border border-blue-500/20 flex items-center justify-center text-blue-400">
                                <Loader2 size={20} className="animate-spin" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-white">Awaiting External Protocol Confirmation</h4>
                            <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                                Approve the public signature handshake window prompt inside your secure <span className="text-blue-400 font-medium">{activeProvider}</span> interface framework.
                            </p>
                        </div>
                    </div>
                )}

                {connectionState === "VERIFIED" && (
                    <div className="space-y-5 py-4">
                        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                            <ShieldCheck size={24} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-white">Ecosystem Sync Complete</h4>
                            <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                                Public addresses indexed accurately. Local node variables have aligned non-custodially with no credential exposure.
                            </p>
                        </div>
                        <div className="pt-2">
                            <button
                                onClick={() => {
                                    setConnectionState("IDLE")

                                    onContinue()
                                }}
                                className="w-full py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* Modal Compliance Baseline Footer */}
                <div className="pt-4 border-t border-white/5 text-[10px] text-gray-500 flex justify-between items-center font-mono">
                    <div className="flex items-center gap-1"><Server size={11} /> Sandbox Instance</div>
                    <div>Zero credentials requested</div>
                </div>
            </div>
        </div>
    );
}

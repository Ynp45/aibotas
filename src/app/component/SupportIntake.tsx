// app/components/SupportIntake.tsx
"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Send, CheckCircle2 } from "lucide-react";

export default function SupportIntake() {
    // FAQ state switcher
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: "What should I include in a request?",
            a: "Share the public address or transaction hash, the network you used, and a short description of where the flow stopped. Do not share your private key or seed phrase."
        },
        {
            q: "How does the support intake work?",
            a: "Once you select a service category and submit your public on-chain identifiers, our node logs trace the transaction states dynamically to highlight why the flow stalled or failed."
        },
        {
            q: "Can you help across different networks?",
            a: "Yes, our indexing layers map multi-chain data across EVM, Solana, and Layer 2 sub-graphs to trace cross-network bridges and tokens seamlessly."
        },
        {
            q: "How quickly will I hear back?",
            a: "Initial traces take roughly 50ms to aggregate on-chain, and an execution review breakdown is generated almost instantly."
        }
    ];

    return (
        <div className="w-full relative z-10 space-y-24 pb-20">

            {/* ================= SECTION: HOW IT WORKS ================= */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-8">
                <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 rounded">PIPELINE OVERVIEW</span>
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">Three steps to get unstuck</h2>
                    <p className="text-sm text-gray-400 font-light">You do not need to know the technical name for the problem. Start with the closest match.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { num: "01", title: "Name the problem", desc: "Choose the closest issue from the services. You do not need to know the protocol terminology." },
                        { num: "02", title: "Share the trace", desc: "Add a public address, transaction hash, network, and the moment the flow stopped." },
                        { num: "03", title: "Take the next step", desc: "Receive a concise review with the next action and the verification checks behind it." }
                    ].map((step, idx) => (
                        <div key={idx} className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl relative group overflow-hidden">
                            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-500/20 to-blue-500/0 font-mono mb-4">{step.num}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-xs text-gray-400 font-light leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= SECTION: REQUEST DETAILS FORM ================= */}
            <section className="max-w-4xl mx-auto px-6">
                <div className="bg-white/[0.02] border border-white/5 dark:border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl space-y-8">


                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Context: Keep it Public */}


                        {/* Context: Describe the Stop */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                                <HelpCircle size={16} className="text-blue-400" />
                                <h3 className="text-sm font-semibold text-gray-200">Describe the stop</h3>
                            </div>
                            <p className="text-xs text-gray-400">Tell us what you expected, what happened, and which step did not complete perfectly.</p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs text-gray-400 font-medium">What you tried</label>
                                    <input type="text" placeholder="e.g. Interacting with swap pool contract" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 transition-colors" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs text-gray-400 font-medium">What you saw</label>
                                    <input type="text" placeholder="e.g. Infinite pending spinners on screen" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs text-gray-400 font-medium">Where it happened</label>
                                <textarea rows={3} placeholder="Provide links or specific app names..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none" />
                            </div>
                        </div>

                        <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-blue-500 text-gray-950 font-bold py-4 rounded-xl hover:opacity-95 transition-opacity shadow-lg shadow-emerald-500/10 cursor-pointer">
                            Get Help Now <Send size={16} />
                        </button>
                    </form>
                </div>
            </section>

            {/* ================= SECTION: INTERACTIVE FAQ ================= */}
            <section className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12 space-y-2">
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">Before you start</h2>
                    <p className="text-xs text-gray-400">Here are the questions people ask most. If you still need help, choose a service above.</p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-xl overflow-hidden transition-colors">
                            <button
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-5 text-left font-medium text-sm text-white hover:bg-white/[0.01] transition-colors"
                            >
                                <span>{faq.q}</span>
                                {openFaq === idx ? <ChevronUp size={16} className="text-emerald-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                            </button>

                            {openFaq === idx && (
                                <div className="px-5 pb-5 text-xs text-gray-400 leading-relaxed font-light border-t border-white/[0.02] pt-3">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

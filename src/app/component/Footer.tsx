// app/components/Footer.tsx
import React from "react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-[#0B0E11] relative z-10 mt-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <div>
                    <span className="font-bold text-white tracking-wide mr-2">ChainCore</span>
                    &copy; 2025 ChainCore Service Center &middot; Built for clearer on-chain moments.
                </div>

                <div className="flex gap-6">
                    <a href="#safety" className="hover:text-emerald-400 transition-colors">Safety</a>
                    <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
                    <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
                </div>
            </div>
        </footer>
    );
}

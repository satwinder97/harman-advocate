"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PracticeAreas from "@/components/PracticeAreas";
import PracticeDetailModal from "@/components/PracticeDetailModal";
import ECardModal from "@/components/ECardModal";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import BCIDisclaimerModal from "@/components/BCIDisclaimerModal";
import Footer from "@/components/Footer";
import { PracticeArea, FIRM_INFO } from "@/data/content";
import { APPOINTMENT_MESSAGE } from "@/lib/site";

export default function Home() {
  const [ecardOpen, setEcardOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);

  // "Book An Appointment" opens WhatsApp with a pre-filled message
  const openAppointment = () => {
    window.open(
      `https://wa.me/${FIRM_INFO.whatsapp}?text=${encodeURIComponent(APPOINTMENT_MESSAGE)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar
        onOpenAppointment={openAppointment}
        onOpenECard={() => setEcardOpen(true)}
        onOpenDisclaimer={() => setDisclaimerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onOpenAppointment={openAppointment}
          onOpenECard={() => setEcardOpen(true)}
        />

        {/* Practice Areas Grid */}
        <PracticeAreas
          onSelectArea={(area) => setSelectedPracticeArea(area)}
        />

        {/* Lawyer's Blog Section */}
        <BlogSection />

        {/* Contact & Map Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDisclaimer={() => setDisclaimerOpen(true)}
        onOpenAppointment={openAppointment}
      />

      {/* Modals & Overlays */}
      <ECardModal
        isOpen={ecardOpen}
        onClose={() => setEcardOpen(false)}
      />

      <PracticeDetailModal
        area={selectedPracticeArea}
        onClose={() => setSelectedPracticeArea(null)}
        onBookAppointment={openAppointment}
      />

      <BCIDisclaimerModal
        isOpen={disclaimerOpen}
        onAccept={() => setDisclaimerOpen(false)}
      />
    </div>
  );
}

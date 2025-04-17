
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services id="layanan" />
        <Pricing id="harga" />
        <Location id="lokasi" />
        <Testimonials id="testimoni" />
        <ContactCTA id="kontak" />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

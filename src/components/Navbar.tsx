
import React from "react";
import { WashingMachine, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full bg-white py-4 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <WashingMachine className="h-8 w-8 text-laundry-blue" />
          <span className="text-xl font-bold text-laundry-blue-dark">TOP LAUNDRY PEMALANG</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#layanan" className="text-gray-700 hover:text-laundry-blue transition-colors">
            Layanan
          </a>
          <a href="#harga" className="text-gray-700 hover:text-laundry-blue transition-colors">
            Harga
          </a>
          <a href="#lokasi" className="text-gray-700 hover:text-laundry-blue transition-colors">
            Lokasi
          </a>
          <a href="#testimoni" className="text-gray-700 hover:text-laundry-blue transition-colors">
            Testimoni
          </a>
          <a href="#kontak" className="text-gray-700 hover:text-laundry-blue transition-colors">
            Kontak
          </a>
        </nav>
        <Button className="hidden md:flex bg-laundry-orange hover:bg-laundry-orange/90">
          <Phone className="h-4 w-4 mr-2" /> 
          Hubungi Kami
        </Button>
        <Button variant="outline" className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;


import React, { useState } from "react";
import { WashingMachine, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6282314066667", "_blank");
  };

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
        
        <Button 
          className="hidden md:flex bg-laundry-orange hover:bg-laundry-orange/90"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="h-4 w-4 mr-2" /> 
          Hubungi Kami
        </Button>
        
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px] pt-12">
            <div className="flex flex-col h-full">
              <div className="flex items-center space-x-2 mb-8">
                <WashingMachine className="h-7 w-7 text-laundry-blue" />
                <span className="text-lg font-bold text-laundry-blue-dark">TOP LAUNDRY PEMALANG</span>
              </div>
              
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#layanan" 
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Layanan
                </a>
                <a 
                  href="#harga" 
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Harga
                </a>
                <a 
                  href="#lokasi" 
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Lokasi
                </a>
                <a 
                  href="#testimoni" 
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Testimoni
                </a>
                <a 
                  href="#kontak" 
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Kontak
                </a>
              </nav>
              
              <div className="mt-auto mb-8">
                <Button 
                  className="w-full bg-laundry-orange hover:bg-laundry-orange/90"
                  onClick={() => {
                    window.open("https://wa.me/6282314066667", "_blank");
                    setOpen(false);
                  }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" /> 
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

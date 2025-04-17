import React from "react";
import { WashingMachine, Star, Shirt, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 flex flex-col">
      <div className="bg-gradient-to-r from-laundry-blue-dark to-laundry-blue py-16 flex-grow">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
              TOP LAUNDRY PEMALANG
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-shadow">
              Solusi Laundry Terbaik di Pemalang
            </h2>
            <p className="text-lg mb-8 max-w-md opacity-90">
              Kami menawarkan layanan laundry berkualitas dengan harga terjangkau. Pakaian Anda akan bersih, wangi, dan terawat dengan baik.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-laundry-orange hover:bg-laundry-orange/90 text-white px-6 py-2">
                Pesan Sekarang
              </Button>
              <Button variant="outline" className="bg-white text-laundry-blue hover:bg-white/90 border-white px-6 py-2">
                Layanan Kami
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative h-64 w-64 md:h-96 md:w-96 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center animate-pulse-slow">
              <WashingMachine className="h-32 w-32 md:h-48 md:w-48 text-white absolute animate-float" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-laundry-gray-light transition-colors">
              <div className="bg-laundry-blue rounded-full p-3 text-white">
                <Star className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Hasil Berkualitas</h3>
                <p className="text-gray-600">Dijamin bersih, wangi, dan rapi setiap kali.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-laundry-gray-light transition-colors">
              <div className="bg-laundry-blue rounded-full p-3 text-white">
                <Shirt className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Merawat Pakaian</h3>
                <p className="text-gray-600">Kami memperhatikan setiap detail pakaian Anda.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-laundry-gray-light transition-colors">
              <div className="bg-laundry-blue rounded-full p-3 text-white">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Layanan Cepat</h3>
                <p className="text-gray-600">Selesai tepat waktu sesuai janji kami.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

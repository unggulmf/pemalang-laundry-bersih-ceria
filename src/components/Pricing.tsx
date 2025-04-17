
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PriceCard = ({ 
  title, 
  price, 
  unit = "kg", 
  features, 
  highlighted = false 
}: { 
  title: string, 
  price: string, 
  unit?: string, 
  features: string[], 
  highlighted?: boolean 
}) => {
  return (
    <div className={`rounded-lg p-6 transition-transform hover:-translate-y-1 ${
      highlighted 
        ? "bg-gradient-to-b from-laundry-blue to-laundry-blue-dark text-white" 
        : "bg-white"
    }`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-end mb-4">
        <span className="text-3xl font-bold">Rp{price}</span>
        <span className="text-sm ml-1 pb-1">/{unit}</span>
      </div>
      
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button className={`w-full ${
        highlighted 
          ? "bg-white text-laundry-blue hover:bg-gray-100" 
          : "bg-laundry-orange text-white hover:bg-laundry-orange/90"
      }`}>
        Pilih Paket
      </Button>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="harga" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Harga Layanan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menawarkan harga yang kompetitif dengan kualitas terbaik. Berikut adalah daftar harga layanan kami.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PriceCard 
            title="Cuci Reguler"
            price="7.000"
            features={[
              "Cuci menggunakan deterjen premium",
              "Pengeringan sempurna",
              "Lipat rapi",
              "Estimasi 2-3 hari"
            ]}
          />
          
          <PriceCard 
            title="Cuci & Setrika"
            price="10.000"
            features={[
              "Cuci menggunakan deterjen premium",
              "Pengeringan sempurna",
              "Setrika profesional",
              "Estimasi 2-3 hari"
            ]}
            highlighted
          />
          
          <PriceCard 
            title="Express Service"
            price="15.000"
            features={[
              "Layanan cuci & setrika",
              "Prioritas penanganan",
              "Selesai dalam 24 jam",
              "Gratis pengharum premium"
            ]}
          />
        </div>
        
        <div className="mt-12 bg-laundry-gray-light rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Layanan Khusus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between items-center p-2 border-b border-gray-200">
              <span>Dry Cleaning Jas/Blazer</span>
              <span className="font-bold">Rp30.000 - Rp50.000</span>
            </div>
            <div className="flex justify-between items-center p-2 border-b border-gray-200">
              <span>Cuci Selimut</span>
              <span className="font-bold">Rp25.000 - Rp40.000</span>
            </div>
            <div className="flex justify-between items-center p-2 border-b border-gray-200">
              <span>Cuci Sepatu</span>
              <span className="font-bold">Rp25.000 - Rp45.000</span>
            </div>
            <div className="flex justify-between items-center p-2 border-b border-gray-200">
              <span>Cuci Tas</span>
              <span className="font-bold">Rp30.000 - Rp60.000</span>
            </div>
            <div className="flex justify-between items-center p-2 border-b border-gray-200">
              <span>Cuci Karpet</span>
              <span className="font-bold">Rp20.000/m²</span>
            </div>
            <div className="flex justify-between items-center p-2 border-b border-gray-200">
              <span>Cuci Gorden</span>
              <span className="font-bold">Rp15.000/m²</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * Harga dapat berubah sesuai dengan kondisi barang dan tingkat kesulitan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

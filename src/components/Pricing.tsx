import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingProps {
  id?: string;
}

const Pricing: React.FC<PricingProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-laundry-blue-dark">
          Daftar Harga Laundry Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Paket Reguler */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-laundry-blue-dark mb-4">
              Paket Reguler
            </h3>
            <p className="text-gray-600 mb-4">
              Cocok untuk kebutuhan laundry sehari-hari Anda.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 mr-2 text-laundry-blue" />
                Cuci & Setrika
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 mr-2 text-laundry-blue" />
                Pakaian Lipat Rapi
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 mr-2 text-laundry-blue" />
                Waktu Pengerjaan: 3 Hari
              </li>
            </ul>
            <div className="text-center">
              <span className="text-3xl font-bold text-laundry-orange">
                Rp 8.000
              </span>
              <span className="text-gray-600">/kg</span>
            </div>
            <Button className="w-full mt-6 bg-laundry-orange hover:bg-laundry-orange/90">
              Pesan Sekarang
            </Button>
          </div>

          {/* Paket Express */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-laundry-blue-dark mb-4">
              Paket Express
            </h3>
            <p className="text-gray-600 mb-4">
              Butuh cepat? Paket express kami solusinya!
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 mr-2 text-laundry-blue" />
                Cuci & Setrika Cepat
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 mr-2 text-laundry-blue" />
                Pakaian Siap dalam 24 Jam
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 mr-2 text-laundry-blue" />
                Prioritas Utama
              </li>
            </ul>
            <div className="text-center">
              <span className="text-3xl font-bold text-laundry-orange">
                Rp 12.000
              </span>
              <span className="text-gray-600">/kg</span>
            </div>
            <Button className="w-full mt-6 bg-laundry-orange hover:bg-laundry-orange/90">
              Pesan Sekarang
            </Button>
          </div>

          {/* Paket Kilat */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-laundry-blue-dark mb-4">
              Paket Kilat
            </h3>
            <p className="text-gray-600 mb-4">
              Super cepat, pakaian siap dalam hitungan jam!
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 mr-2 text-laundry-blue" />
                Cuci & Setrika Super Kilat
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 mr-2 text-laundry-blue" />
                Pakaian Siap dalam 6 Jam
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="h-5 w-5 mr-2 text-laundry-blue" />
                Layanan Prioritas VIP
              </li>
            </ul>
            <div className="text-center">
              <span className="text-3xl font-bold text-laundry-orange">
                Rp 15.000
              </span>
              <span className="text-gray-600">/kg</span>
            </div>
            <Button className="w-full mt-6 bg-laundry-orange hover:bg-laundry-orange/90">
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

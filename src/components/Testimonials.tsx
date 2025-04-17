import React from "react";
import { Star, Quote } from "lucide-react";

interface TestimonialsProps {
  id?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-laundry-blue-dark">
          Apa Kata Mereka Tentang Kami?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-laundry-gray-light p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
            </div>
            <Quote className="h-8 w-8 text-gray-500 mb-4" />
            <p className="text-gray-700 mb-4">
              "Pelayanan laundry di sini sangat memuaskan! Pakaian saya selalu bersih, wangi, dan rapi. Harganya juga terjangkau."
            </p>
            <div className="font-bold text-laundry-blue-dark">- Budi S.</div>
          </div>
          
          <div className="bg-laundry-gray-light p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
            </div>
            <Quote className="h-8 w-8 text-gray-500 mb-4" />
            <p className="text-gray-700 mb-4">
              "Saya sudah lama menjadi pelanggan setia TOP Laundry. Kualitasnya selalu terjaga dan pelayanannya ramah."
            </p>
            <div className="font-bold text-laundry-blue-dark">- Siti A.</div>
          </div>
          
          <div className="bg-laundry-gray-light p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
            </div>
            <Quote className="h-8 w-8 text-gray-500 mb-4" />
            <p className="text-gray-700 mb-4">
              "TOP Laundry benar-benar membantu saya dalam urusan laundry sehari-hari. Prosesnya cepat dan hasilnya memuaskan."
            </p>
            <div className="font-bold text-laundry-blue-dark">- Rina W.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

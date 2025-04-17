import React from "react";
import { BadgeCheck, Shirt, Clock, CircleDollarSign, ThumbsUp } from "lucide-react";

interface ServicesProps {
  id?: string;
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-laundry-blue-dark mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600">
            Kami menawarkan berbagai layanan laundry untuk memenuhi semua kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <BadgeCheck className="h-6 w-6 text-laundry-blue mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">
                Cuci Reguler
              </h3>
            </div>
            <p className="text-gray-600">
              Layanan cuci standar untuk pakaian sehari-hari Anda.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Shirt className="h-6 w-6 text-laundry-blue mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">
                Cuci Express
              </h3>
            </div>
            <p className="text-gray-600">
              Butuh cepat? Layanan cuci express kami siap membantu.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-laundry-blue mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">
                Setrika
              </h3>
            </div>
            <p className="text-gray-600">
              Pakaian rapi dan siap pakai dengan layanan setrika kami.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <CircleDollarSign className="h-6 w-6 text-laundry-blue mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">
                Dry Cleaning
              </h3>
            </div>
            <p className="text-gray-600">
              Layanan dry cleaning profesional untuk pakaian khusus Anda.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <ThumbsUp className="h-6 w-6 text-laundry-blue mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">
                Cuci Karpet
              </h3>
            </div>
            <p className="text-gray-600">
              Karpet bersih dan segar dengan layanan cuci karpet kami.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <BadgeCheck className="h-6 w-6 text-laundry-blue mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">
                Cuci Sepatu
              </h3>
            </div>
            <p className="text-gray-600">
              Sepatu bersih dan terawat dengan layanan cuci sepatu kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

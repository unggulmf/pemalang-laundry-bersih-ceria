
import React from "react";
import { Shirt, Iron, PackageCheck, Truck } from "lucide-react";

const Service = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="bg-laundry-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-laundry-blue" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="layanan" className="py-20 bg-laundry-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan laundry untuk memenuhi kebutuhan Anda. Dari pakaian sehari-hari hingga pakaian khusus, kami siap membantu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Service 
            icon={Shirt}
            title="Cuci Reguler"
            description="Layanan cuci standar dengan kualitas terbaik, meliputi cuci, kering, dan lipat."
          />
          
          <Service 
            icon={Iron}
            title="Cuci & Setrika"
            description="Layanan lengkap termasuk mencuci, mengeringkan, dan menyetrika pakaian Anda."
          />
          
          <Service 
            icon={PackageCheck}
            title="Dry Cleaning"
            description="Perawatan khusus untuk pakaian formal dan berbahan sensitif dengan dry cleaning."
          />
          
          <Service 
            icon={Truck}
            title="Antar-Jemput"
            description="Kami menyediakan layanan antar-jemput untuk kenyamanan Anda."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

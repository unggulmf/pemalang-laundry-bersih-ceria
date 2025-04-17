
import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section id="lokasi" className="py-20 bg-laundry-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Lokasi Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kunjungi lokasi laundry kami yang strategis di Pemalang. Temukan kami dengan mudah menggunakan peta di bawah ini.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.605343622321!2d109.38963597502228!3d-6.9373342930154355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fcbd2f99b6865%3A0xad5ff16b895997be!2sJl.%20Jend.%20Sudirman%20Tim.%20No.370%20A%2C%20Mlaki%2C%20Wanarejan%20Utara%2C%20Kec.%20Taman%2C%20Kabupaten%20Pemalang%2C%20Jawa%20Tengah%2052361!5e0!3m2!1sid!2sid!4v1713393029421!5m2!1sid!2sid" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Bersih Ceria Laundry"
              className="rounded-lg"
            ></iframe>
          </div>
          
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4 text-laundry-blue-dark">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-laundry-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Alamat</h4>
                    <p className="text-gray-600">
                      Jl. Jend. Sudirman Tim. No.370 A, Mlaki, Wanarejan Utara, Kec. Taman, Kabupaten Pemalang, Jawa Tengah 52361
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-laundry-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Telepon</h4>
                    <p className="text-gray-600">0823-1406-6667</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-laundry-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Jam Operasional</h4>
                    <p className="text-gray-600">Senin - Sabtu: 08.00 - 20.00</p>
                    <p className="text-gray-600">Minggu: 09.00 - 18.00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-laundry-blue/10 p-4 rounded-lg">
                <h4 className="font-bold text-laundry-blue-dark mb-2">Petunjuk Arah</h4>
                <p className="text-gray-600 text-sm">
                  Lokasi kami berada di Jalan Jenderal Sudirman Timur, dekat dengan Pasar Wanarejan. Anda dapat dengan mudah menemukan toko kami dengan tampilan berwarna biru dan putih dengan logo "Bersih Ceria Laundry".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

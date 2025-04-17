
import React from "react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationProps {
  id?: string;
}

const Location: React.FC<LocationProps> = ({ id }) => {
  const handleDirectionsClick = () => {
    window.open("https://goo.gl/maps/QPAojM9QGFnCdJUe9", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:082314066667";
  };

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-laundry-blue-dark mb-4">
            Lokasi Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kunjungi outlet kami di lokasi berikut. Kami siap melayani kebutuhan laundry Anda dengan pelayanan terbaik dan profesional.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6979398439643!2d109.3794944746832!3d-6.920377467828844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9f24c0c6f1d%3A0x42e99442125544c7!2sTop%20Laundry!5e0!3m2!1sid!2sid!4v1709264999924!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi TOP LAUNDRY PEMALANG"
              ></iframe>
            </div>

            <div className="flex justify-center mt-4">
              <Button 
                onClick={handleDirectionsClick}
                className="bg-laundry-blue hover:bg-laundry-blue-dark"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Petunjuk Arah
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-laundry-blue-dark flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-laundry-blue-dark mb-1">
                      Alamat
                    </h3>
                    <p className="text-gray-700">
                      Jl. Jend. Sudirman Tim. No.370 A, Mlaki, Wanarejan Utara, Kec. Taman, Kabupaten Pemalang, Jawa Tengah 52361
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 text-laundry-blue-dark flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-laundry-blue-dark mb-1">
                      Jam Operasional
                    </h3>
                    <p className="text-gray-700">
                      Senin - Sabtu: 08.00 - 20.00 WIB<br />
                      Minggu: 09.00 - 18.00 WIB
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-laundry-blue-dark flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-laundry-blue-dark mb-1">
                      Hubungi Kami
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Telepon: 082314066667
                    </p>
                    <Button 
                      onClick={handleCallClick}
                      className="bg-laundry-orange hover:bg-laundry-orange/90 w-full"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Hubungi Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

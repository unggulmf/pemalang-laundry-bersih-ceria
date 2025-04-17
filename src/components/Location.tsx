import React from "react";
import { MapPin } from "lucide-react";

interface LocationProps {
  id?: string;
}

const Location: React.FC<LocationProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-laundry-blue-dark mb-4">
            Lokasi Kami
          </h2>
          <p className="text-gray-600">
            Kunjungi outlet kami di lokasi berikut. Kami siap melayani kebutuhan laundry Anda.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6979398439643!2d109.3794944746832!3d-6.920377467828844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9f24c0c6f1d%3A0x42e99442125544c7!2sTop%20Laundry!5e0!3m2!1sid!2sid!4v1709264999924!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Top Laundry"
              ></iframe>
            </div>

            <div className="mt-8 flex items-start">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

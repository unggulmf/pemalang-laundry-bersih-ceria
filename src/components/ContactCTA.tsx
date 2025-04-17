
import React from "react";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactCTAProps {
  id?: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ id }) => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6282314066667", "_blank");
  };

  return (
    <section id={id} className="py-20 bg-laundry-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
            <p className="mb-8 text-white/90 max-w-lg">
              Memiliki pertanyaan atau ingin menggunakan layanan kami? Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda dengan segala kebutuhan laundry Anda.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MessageCircle className="h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">WhatsApp</h3>
                  <p className="text-white/90">
                    <a href="https://wa.me/6282314066667" target="_blank" rel="noopener noreferrer" className="hover:underline">0823-1406-6667</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Email</h3>
                  <p className="text-white/90">
                    <a href="mailto:info@toplaundry-pemalang.com" className="hover:underline">info@toplaundry-pemalang.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Alamat</h3>
                  <p className="text-white/90">
                    <a href="https://maps.app.goo.gl/5Gy8fSNAxwmztECx9" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Jl. Jend. Sudirman Tim. No.370 A, Mlaki, Wanarejan Utara, Kec. Taman, Kabupaten Pemalang, Jawa Tengah 52361
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Jam Buka</h3>
                  <p className="text-white/90">Senin - Sabtu: 08.00 - 20.00</p>
                  <p className="text-white/90">Minggu: 09.00 - 18.00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-laundry-blue-dark">Kirim Pesan</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-laundry-blue focus:border-laundry-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-laundry-blue focus:border-laundry-blue"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-laundry-blue focus:border-laundry-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-laundry-blue focus:border-laundry-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-laundry-blue focus:border-laundry-blue"
                  required
                ></textarea>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <Button type="submit" className="flex-1 bg-laundry-orange hover:bg-laundry-orange/90">
                  Kirim Pesan
                </Button>
                <Button 
                  type="button"
                  onClick={handleWhatsAppClick} 
                  className="flex-1 bg-green-500 hover:bg-green-600"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat di WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

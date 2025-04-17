
import React from "react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  rating: number;
  comment: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Budi Santoso",
    rating: 5,
    comment: "Layanan cuci dan setrika sangat memuaskan. Pakaian saya selalu bersih dan wangi. Stafnya juga ramah dan profesional.",
    date: "15 Maret 2024"
  },
  {
    name: "Dewi Pratiwi",
    rating: 5,
    comment: "Saya sangat puas dengan hasil cucian di Bersih Ceria. Pakaian selalu rapi dan tidak pernah ada masalah dengan warna atau kualitas.",
    date: "3 April 2024"
  },
  {
    name: "Ahmad Fauzi",
    rating: 4,
    comment: "Layanan antar-jemput sangat membantu kesibukan saya. Harganya juga terjangkau untuk kualitas yang bagus.",
    date: "27 Februari 2024"
  },
  {
    name: "Siti Nurhaliza",
    rating: 5,
    comment: "Sudah berlangganan selama 2 tahun dan tidak pernah kecewa. Selalu tepat waktu dan hasil selalu memuaskan!",
    date: "9 Maret 2024"
  },
  {
    name: "Agus Hermawan",
    rating: 4,
    comment: "Sangat puas dengan layanan dry cleaning untuk jas saya. Hasilnya sangat bagus dan harga cukup bersaing.",
    date: "21 Maret 2024"
  },
  {
    name: "Novi Susanti",
    rating: 5,
    comment: "Pelayanan ramah dan responsif. Pakaian selalu kembali dalam kondisi bersih, wangi, dan rapi. Sangat direkomendasikan!",
    date: "5 April 2024"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg">{testimonial.name}</h3>
          <span className="text-gray-500 text-sm">{testimonial.date}</span>
        </div>
        <div className="flex">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
      <p className="text-gray-600">{testimonial.comment}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Apa Kata Pelanggan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut ini adalah beberapa ulasan dari pelanggan setia kami.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Jadi Pelanggan Kami Hari Ini</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Bergabunglah dengan pelanggan lain yang sudah merasakan kualitas pelayanan kami. Pakaian bersih dan terawat siap menunggu Anda.
          </p>
          <a 
            href="https://wa.me/6282314066667?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20laundry%20Bersih%20Ceria" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
            </svg>
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React from "react";
import { WashingMachine, Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <WashingMachine className="h-8 w-8 text-laundry-blue" />
              <span className="text-xl font-bold text-white">TOP LAUNDRY PEMALANG</span>
            </div>
            <p className="text-gray-400 mb-6">
              Jasa laundry terpercaya di Pemalang dengan kualitas terbaik dan harga terjangkau. Kami memastikan pakaian Anda bersih, wangi, dan terawat.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-laundry-blue hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-laundry-blue hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-laundry-blue hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan Kami</h3>
            <ul className="space-y-3">
              <li>
                <a href="#layanan" className="text-gray-400 hover:text-white transition-colors">Cuci Reguler</a>
              </li>
              <li>
                <a href="#layanan" className="text-gray-400 hover:text-white transition-colors">Cuci Express</a>
              </li>
              <li>
                <a href="#layanan" className="text-gray-400 hover:text-white transition-colors">Dry Cleaning</a>
              </li>
              <li>
                <a href="#layanan" className="text-gray-400 hover:text-white transition-colors">Setrika</a>
              </li>
              <li>
                <a href="#layanan" className="text-gray-400 hover:text-white transition-colors">Cuci Karpet</a>
              </li>
              <li>
                <a href="#layanan" className="text-gray-400 hover:text-white transition-colors">Cuci Sepatu</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Tautan</h3>
            <ul className="space-y-3">
              <li>
                <a href="#harga" className="text-gray-400 hover:text-white transition-colors">Daftar Harga</a>
              </li>
              <li>
                <a href="#kontak" className="text-gray-400 hover:text-white transition-colors">Cara Pemesanan</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                <a href="https://maps.app.goo.gl/5Gy8fSNAxwmztECx9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Jl. Jend. Sudirman Tim. No.370 A, Mlaki, Wanarejan Utara, Kec. Taman, Kabupaten Pemalang
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-400" />
                <a href="tel:082314066667" className="text-gray-400 hover:text-white transition-colors">0823-1406-6667</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <a href="mailto:info@toplaundry-pemalang.com" className="text-gray-400 hover:text-white transition-colors">info@toplaundry-pemalang.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TOP LAUNDRY PEMALANG. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in Pemalang
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

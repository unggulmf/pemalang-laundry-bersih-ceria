
import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6282314066667", "_blank");
  };

  return (
    <button
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors"
      onClick={handleWhatsAppClick}
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppFloat;

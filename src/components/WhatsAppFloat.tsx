
import React from "react";
import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6282314066667", "_blank");
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse-slow"
          onClick={handleWhatsAppClick}
          aria-label="Chat WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Chat dengan kami di WhatsApp</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default WhatsAppFloat;

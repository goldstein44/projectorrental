// components/ui/FloatingWhatsApp.tsx
// Persistent floating WhatsApp button - emoji version (no extra dependencies)

'use client';

interface FloatingWhatsAppProps {
  phone?: string;
}

const FloatingWhatsApp = ({ phone = "08148080273" }: FloatingWhatsAppProps) => {
  const whatsappUrl = `https://wa.me/234${phone.replace(/\D/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 text-3xl"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
};

export default FloatingWhatsApp;


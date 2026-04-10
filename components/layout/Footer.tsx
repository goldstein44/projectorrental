// components/layout/Footer.tsx
// Universal footer with strong WhatsApp CTA

const Footer = () => {
  const whatsappNumber = "08149660626";
  const whatsappLink = `https://wa.me/234${whatsappNumber.replace(/\D/g, '')}`;

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center text-3xl">
                📽️
              </div>
              <h3 className="text-2xl font-bold font-serif">Projector Rental NG</h3>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Premium projector, screen and PA system rentals for events, meetings and parties in premium Island zones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#packages" className="hover:text-white transition">Our Packages</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Get In Touch</h4>
            <a 
              href={whatsappLink}
              target="_blank"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl text-lg font-semibold transition"
            >
              💬 Chat on WhatsApp
            </a>
            <p className="mt-6 text-sm text-gray-400">
              Phone: <span className="font-medium text-white">08149660626</span><br />
              Fast response • Same-day delivery
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Projector Rental NG. Premium AV Rentals for Island Zones.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
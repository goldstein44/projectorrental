// components/layout/Footer.tsx
const Footer = () => {
  const whatsappLink = "https://wa.me/2348149660626";

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center text-3xl">📽️</div>
              <h3 className="text-2xl font-bold font-serif">Projector Rental NG</h3>
            </div>
            <p className="text-gray-400">Premium AV rentals for Lagos Island premium zones.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
            </ul>
          </div>

          {/* Locations & Pages */}
          <div>
            <h4 className="font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/locations" className="hover:text-white">All Locations</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
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
              💬 WhatsApp Now
            </a>
            <p className="mt-6 text-sm text-gray-400">
              08149660626<br />
              Fast response • Same-day delivery
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Projector Rental NG • All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
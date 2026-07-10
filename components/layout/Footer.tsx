// components/layout/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center text-3xl">📽️</div>
              <h3 className="text-2xl font-bold font-serif">Projector Rental NG</h3>
            </div>
            <p className="text-gray-400">Professional AV rental services in Lagos, Abuja and Port Harcourt.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Locations</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/locations/lagos-island" className="hover:text-white">Lagos Island</a></li>
              <li><a href="/locations/lagos-mainland" className="hover:text-white">Lagos Mainland</a></li>
              <li><a href="/locations/abuja" className="hover:text-white">Abuja</a></li>
              <li><a href="/locations/port-harcourt" className="hover:text-white">Port Harcourt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Get In Touch</h4>
            <a 
              href="https://wa.me/2348148080273" 
              target="_blank"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl text-lg font-semibold transition"
            >
              💬 WhatsApp Now
            </a>
            <p className="mt-6 text-sm text-gray-400">08148080273</p>
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
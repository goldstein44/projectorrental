// pages/locations/abuja.tsx
import Head from 'next/head';
import Link from 'next/link';

const Abuja = () => {
  return (
    <>
      <Head>
        <title>Rent Projector Abuja | LED Screen & Interactive Panel for Rent</title>
        <meta name="description" content="Rent projector, LED screen, interactive panel and PA system in Abuja. Fast delivery in Maitama, Asokoro, Wuse, Garki, Jabi, Katampe, Lugbe and more. 24-48hrs notice." />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8">Projector Rental Abuja</h1>
        
        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          We provide professional AV rental services across Abuja. Whether you need a projector for rent for a corporate meeting in Maitama, a large LED screen for an exhibition in Wuse, an interactive panel for training in Jabi, or a full PA system for an event in Garki, we deliver reliable equipment with prompt 24-48hrs notice and professional setup. 
          Our service covers Maitama, Asokoro, Wuse, Garki, Jabi, Katampe, Lugbe, and all major Abuja districts.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-lg mb-16">
          <div>Central Business District • Maitama • Asokoro • Wuse (1 & 2)</div>
          <div>Garki (Areas 1-11) • Utako • Jabi • Katampe</div>
          <div>Life Camp • Kado • Mabushi • Durumi</div>
          <div>Guzape • Lokogoma • Galadimawa • Dakwo • Lugbe • Kyami • Airport Road</div>
        </div>

        <div className="bg-amber-50 p-10 rounded-3xl mb-16">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us for Abuja?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✅ Fast delivery to Maitama, Asokoro, Wuse, Garki, Jabi and all major districts</li>
            <li>✅ Professional on-site setup and technical support during your event</li>
            <li>✅ Wide range of modern equipment including LED screens and interactive panels</li>
            <li>✅ Flexible rental periods with 24-48hrs notice</li>
            <li>✅ Trusted by businesses, event planners, and organizations in Abuja</li>
          </ul>
        </div>

        <div className="text-center">
          <Link href="/services" className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-3xl text-xl font-semibold">
            Browse All Services →
          </Link>
        </div>
      </main>
    </>
  );
};

export default Abuja;
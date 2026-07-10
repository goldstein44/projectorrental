// pages/locations/port-harcourt.tsx
import Head from 'next/head';
import Link from 'next/link';

const PortHarcourt = () => {
  return (
    <>
      <Head>
        <title>Rent Projector Port Harcourt | LED Screen & Interactive Panel for Rent</title>
        <meta name="description" content="Rent projector, LED screen, interactive panel and PA system in Port Harcourt. Fast delivery in GRA, Trans Amadi, D-Line, Peter Odili Road and more. 24-48hrs notice." />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8">Projector Rental Port Harcourt</h1>
        
        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          We provide professional AV rental services across Port Harcourt. From corporate meetings in GRA to large events in Trans Amadi, weddings in D-Line, or training programs in Peter Odili Road, we deliver reliable projectors, high-resolution LED screens, interactive panels, and powerful PA systems with prompt 24-48hrs notice and full professional setup.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-lg mb-16">
          <div>Old GRA • New GRA • D-Line • Town</div>
          <div>Trans Amadi • Rumuola • Rumuokwuta • Rumuodara</div>
          <div>Eliozu • Woji • Ada George • Peter Odili Road</div>
          <div>East-West Road • Choba • Aluu</div>
        </div>

        <div className="bg-amber-50 p-10 rounded-3xl mb-16">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us for Port Harcourt?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✅ Fast delivery to GRA, Trans Amadi, D-Line, Peter Odili Road and all PH areas</li>
            <li>✅ Professional on-site setup and technical support during your event</li>
            <li>✅ Wide range of modern equipment including LED screens and interactive panels</li>
            <li>✅ Flexible rental periods with 24-48hrs notice</li>
            <li>✅ Trusted by businesses, event planners, and organizations in Port Harcourt</li>
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

export default PortHarcourt;
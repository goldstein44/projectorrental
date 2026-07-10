// pages/locations/lagos-mainland.tsx
import Head from 'next/head';
import Link from 'next/link';

const LagosMainland = () => {
  return (
    <>
      <Head>
        <title>Rent Projector Lagos Mainland | LED Screen & Interactive Panel for Rent</title>
        <meta name="description" content="Rent projector, LED screen, interactive panel and PA system in Lagos Mainland. Fast delivery in Ikeja, Surulere, Festac, Agege, Gbagada, Maryland, Yaba and more. 24-48hrs notice." />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8">Projector Rental Lagos Mainland</h1>
        
        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          We specialize in professional AV rental services across all Lagos Mainland areas. From corporate meetings in Ikeja to large events in Festac or training programs in Yaba, we deliver reliable projectors, high-resolution LED screens, interactive panels, and powerful PA systems with prompt 24-48hrs notice and full professional setup.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-lg mb-16">
          <div>Gbagada • Maryland • Yaba • Surulere</div>
          <div>Ikeja • Ogba • Magodo • Omole</div>
          <div>Ojota • Ketu • Anthony • Ilupeju</div>
          <div>Festac • Amuwo Odofin • Apapa • Isolo</div>
          <div>Oshodi • Mushin • Agege • Alimosho</div>
        </div>

        <div className="bg-amber-50 p-10 rounded-3xl mb-16">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us for Lagos Mainland?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✅ Fast delivery to Ikeja, Surulere, Festac, Agege, Gbagada and all Mainland areas</li>
            <li>✅ Professional on-site setup and technical support</li>
            <li>✅ Wide range of equipment including LED screens and interactive panels</li>
            <li>✅ Flexible rental periods with 24-48hrs notice</li>
            <li>✅ Trusted by businesses and event planners across Mainland Lagos</li>
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

export default LagosMainland;
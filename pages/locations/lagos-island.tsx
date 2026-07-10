// pages/locations/lagos-island.tsx
import Head from 'next/head';
import Link from 'next/link';

const LagosIsland = () => {
  return (
    <>
      <Head>
        <title>Rent Projector Lagos Island | LED Screen & Interactive Panel for Rent</title>
        <meta name="description" content="Rent projector, LED screen, interactive panel and PA system in Lagos Island. Fast delivery in Lekki Phase 1, Ikoyi, Victoria Island, Banana Island, Ajah, VGC and more. 24-48hrs notice." />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8">Projector Rental Lagos Island</h1>
        
        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          We provide professional projector rental, LED screen rental, interactive panel rental and PA system rental with fast delivery across all Lagos Island areas. 
          Whether you need equipment for a corporate meeting in Lekki Phase 1, a wedding in Ikoyi, or a large event in Victoria Island, we ensure reliable service with 24-48hrs notice.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-lg mb-16">
          <div>Lekki Phase 1 • Ikoyi • Victoria Island • Banana Island</div>
          <div>Oniru • Elegushi • Chevron • Ajah • VGC</div>
          <div>Sangotedo • Abraham Adesanya • Ibeju-Lekki</div>
        </div>

        <div className="bg-amber-50 p-10 rounded-3xl">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us for Lagos Island?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✅ Same-day delivery in most Island areas</li>
            <li>✅ Professional setup included</li>
            <li>✅ High-quality equipment</li>
            <li>✅ 24-48hrs notice for booking</li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <Link href="/services" className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-3xl text-xl font-semibold">
            View All Services →
          </Link>
        </div>
      </main>
    </>
  );
};

export default LagosIsland;
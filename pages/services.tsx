// pages/services.tsx
import Head from 'next/head';
import Link from 'next/link';

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services - Projector, Screen & PA System Rental</title>
        <meta name="description" content="Professional rental services for projectors, large screens, PA systems and full AV setups. Same-day delivery and setup in all premium Lagos Island zones." />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Premium AV equipment rental for every occasion</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Projector Rental</h3>
            <p className="text-gray-600">Regular and HD projectors perfect for meetings, trainings, parties and events.</p>
          </div>
          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Large Screen Rental</h3>
            <p className="text-gray-600">High-quality 8ft x 8ft projection screens with professional stands.</p>
          </div>
          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">PA System Rental</h3>
            <p className="text-gray-600">Powerful sound systems with speakers, mixer and wireless microphone.</p>
          </div>
          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Full AV Setup</h3>
            <p className="text-gray-600">Complete package: Projector + Screen + PA System with full setup.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-3xl text-xl font-semibold"
          >
            Book Your Equipment Now →
          </Link>
        </div>
      </main>
    </>
  );
};

export default Services;
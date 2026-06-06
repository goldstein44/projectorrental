// pages/locations.tsx
import Head from 'next/head';
import Link from 'next/link';
import { locations } from '@/lib/locations';

const Locations = () => {
  return (
    <>
      <Head>
        <title>Our Locations - Projector Rental NG</title>
        <meta name="description" content="We serve all premium Island and Lekki zones in Lagos. Click on your area to see local rental packages and pricing." />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold font-serif text-center mb-4">Our Service Locations</h1>
        <p className="text-center text-xl text-gray-600 mb-16">Fast same-day delivery across all premium zones</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/districts/${location.slug}`}
              className="border border-gray-200 hover:border-amber-500 hover:bg-amber-50 rounded-3xl p-8 transition-all group"
            >
              <div className="text-amber-600 text-2xl mb-4">📍</div>
              <h3 className="font-semibold text-xl group-hover:text-amber-700">{location.name}</h3>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Locations;


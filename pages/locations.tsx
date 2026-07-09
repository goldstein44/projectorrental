// pages/locations.tsx
import Head from 'next/head';
import Link from 'next/link';

const Locations = () => {
  return (
    <>
      <Head>
        <title>Our Service Locations - Lagos, Abuja & Port Harcourt</title>
        <meta name="description" content="Fast same-day AV rental across Lagos Island, Lagos Mainland, Abuja and Port Harcourt." />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4">Our Service Locations</h1>
          <p className="text-xl text-gray-600">Fast same-day delivery and professional setup</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/locations/lagos-island" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
            <h3 className="text-2xl font-semibold mb-6 group-hover:text-amber-600">Lagos Island</h3>
            <p className="text-gray-600">Lekki Phase 1, Ikoyi, Victoria Island, Banana Island, Ajah, VGC and more</p>
          </Link>

          <Link href="/locations/lagos-mainland" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
            <h3 className="text-2xl font-semibold mb-6 group-hover:text-amber-600">Lagos Mainland</h3>
            <p className="text-gray-600">Gbagada, Maryland, Yaba, Surulere, Ikeja, Festac, Agege and more</p>
          </Link>

          <Link href="/locations/abuja" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
            <h3 className="text-2xl font-semibold mb-6 group-hover:text-amber-600">Abuja</h3>
            <p className="text-gray-600">Maitama, Asokoro, Wuse, Garki, Jabi, Katampe, Lugbe and more</p>
          </Link>

          <Link href="/locations/port-harcourt" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
            <h3 className="text-2xl font-semibold mb-6 group-hover:text-amber-600">Port Harcourt</h3>
            <p className="text-gray-600">GRA, Trans Amadi, D-Line, Rumuola, Peter Odili Road and more</p>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Locations;
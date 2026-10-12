// pages/locations/delta.tsx
import Head from 'next/head';
import Link from 'next/link';

const Delta = () => {
  return (
    <>
      <Head>
        <title>Rent Projector Delta | Asaba & Warri AV Rental</title>
        <meta
          name="description"
          content="Rent projector, LED screen, interactive panel and PA system in Asaba and Warri, Delta State. Fast delivery in GRA, Okpanam Road, Effurun, Enerhen, Airport Road and more. 24-48hrs notice."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8">Projector Rental Delta (Asaba & Warri)</h1>

        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          We provide professional AV rental services across Asaba and Warri/Effurun in Delta State. 
          Projectors, LED screens, interactive panels and PA systems are available for corporate events, meetings, parties and trainings with 24-48hrs notice and professional setup.
        </p>

        {/* Asaba */}
        <h2 className="text-3xl font-semibold mb-6">Asaba</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg mb-12">
          <div>Asaba CBD</div>
          <div>GRA</div>
          <div>Okpanam Road</div>
          <div>Nnebisi Road</div>
          <div>DBS Road</div>
          <div>Summit Road</div>
          <div>Ibusa Road</div>
          <div>Anwai Road</div>
          <div>Okwe</div>
          <div>Cable Point</div>
          <div>Koka Junction</div>
          <div>DLA Road</div>
          <div>Inter-Bau Roundabout</div>
          <div>Infant Jesus area</div>
          <div>Ezenei Avenue</div>
          <div>Government House axis</div>
          <div>Asaba–Onitsha Expressway</div>
          <div>Asaba–Benin Expressway</div>
        </div>

        {/* Warri / Effurun */}
        <h2 className="text-3xl font-semibold mb-6">Warri / Effurun</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg mb-16">
          <div>Warri CBD</div>
          <div>Effurun CBD</div>
          <div>Enerhen</div>
          <div>Ugbor</div>
          <div>Ekpan</div>
          <div>Uvwie</div>
          <div>Ogunu</div>
          <div>Okumagba Avenue</div>
          <div>Airport Road</div>
          <div>PTI Road</div>
          <div>DSC Roundabout</div>
          <div>Refinery Road</div>
          <div>Jakpa Road</div>
          <div>Deco Road</div>
          <div>NPA axis</div>
          <div>Ugbomro</div>
          <div>Osubi</div>
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-3xl text-xl font-semibold"
          >
            View All Services →
          </Link>
        </div>
      </main>
    </>
  );
};

export default Delta;
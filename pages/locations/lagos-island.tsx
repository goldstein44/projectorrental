// pages/locations/lagos-island.tsx
import Head from 'next/head';

const LagosIsland = () => {
  return (
    <>
      <Head>
        <title>Lagos Island - AV Rental Services</title>
        <meta name="description" content="Fast same-day projector, LED screen, interactive panel and PA system rental in Lekki Phase 1, Ikoyi, Victoria Island and all Lagos Island areas." />
      </Head>
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8">Lagos Island</h1>
        <p className="text-xl text-gray-600 mb-12">Fast same-day delivery and professional setup across all Island areas.</p>
        <div className="grid md:grid-cols-2 gap-4 text-lg">
          <div>Lekki Phase 1</div>
          <div>Ikoyi</div>
          <div>Victoria Island</div>
          <div>Banana Island</div>
          <div>Oniru</div>
          <div>Elegushi</div>
          <div>Chevron</div>
          <div>Ajah</div>
          <div>VGC</div>
          <div>Sangotedo</div>
          <div>Abraham Adesanya</div>
          <div>Ibeju-Lekki</div>
        </div>
      </main>
    </>
  );
};

export default LagosIsland;
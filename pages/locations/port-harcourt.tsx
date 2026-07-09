// pages/locations/port-harcourt.tsx
import Head from 'next/head';

const PortHarcourt = () => {
  return (
    <>
      <Head>
        <title>Port Harcourt - AV Rental Services</title>
        <meta name="description" content="Fast same-day AV rental in GRA, Trans Amadi, D-Line and all Port Harcourt areas." />
      </Head>
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8">Port Harcourt</h1>
        <p className="text-xl text-gray-600 mb-12">Fast same-day delivery and professional setup across Port Harcourt.</p>
        <div className="grid md:grid-cols-2 gap-4 text-lg">
          <div>Old GRA</div>
          <div>New GRA</div>
          <div>D-Line</div>
          <div>Town</div>
          <div>Trans Amadi</div>
          <div>Rumuola</div>
          <div>Rumuokwuta</div>
          <div>Rumuodara</div>
          <div>Eliozu</div>
          <div>Woji</div>
          <div>Ada George</div>
          <div>Peter Odili Road</div>
          <div>East-West Road</div>
          <div>Choba</div>
          <div>Aluu</div>
        </div>
      </main>
    </>
  );
};

export default PortHarcourt;
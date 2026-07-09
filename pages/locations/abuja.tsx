// pages/locations/abuja.tsx
import Head from 'next/head';

const Abuja = () => {
  return (
    <>
      <Head>
        <title>Abuja - AV Rental Services</title>
        <meta name="description" content="Fast same-day AV rental in Maitama, Asokoro, Wuse, Garki, Jabi and all Abuja areas." />
      </Head>
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8">Abuja</h1>
        <p className="text-xl text-gray-600 mb-12">Fast same-day delivery and professional setup across Abuja.</p>
        <div className="grid md:grid-cols-2 gap-4 text-lg">
          <div>Central Business District</div>
          <div>Maitama</div>
          <div>Asokoro</div>
          <div>Wuse (1 & 2)</div>
          <div>Garki (Areas 1-11)</div>
          <div>Utako</div>
          <div>Jabi</div>
          <div>Katampe</div>
          <div>Life Camp</div>
          <div>Kado</div>
          <div>Mabushi</div>
          <div>Durumi</div>
          <div>Guzape</div>
          <div>Lokogoma</div>
          <div>Galadimawa</div>
          <div>Dakwo</div>
          <div>Lugbe</div>
          <div>Kyami</div>
          <div>Airport Road</div>
        </div>
      </main>
    </>
  );
};

export default Abuja;
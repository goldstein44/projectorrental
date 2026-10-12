// pages/locations/calabar.tsx
import Head from 'next/head';
import Link from 'next/link';

const Calabar = () => {
  return (
    <>
      <Head>
        <title>Rent Projector Calabar | LED Screen & Interactive Panel for Rent</title>
        <meta
          name="description"
          content="Rent projector, LED screen, interactive panel and PA system in Calabar. Fast delivery in Marian, State Housing, MCC Road, Etta Agbor, Ndidem Usang Iso, Diamond Hill and more. 24-48hrs notice."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8">Projector Rental Calabar</h1>

        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          We provide professional projector rental, LED screen rental, interactive panel rental and PA system rental across Calabar. 
          Whether you need equipment for a meeting in Marian Road, an event in State Housing Estate, or a conference in the City Centre, 
          we deliver reliable AV equipment with 24-48hrs notice and professional setup.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Areas We Serve in Calabar</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg mb-16">
          <div>Calabar City Centre</div>
          <div>Marian Road</div>
          <div>State Housing Estate</div>
          <div>MCC Road</div>
          <div>Etta Agbor Road</div>
          <div>Ndidem Usang Iso Road</div>
          <div>Murtala Mohammed Highway</div>
          <div>Parliamentary Road</div>
          <div>IBB Way</div>
          <div>Diamond Hill</div>
          <div>Ikot Ishie</div>
          <div>Ikot Ansa</div>
          <div>Big Qua</div>
          <div>Federal Housing Estate</div>
          <div>8 Miles</div>
          <div>Ediba</div>
          <div>Ekpo Abasi</div>
          <div>Nelson Mandela Street</div>
          <div>Target Street</div>
          <div>Ikot Omin</div>
          <div>Lemna</div>
          <div>Akim</div>
          <div>Esuk Utan</div>
          <div>Summit Hills</div>
          <div>Airport Road</div>
          <div>Akpabuyo axis</div>
        </div>

        <div className="bg-amber-50 p-10 rounded-3xl mb-16">
          <h2 className="text-2xl font-semibold mb-6">Primary Service Cluster</h2>
          <p className="text-gray-700">
            Calabar City Centre → Marian → State Housing / MCC Road → Calabar South
          </p>
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

export default Calabar;
// pages/locations/uyo.tsx
import Head from 'next/head';
import Link from 'next/link';

const Uyo = () => {
  return (
    <>
      <Head>
        <title>Rent Projector Uyo | LED Screen & Interactive Panel for Rent</title>
        <meta
          name="description"
          content="Rent projector, LED screen, interactive panel and PA system in Uyo, Akwa Ibom. Fast delivery in Ibom Plaza, Aka Road, Oron Road, Wellington Bassey Way, Nwaniba Road and more. 24-48hrs notice."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8">Projector Rental Uyo</h1>

        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          Professional AV rental services in Uyo, Akwa Ibom State. We provide projectors, LED screens, interactive panels and PA systems 
          for meetings, trainings, events and parties across the city centre and surrounding areas with 24-48hrs notice and professional setup.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Areas We Serve in Uyo</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg mb-16">
          <div>Uyo City Centre</div>
          <div>Ibom Plaza</div>
          <div>Aka Road</div>
          <div>Oron Road</div>
          <div>Abak Road</div>
          <div>Ikot Ekpene Road</div>
          <div>Wellington Bassey Way</div>
          <div>Udoudoma Avenue</div>
          <div>Four Lanes</div>
          <div>Atiku Abubakar Avenue</div>
          <div>Nwaniba Road</div>
          <div>Udo Udoma Avenue</div>
          <div>Stadium Road</div>
          <div>Ikot Oku Ikono</div>
          <div>Afaha Oku</div>
          <div>Nsukara Offot</div>
          <div>Mbiabong</div>
          <div>Ifa Ikot Okpon</div>
          <div>Aka Itiam</div>
          <div>Itam</div>
          <div>IBB Avenue</div>
          <div>University of Uyo axis</div>
          <div>Airport Road</div>
          <div>Uruan Road</div>
          <div>Nwaniba outskirts</div>
          <div>Ekom Iman axis</div>
          <div>Ikot Akpan Abia</div>
          <div>Mbierebe Obio</div>
          <div>Idu</div>
          <div>Obio Offot</div>
        </div>

        <div className="bg-amber-50 p-10 rounded-3xl mb-16">
          <h2 className="text-2xl font-semibold mb-6">Primary Service Cluster</h2>
          <p className="text-gray-700">
            Uyo CBD → Ewet Housing Estate → Shelter Afrique → Osongama Estate
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

export default Uyo;
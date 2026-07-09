// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';

const Home = () => {
  const whatsappNumber = "08148080273";
  const whatsappLink = `https://wa.me/234${whatsappNumber.replace(/\D/g, '')}`;

  return (
    <>
      <Head>
        <title>Projector Rental NG - Reliable AV Equipment Rental</title>
        <meta name="description" content="Professional projector, LED screen, interactive panel and PA system rental with fast same-day delivery in Lagos, Abuja and Port Harcourt." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* HERO SECTION - Persuasive Copy */}
        <section className="bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-950 text-white py-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8 font-serif">
              Professional AV Equipment<br />
              <span className="text-amber-400">For Successful Events</span>
            </h1>

            <p className="max-w-3xl mx-auto text-2xl text-amber-100 mb-12 leading-relaxed">
              We provide reliable projectors, high-resolution LED screens, interactive panels, large projection screens, and powerful PA systems. 
              With prompt same-day delivery and professional setup, we help make your meetings, trainings, conferences, weddings, and parties successful across Lagos, Abuja, and Port Harcourt.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-xl font-semibold px-14 py-6 rounded-3xl transition-all hover:scale-105 shadow-xl"
            >
              💬 Get Instant Quote on WhatsApp — 08148080273
            </a>
          </div>
        </section>

        {/* OUR COVERAGE - 4 Main Locations */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">We Serve 4 Major Areas</h2>
            <p className="text-xl text-gray-600 mb-12">Fast same-day delivery and professional setup</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/locations/lagos-island" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-600">Lagos Island</h3>
                <p className="text-gray-600">Lekki Phase 1, Ikoyi, Victoria Island, Banana Island, Ajah, VGC and more</p>
              </Link>

              <Link href="/locations/lagos-mainland" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-600">Lagos Mainland</h3>
                <p className="text-gray-600">Gbagada, Maryland, Yaba, Surulere, Ikeja, Festac, Agege and more</p>
              </Link>

              <Link href="/locations/abuja" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-600">Abuja</h3>
                <p className="text-gray-600">Maitama, Asokoro, Wuse, Garki, Jabi, Katampe, Lugbe and more</p>
              </Link>

              <Link href="/locations/port-harcourt" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-600">Port Harcourt</h3>
                <p className="text-gray-600">GRA, Trans Amadi, D-Line, Rumuola, Peter Odili Road and more</p>
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* FAQ */}
        <FAQ />

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-amber-900 to-yellow-900 text-white py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Make Your Event Successful?</h2>
            <p className="text-2xl text-amber-100 mb-10">Message us now for fast response and reliable service</p>
            <a
              href={whatsappLink}
              target="_blank"
              className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white text-2xl font-semibold px-16 py-7 rounded-3xl transition-all hover:scale-105 shadow-xl"
            >
              💬 Chat on WhatsApp — 08148080273
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
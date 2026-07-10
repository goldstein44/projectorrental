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
        <title>Rent Projector Lagos | Projector for Rent | Hire Projector Near Me</title>
        <meta name="description" content="Rent projector, LED screen, interactive panel and PA system in Lagos, Abuja and Port Harcourt. Fast reliable AV rental service with 24-48hrs notice. Call or WhatsApp 08148080273" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-950 text-white py-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8 font-serif">
              Rent Projector Lagos | LED Screen & Interactive Panel for Rent
            </h1>

            <p className="max-w-3xl mx-auto text-2xl text-amber-100 mb-12 leading-relaxed">
              Professional projector rental, LED screen rental, interactive whiteboard rental, and PA system rental in Lagos, Abuja and Port Harcourt. 
              We provide reliable AV equipment for meetings, trainings, events, weddings, and parties with 24-48hrs notice and professional setup.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-xl font-semibold px-14 py-6 rounded-3xl transition-all hover:scale-105 shadow-xl"
            >
              💬 Rent Projector Now - WhatsApp 08148080273
            </a>
          </div>
        </section>

        {/* ROLLING LOCATIONS TICKER */}
        <section className="bg-amber-50 py-4 border-b overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap text-lg font-medium text-gray-700">
            <span>Lagos Island • Lekki • Ikoyi • Victoria Island • Banana Island • Ajah • VGC</span>
            <span>Lagos Mainland • Ikeja • Surulere • Festac • Agege • Gbagada</span>
            <span>Abuja • Maitama • Asokoro • Wuse • Garki • Jabi</span>
            <span>Port Harcourt • GRA • Trans Amadi • D-Line • Peter Odili Road</span>
            
            {/* Duplicate for seamless loop */}
            <span>Lagos Island • Lekki • Ikoyi • Victoria Island • Banana Island • Ajah • VGC</span>
            <span>Lagos Mainland • Ikeja • Surulere • Festac • Agege • Gbagada</span>
            <span>Abuja • Maitama • Asokoro • Wuse • Garki • Jabi</span>
            <span>Port Harcourt • GRA • Trans Amadi • D-Line • Peter Odili Road</span>
          </div>
        </section>

        {/* DETAILED COPY SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-2xl text-gray-700 leading-relaxed mb-16">
              Whether you are looking for a projector for rent for your next meeting, a large LED screen for an exhibition, an interactive panel for training, or a powerful PA system for your event, we have you covered. 
              Our reliable equipment and professional service ensure your event runs smoothly in Lagos, Abuja, and Port Harcourt.
            </p>

            <div className="grid md:grid-cols-2 gap-10 text-left">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Projector for Rent</h3>
                <p className="text-gray-600">High-quality projectors perfect for meetings, trainings, and presentations. <Link href="/services" className="text-amber-600 hover:underline">See all projector options →</Link></p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">LED Screen Rental</h3>
                <p className="text-gray-600">Bright, high-resolution LED screens for events and exhibitions. Rental, sales & installation available. <Link href="/services" className="text-amber-600 hover:underline">Learn more →</Link></p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Interactive Panel Rental</h3>
                <p className="text-gray-600">Smart touch panels for modern classrooms and offices. Rental, sales & installation. <Link href="/services" className="text-amber-600 hover:underline">View options →</Link></p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">PA System Rental</h3>
                <p className="text-gray-600">Powerful sound systems for clear audio at any event. <Link href="/services" className="text-amber-600 hover:underline">See PA systems →</Link></p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR MAIN SERVICE AREAS */}
        <section className="py-20 bg-white border-t">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Our Main Service Areas</h2>
            <p className="text-xl text-gray-600 mb-12">Reliable AV rental with 24-48hrs notice</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/locations/lagos-island" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-600">Lagos Island</h3>
                <p className="text-gray-600">Lekki, Ikoyi, Victoria Island, Banana Island, Ajah, VGC and more</p>
              </Link>

              <Link href="/locations/lagos-mainland" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-600">Lagos Mainland</h3>
                <p className="text-gray-600">Ikeja, Surulere, Festac, Agege and more</p>
              </Link>

              <Link href="/locations/abuja" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-600">Abuja</h3>
                <p className="text-gray-600">Maitama, Wuse, Garki, Jabi and more</p>
              </Link>

              <Link href="/locations/port-harcourt" className="border rounded-3xl p-10 hover:border-amber-500 transition group">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-600">Port Harcourt</h3>
                <p className="text-gray-600">GRA, Trans Amadi, D-Line and more</p>
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
            <h2 className="text-5xl font-bold mb-6">Need AV Equipment?</h2>
            <p className="text-2xl text-amber-100 mb-10">Message us for reliable service with 24-48hrs notice</p>
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
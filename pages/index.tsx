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
        <title>Rent Projector Lagos, Abuja, Port Harcourt, Calabar, Uyo & Delta | LED Screen & Interactive Panel</title>
        <meta
          name="description"
          content="Rent projector, LED screen, interactive panel and PA system in Lagos, Abuja, Port Harcourt, Calabar, Uyo, Asaba and Warri. 24-48hrs notice. Delivery ₦7,000–₦25,000."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-950 text-white py-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            {/* Rolling Ticker */}
            <div className="bg-amber-50 text-gray-800 py-3 mb-10 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-16 animate-marquee whitespace-nowrap text-base font-medium">
                <span>Lagos Island • Lagos Mainland • Abuja • Port Harcourt • Calabar • Uyo • Asaba • Warri</span>
                <span>Lagos Island • Lagos Mainland • Abuja • Port Harcourt • Calabar • Uyo • Asaba • Warri</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8 font-serif">
              Rent Projector, LED Screen & Interactive Panel
            </h1>

            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-amber-100 mb-10 leading-relaxed">
              Professional projector rental, LED screen rental, interactive panel rental and PA system rental across Lagos, Abuja, Port Harcourt, Calabar, Uyo, Asaba and Warri.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-xl font-semibold px-12 py-5 rounded-3xl transition-all hover:scale-105 shadow-xl"
            >
              💬 Get Quote on WhatsApp — 08148080273
            </a>
          </div>
        </section>

        {/* DETAILED COPY + SERVICES */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-2xl text-gray-700 leading-relaxed mb-16">
              Whether you need a projector for a meeting, an LED screen for an exhibition, an interactive panel for training, or a PA system for an event — we deliver reliable equipment with professional setup.
            </p>

            <div className="grid md:grid-cols-2 gap-10 text-left">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Projector for Rent</h3>
                <p className="text-gray-600">High-quality projectors for meetings, trainings and presentations. <Link href="/services" className="text-amber-600 hover:underline">See options →</Link></p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">LED Screen Rental</h3>
                <p className="text-gray-600">Bright high-resolution LED screens for events and exhibitions. Rental, sales & installation. <Link href="/services" className="text-amber-600 hover:underline">Learn more →</Link></p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Interactive Panel Rental</h3>
                <p className="text-gray-600">Smart touch panels for classrooms and offices. Rental, sales & installation. <Link href="/services" className="text-amber-600 hover:underline">View options →</Link></p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">PA System Rental</h3>
                <p className="text-gray-600">Powerful sound systems for clear audio at any event. <Link href="/services" className="text-amber-600 hover:underline">See PA systems →</Link></p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR MAIN SERVICE AREAS */}
        <section className="py-20 bg-gray-50 border-t">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Our Main Service Areas</h2>
            <p className="text-xl text-gray-600 mb-12">Reliable AV rental with 24-48hrs notice</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link href="/locations/lagos-island" className="border rounded-3xl p-8 hover:border-amber-500 transition group bg-white">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-600">Lagos Island</h3>
                <p className="text-gray-600 text-sm">Lekki, Ikoyi, VI, Banana Island, Ajah, VGC...</p>
              </Link>
              <Link href="/locations/lagos-mainland" className="border rounded-3xl p-8 hover:border-amber-500 transition group bg-white">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-600">Lagos Mainland</h3>
                <p className="text-gray-600 text-sm">Ikeja, Surulere, Festac, Agege, Gbagada...</p>
              </Link>
              <Link href="/locations/abuja" className="border rounded-3xl p-8 hover:border-amber-500 transition group bg-white">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-600">Abuja</h3>
                <p className="text-gray-600 text-sm">Maitama, Asokoro, Wuse, Garki, Jabi...</p>
              </Link>
              <Link href="/locations/port-harcourt" className="border rounded-3xl p-8 hover:border-amber-500 transition group bg-white">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-600">Port Harcourt</h3>
                <p className="text-gray-600 text-sm">GRA, Trans Amadi, D-Line, Peter Odili...</p>
              </Link>
              <Link href="/locations/calabar" className="border rounded-3xl p-8 hover:border-amber-500 transition group bg-white">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-600">Calabar</h3>
                <p className="text-gray-600 text-sm">Marian, State Housing, MCC Road, Diamond Hill...</p>
              </Link>
              <Link href="/locations/uyo" className="border rounded-3xl p-8 hover:border-amber-500 transition group bg-white">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-600">Uyo</h3>
                <p className="text-gray-600 text-sm">Ibom Plaza, Aka Road, Wellington Bassey Way...</p>
              </Link>
              <Link href="/locations/delta" className="border rounded-3xl p-8 hover:border-amber-500 transition group bg-white">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-600">Delta (Asaba & Warri)</h3>
                <p className="text-gray-600 text-sm">Asaba GRA, Effurun, Enerhen, Airport Road...</p>
              </Link>
            </div>
          </div>
        </section>

        {/* TERMS OF SERVICE - CLEARLY DISPLAYED */}
        <section className="py-16 bg-white border-t">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Delivery & Rental Terms</h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Delivery & Pickup:</strong> ₦7,000 – ₦25,000  
                (Final fee depends on location, distance, rental duration, equipment quantity and setup requirements).
              </p>

              <p>
                Rental prices are based on standard daily rates. Final pricing may vary depending on event location, duration, equipment quantity, setup requirements and technical support. Delivery and pickup are separate charges.
              </p>

              <p className="font-medium text-amber-800 bg-amber-50 p-6 rounded-2xl">
                For equipment safety and proper tracking, all rentals are delivered and collected by our team.  
                <strong> Customer pickup and third-party dispatch collection are not permitted.</strong>
              </p>
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
// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import { packages } from '@/lib/packages';
import PackageCard from '@/components/ui/PackageCard';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';
import LocationSEOBlock from '@/components/ui/LocationSEOBlock';

const Home = () => {
  const whatsappNumber = "08148080273";
  const whatsappLink = `https://wa.me/234${whatsappNumber.replace(/\D/g, '')}`;

  return (
    <>
      <Head>
        <title>Projector Rental NG - Premium Projectors, LED Screens & Interactive Panels</title>
        <meta name="description" content="Rent high-quality projectors, LED screens, interactive panels, large screens and PA systems. Same-day delivery in Lagos Island. WhatsApp 08148080273" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="WAn2wjkdZr9qfCiugOwqMBEdhzID1FvgYgt2OQy27vA" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-950 text-white py-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full mb-8 text-sm font-medium">
              📽️ Premium AV Rentals for Lagos Island
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8 font-serif">
              Make Your Event<br />
              <span className="text-amber-400">Look & Sound Unforgettable</span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-amber-100 mb-12">
              Professional projectors, high-resolution LED screens, interactive panels, large screens, and powerful PA systems with same-day delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href={whatsappLink}
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-12 py-5 rounded-2xl flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
              >
                💬 Get Instant Quote on WhatsApp
              </a>

              <a
                href="#packages"
                className="border border-white/70 hover:bg-white/10 text-white text-lg font-semibold px-10 py-5 rounded-2xl transition-all"
              >
                View Our Packages
              </a>
            </div>

            <p className="mt-10 text-sm text-amber-200">Response within minutes • No hidden fees • Professional setup included</p>
          </div>
        </section>

        {/* PACKAGES SECTION */}
        <section id="packages" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold tracking-tight mb-4">Choose Your Perfect Setup</h2>
              <p className="text-xl text-gray-600 max-w-lg mx-auto">
                From simple meetings to big parties — reliable equipment at great rates
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <PackageCard 
                  key={pkg.id} 
                  packageData={pkg} 
                  whatsappNumber={whatsappNumber} 
                />
              ))}
            </div>

            <div className="mt-12 text-center text-gray-600">
              <p className="text-lg">We also offer <strong>LED Screen Rental</strong> and <strong>Interactive Panel Rental, Sales & Installation</strong>.</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* LOCATION BLOCK */}
        <LocationSEOBlock />

        {/* INTERNAL LINKS */}
        <section className="py-16 bg-white border-t">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Learn More About Us</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="px-8 py-4 border border-gray-300 hover:border-amber-500 rounded-2xl hover:bg-amber-50 transition font-medium">About Us</Link>
              <Link href="/services" className="px-8 py-4 border border-gray-300 hover:border-amber-500 rounded-2xl hover:bg-amber-50 transition font-medium">Our Services</Link>
              <Link href="/locations" className="px-8 py-4 border border-gray-300 hover:border-amber-500 rounded-2xl hover:bg-amber-50 transition font-medium">All Locations</Link>
              <Link href="/contact" className="px-8 py-4 border border-gray-300 hover:border-amber-500 rounded-2xl hover:bg-amber-50 transition font-medium">Contact Us</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-amber-900 to-yellow-900 text-white py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Elevate Your Next Event?</h2>
            <p className="text-2xl text-amber-100 mb-10">Message us for fast response and same-day delivery</p>
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
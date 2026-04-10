// pages/districts/[slug].tsx
// Dynamic hyperlocal SEO page for every district
// Generates unique title, meta, H1 and content per location

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getLocationBySlug, locations } from '@/lib/locations';
import { packages } from '@/lib/packages';
import PackageCard from '@/components/ui/PackageCard';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';

interface DistrictPageProps {
  location: {
    name: string;
    slug: string;
    title: string;
    description: string;
    h1: string;
  };
}

const DistrictPage = ({ location }: DistrictPageProps) => {
  const whatsappNumber = "08149660626";
  const whatsappLink = `https://wa.me/234${whatsappNumber.replace(/\D/g, '')}`;

  return (
    <>
      <Head>
        <title>{location.title}</title>
        <meta name="description" content={location.description} />
        <meta name="keywords" content={location.keywords ? location.keywords.join(', ') : ''} />
        <meta property="og:title" content={location.title} />
        <meta property="og:description" content={location.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* HERO SECTION - Hyperlocal */}
        <section className="bg-gradient-to-br from-amber-900 to-yellow-900 text-white py-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full mb-6 text-sm">
              📍 Serving {location.name}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 font-serif">
              {location.h1}
            </h1>

            <p className="text-2xl text-amber-100 max-w-3xl mx-auto mb-10">
              Professional projector, large screen and PA system rental with same-day delivery and setup in {location.name}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-12 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all"
              >
                💬 Chat on WhatsApp: 08149660626
              </a>
              <a
                href="#packages"
                className="bg-white text-amber-900 hover:bg-amber-100 text-lg font-semibold px-12 py-4 rounded-2xl flex items-center justify-center transition-all"
              >
                See Packages
              </a>
            </div>
          </div>
        </section>

        {/* PACKAGES SECTION - Same as homepage but with local context */}
        <section id="packages" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                AV Rental Packages in {location.name}
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Choose from single equipment or full setups. Fast delivery to {location.name}.
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

            <div className="mt-12 text-center text-sm text-gray-500">
              <p>Delivery &amp; Setup in {location.name}: ₦5,000 – ₦20,000 depending on distance</p>
              <p className="mt-2">Same-day service available when you book via WhatsApp</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* FAQ */}
        <FAQ />

        {/* FINAL CTA */}
        <section className="bg-amber-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Need AV Equipment in {location.name}?</h2>
            <p className="text-2xl text-amber-100 mb-10">
              Get instant quote and same-day delivery &amp; setup
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white text-2xl font-semibold px-16 py-6 rounded-3xl transition-all hover:scale-105"
            >
              💬 WhatsApp 08149660626 Now
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default DistrictPage;

// Generate static paths for all 21 locations (for fast loading & SEO)
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = locations.map((location) => ({
    params: { slug: location.slug },
  }));

  return {
    paths,
    fallback: false, // 404 for unknown slugs
  };
};

// Get location data for each page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      location,
    },
  };
};
// pages/about.tsx
import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <Head>
        <title>About Projector Rental NG - Premium AV Rental in Lagos</title>
        <meta name="description" content="We provide fast, reliable projector, screen and PA system rental services across all premium Island zones in Lagos. Same-day delivery and professional setup." />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold font-serif mb-8">About Projector Rental NG</h1>
        
        <div className="prose text-lg">
          <p className="text-gray-700">
            We are a premium AV rental company specializing in high-quality projectors, large screens, and powerful PA systems. 
            Our focus is on delivering fast, reliable service to the most prestigious residential and business districts in Lagos.
          </p>
          <p className="text-gray-700">
            Whether you're hosting a corporate meeting, training session, wedding, birthday party, or any special event, 
            we make sure your audio-visual experience is flawless with same-day delivery and professional setup.
          </p>
        </div>

        <div className="mt-16">
          <Link 
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold"
          >
            Get In Touch on WhatsApp →
          </Link>
        </div>

        <div className="mt-20 text-sm text-gray-500">
          <Link href="/" className="hover:text-amber-600">← Back to Homepage</Link>
        </div>
      </main>
    </>
  );
};

export default About;
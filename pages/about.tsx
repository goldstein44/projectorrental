// pages/about.tsx
import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <Head>
        <title>About Projector Rental NG - Reliable AV Rental Service</title>
        <meta name="description" content="Learn about Projector Rental NG - your trusted partner for projector rental, LED screen rental, interactive panel rental and PA system rental in Lagos, Abuja and Port Harcourt." />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold font-serif mb-12">About Projector Rental NG</h1>

        <div className="prose text-lg text-gray-700 leading-relaxed space-y-8">
          <p>
            Projector Rental NG is a trusted AV rental company dedicated to providing high-quality projectors, LED screens, interactive panels, large projection screens, and PA systems for events, meetings, trainings, conferences, weddings, and parties across Lagos, Abuja, and Port Harcourt.
          </p>

          <p>
            We understand that the success of your event depends on reliable and professional audio-visual equipment. That is why we focus on delivering well-maintained, modern equipment with fast response time and professional setup. Whether you are a corporate organization in Maitama, a school in Ikeja, or an event planner in GRA Port Harcourt, we are committed to making your event visually and audibly impressive.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Wide range of modern equipment including LED screens and interactive panels</li>
            <li>Fast 24-48hrs notice delivery and professional on-site setup</li>
            <li>Reliable service with experienced technical team</li>
            <li>Flexible rental options for short and long term</li>
            <li>Competitive rates with no hidden charges</li>
          </ul>

          <p className="mt-12">
            Our goal is simple: to make AV rental easy, reliable, and stress-free for you. We have built strong relationships with clients across Lagos Island, Lagos Mainland, Abuja, and Port Harcourt by consistently delivering quality service and equipment.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-3xl text-xl font-semibold"
          >
            Get In Touch With Us →
          </Link>
        </div>
      </main>
    </>
  );
};

export default About;
// pages/about.tsx
import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <Head>
        <title>About Projector Rental NG - Reliable AV Rental Across Nigeria</title>
        <meta
          name="description"
          content="Learn about Projector Rental NG and our network of related AV rental businesses in Lagos, Abuja, Port Harcourt, Calabar and Uyo. Professional projector, LED screen and interactive panel rental."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold font-serif mb-12">About Projector Rental NG</h1>

        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-8">
          <p>
            Projector Rental NG is a trusted audio-visual rental company dedicated to providing high-quality projectors, LED screens, interactive panels, large projection screens, and PA systems for events, meetings, trainings, conferences, weddings, and parties.
          </p>

          <p>
            We understand that the success of your event depends on reliable and professional equipment. That is why we focus on delivering well-maintained, modern AV solutions with prompt response times and professional setup. Whether you are a corporate organization, school, church, or event planner, we are committed to making your event visually and audibly impressive.
          </p>

          {/* Related Businesses Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-semibold mb-6">Our Network Across Nigeria</h2>
            <p className="mb-8">
              To better serve clients in different cities, we operate through a network of specialized projector and AV rental businesses. Each location is focused on delivering fast, reliable service in its area:
            </p>

            <ul className="space-y-5 text-lg">
              <li>
                <strong>Projector Lagos</strong> —{' '}
                <a
                  href="https://www.projectorlagos.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline font-medium"
                >
                  www.projectorlagos.com.ng
                </a>
              </li>
              <li>
                <strong>Projector Abuja</strong> —{' '}
                <a
                  href="https://www.projectorabuja.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline font-medium"
                >
                  www.projectorabuja.com.ng
                </a>
              </li>
              <li>
                <strong>Projector Port Harcourt</strong> —{' '}
                <a
                  href="https://www.projectorportharcourt.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline font-medium"
                >
                  www.projectorportharcourt.com.ng
                </a>
              </li>
              <li>
                <strong>Projector Calabar</strong> —{' '}
                <a
                  href="https://www.projectorcalabar.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline font-medium"
                >
                  www.projectorcalabar.com.ng
                </a>
              </li>
              <li>
                <strong>Projector Uyo</strong> —{' '}
                <a
                  href="https://www.projectoruyo.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline font-medium"
                >
                  www.projectoruyo.com.ng
                </a>
              </li>
            </ul>
          </section>

          <h2 className="text-3xl font-semibold mt-16 mb-6">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Wide range of modern equipment including LED screens and interactive panels</li>
            <li>Professional on-site setup and technical support</li>
            <li>Reliable service with experienced technical team</li>
            <li>Flexible rental options for short and long term</li>
            <li>Competitive rates with transparent pricing</li>
            <li>Strong presence across major cities in Nigeria</li>
          </ul>

          <p className="mt-12">
            Our goal is simple: to make AV rental easy, reliable, and stress-free. Through our network of specialized businesses, we continue to expand our reach while maintaining high service standards in every city we operate.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-3xl text-xl font-semibold transition"
          >
            Get In Touch With Us →
          </Link>
        </div>
      </main>
    </>
  );
};

export default About;
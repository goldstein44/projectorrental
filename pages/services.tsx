// pages/services.tsx
import Head from 'next/head';
import Link from 'next/link';

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services - Projector, LED Screen & Interactive Panel Rental</title>
        <meta name="description" content="Premium AV rental services: Projectors, LED Screens, Interactive Panels, PA Systems, and Full Setups. Same-day delivery across Lagos Island." />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Professional AV solutions for every occasion</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Projector Hire</h3>
            <p className="text-gray-600">Regular and HD projectors for meetings, trainings, parties, and events. Fast same-day delivery and setup.</p>
          </div>

          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">LED Screen Rental</h3>
            <p className="text-gray-600">High-resolution LED video walls for events, exhibitions, parties, and outdoor functions. Bright and clear in any lighting.</p>
          </div>

          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Large Screen Rental</h3>
            <p className="text-gray-600">Professional 8ft x 8ft projection screens with stands. Ideal for clear visuals in any venue.</p>
          </div>

          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Interactive Whiteboard & Panel</h3>
            <p className="text-gray-600">Rental, sales, and professional installation of smart interactive panels for classrooms, offices, and meeting rooms. Modern collaboration tools with fast setup.</p>
          </div>

          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">PA System Rental</h3>
            <p className="text-gray-600">Powerful sound systems with speakers, mixer, and wireless microphones for excellent audio quality.</p>
          </div>

          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Full AV Setup Package</h3>
            <p className="text-gray-600">Complete solution: Projector + LED/Large Screen + PA System with full professional setup.</p>
          </div>

          <div className="bg-white border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Projector Mounting & Installation</h3>
            <p className="text-gray-600">Expert wall and ceiling mounting with neat cable management for offices and venues.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://wa.me/2348148080273"
            target="_blank"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-3xl text-xl font-semibold"
          >
            Book Your Equipment Now →
          </a>
        </div>
      </main>
    </>
  );
};

export default Services;
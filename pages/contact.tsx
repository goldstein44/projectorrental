// pages/contact.tsx
import Head from 'next/head';

const Contact = () => {
  const whatsappLink = "https://wa.me/2348149660626";

  return (
    <>
      <Head>
        <title>Contact Us - Projector Rental NG</title>
        <meta name="description" content="Get in touch with us for instant quote, booking and inquiries. Fast response via WhatsApp: 08148080273" />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold font-serif mb-6">Get In Touch</h1>
        <p className="text-2xl text-gray-700 mb-12">
          We reply within minutes during business hours
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white text-3xl font-semibold px-16 py-8 rounded-3xl transition-all hover:scale-105"
        >
          💬 Chat with Us on WhatsApp
          <span className="text-2xl">08148080273</span>
        </a>

        <p className="mt-16 text-gray-600">
          Same-day delivery &amp; setup available in all listed premium zones
        </p>
      </main>
    </>
  );
};

export default Contact;


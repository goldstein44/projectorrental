// components/sections/FAQ.tsx
// FAQ with JSON-LD schema for rich snippets

'use client';

import { useState } from 'react';

const faqs = [
  {
    q: "Do you offer same-day delivery?",
    a: "Yes, same-day delivery and setup is available in all listed premium zones when you book early.",
  },
  {
    q: "What is included in the full setup package?",
    a: "The full setup includes projector (regular or HD), 8ft x 8ft screen, full PA system with microphone, all cables and professional on-site setup.",
  },
  {
    q: "How do I make a booking?",
    a: "Simply click any WhatsApp button or chat us directly on 08149660626 with your preferred package and date.",
  },
  {
    q: "Is setup included in the price?",
    a: "Yes, professional setup and pickup is included in all packages.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-medium text-lg">{faq.q}</span>
                <span className="text-2xl text-amber-500">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-8 text-gray-600 border-t pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
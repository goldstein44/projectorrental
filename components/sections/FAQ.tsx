// components/sections/FAQ.tsx
// FAQ section with accordion and JSON-LD schema for SEO

'use client';

import { useState } from 'react';

const faqs = [
  {
    q: "Do you offer same-day delivery?",
    a: "Yes, same-day delivery and professional setup is available when you book early via WhatsApp.",
  },
  {
    q: "What is included in the full setup package?",
    a: "It includes the projector (Regular or HD), 8ft x 8ft screen, full PA system with microphone, all necessary cables, stands, and on-site setup.",
  },
  {
    q: "How do I book?",
    a: "Simply click any WhatsApp button or message us on 08149660626 with your preferred package, date, and location.",
  },
  {
    q: "Is setup and pickup included?",
    a: "Yes, professional delivery, setup, and pickup are included in all package prices.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-3 text-gray-600">Quick answers about our rental service</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-lg pr-4">{faq.q}</span>
                <span className="text-2xl text-amber-600 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
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
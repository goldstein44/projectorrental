// components/sections/HowItWorks.tsx
// Simple 3-step process

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Package",
      desc: "Browse our clear packages and select what you need",
    },
    {
      number: "02",
      title: "Chat on WhatsApp",
      desc: "Send us a message with your date and location",
    },
    {
      number: "03",
      title: "Fast Delivery & Setup",
      desc: "We deliver and set up same day in your area",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">How It Works</h2>
          <p className="mt-4 text-gray-600">3 simple steps to rent premium AV equipment</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-4xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
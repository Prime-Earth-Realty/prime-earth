export default function Investment() {
  const investmentCards = [
    {
      title: "Legacy Land",
      subtitle: "Secure Your Future",
      features: [
        "No litigation, no stress",
        "70×100 standard plots",
        "Full documentation"
      ],
      tags: ["Residential", "Secure", "Premium"],
      description: "Prime plots in fast-developing locations with complete legal documentation and clear titles."
    },
    {
      title: "Growth Zone",
      subtitle: "Rising Values",
      features: [
        "Commercial potential",
        "Infrastructure growth",
        "Airport City proximity"
      ],
      tags: ["Commercial", "Appreciating", "Strategic"],
      description: "Strategic locations with high appreciation potential."
    },
    {
      title: "Flexi-Own",
      subtitle: "Easy Ownership",
      features: [
        "Installment plans",
        "Diaspora-friendly",
        "Quick processing"
      ],
      tags: ["Flexible", "Affordable", "Convenient"],
      description: "Multiple payment options tailored for both local and international buyers."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 scroll-mt-24" id="invest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Secure Your Legacy With Us
          </h2>
          <p className="text-xl text-gray-600 font-sans">
            Discover prime land opportunities with guaranteed growth potential
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {investmentCards.map((card, index) => (
            <div
              key={index}
              className="card shadow-lg w-full max-w-[300px] sm:max-w-none min-h-[420px] group rounded-xl relative flex flex-col p-6 z-[1] overflow-hidden bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 font-serif">
                    {card.title}
                  </h3>
                  <p className="text-lg text-gray-600 mt-1 font-sans">
                    {card.subtitle}
                  </p>
                </div>

                <ul className="mb-6 space-y-2 flex-grow">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                    <p className="text-gray-600 text-sm mb-3 font-sans">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

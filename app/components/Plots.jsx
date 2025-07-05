'use client';

export default function Plots() {
  const plotOptions = [
    {
      size: "70×100",
      features: [
        "Standard residential plot",
        "Installment plans available",
        "Documented Land (Site Plan & Indenture)"
      ],
      highlight: true
    },
    {
      size: "50×70",
      features: [
        "Starter residential plot",
        "Great for first-time buyers",
        "Quick ownership process"
      ],
      highlight: false
    }
  ];

  const handleReserveClick = ( string) => {
    const calendlyUrl = new URL('https://calendly.com/primeearthrealty-info/30min');
    calendlyUrl.searchParams.append('redirect_url', 'https://www.primeearthrealty.com');
    window.open(calendlyUrl.toString(), '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Spacious Plots For Every Dream
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Plot Cards */}
          <div className="flex-1 flex flex-col md:flex-row md:flex-wrap md:justify-center gap-8">
            {plotOptions.map((plot, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg w-full md:w-[350px] ${
                  plot.highlight
                    ? "border-teal-600 shadow-md transform md:-translate-y-2"
                    : "border-gray-200"
                }`}
              >
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{plot.size}</h3>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plot.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleReserveClick(plot.size)}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      plot.highlight
                        ? "bg-teal-700 hover:bg-teal-800 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    Book a call
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

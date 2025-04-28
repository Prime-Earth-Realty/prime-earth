'use client';

export default function FAQ() {
  const faqs = [
    {
      question: "What documents will I receive?",
      answer: "You'll receive indenture, site plan, and full land title documentation upon completion."
    },
    {
      question: "Are there installment options?",
      answer: "Yes! We offer flexible 3-12 month payment plans with 30% deposit."
    },
    {
      question: "How soon can I start building?",
      answer: "Immediately after full payment - all plots are litigation-free and ready for development."
    },
    {
      question: "Is financing available?",
      answer: "We partner with local banks to help secure mortgages for construction after purchase."
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50 scroll-mt-24" id="faq">
      <div className="container max-w-4xl px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our land purchase process
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-2">
                    <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center group-open:bg-teal-100 transition-colors">
                      <svg 
                        className="w-4 h-4 text-teal-600 transform group-open:rotate-180 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </div>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-600 animate-fadeIn">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button 
          onClick={scrollToContact}
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Contact Us
        </button>
        </div>
      </div>
    </section>
  );
}
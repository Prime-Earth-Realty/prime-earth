export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white scroll-mt-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Fixed Aspect Ratio Image Container */}
          <div className="md:sticky md:top-24 self-start">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/fullplot.jpeg" 
                alt="Prime Earth Realty property"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content - Now scrolls independently */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800">
              Building Generational Wealth Through Land Ownership
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Established to be at the forefront of the real estate industry, we specialize in providing discerning buyers with exceptional lots and land tailored to meet their precise needs at competitive rates.
              </p>

              <p>
                Prime Earth Realty is led by forward-thinking Ghanaians with international experience, living in Ghana, the United States and the United Kingdom. Through our global consulting work, we've seen firsthand the premium placed on property ownership.
              </p>

              <p className="text-lg">
                Prime Earth Realty was established to meet the growing demand for secure and transparent land ownership among Ghana's emerging middle class. As a dedicated real estate brokerage, we facilitate property acquisition with professionalism, integrity, and a commitment to helping our clients build long-term generational wealth through strategic investments in land.
              </p>
            </div>

            <div className="pt-2">
              <a 
                href="#contact" 
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-sm"
              >
                Connect With Our Team
              </a>
            </div>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Commitment
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            With deep local expertise and global perspective, we provide secure, high-quality real estate opportunities to help turn your property dreams into reality.
          </p>
        </div>
      </div>
    </section>
  );
}
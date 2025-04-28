// components/AboutUs.tsx
export default function AboutUs() {
    return (
      <section id="about" className="py-16 bg-white scroll-mt-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image (add your image to public/images/) */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/about-company.png" 
                alt="Prime Earth Realty Team"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Our Company
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At the forefront of the real estate industry, we specialize in connecting discerning buyers 
                with exceptional lots and land tailored to meet their precise needs. Our commitment to 
                excellence and a deep understanding of local markets ensures that every transaction is 
                handled with the utmost professionalism and care.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Prime Earth Realty is led by two forward-thinking Ghanaians with international experience, 
                living between Ghana and the UK. Through our work consulting for global firms and families 
                across the U.S. and UK, we've seen firsthand the premium placed on land and property ownership.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/tsopoli_aerial_view.mp4" type="video/mp4" />
          <img 
            src="/images/aerial-fallback.jpg" 
            alt="Aerial view of Tsopoli, Ghana" 
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Unlock Your Future with Prime Earth Realty
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white">
          Own A Land in Tsopoli, Ghana
        </p>
      </div>
    </section>
  );
}
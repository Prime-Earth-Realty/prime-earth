export default function Section({ title, subtitle, children, id }) {
  return (
    <section id={id} className="py-12 md:py-16 lg:py-20 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {title && (
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{title}</h2>
            {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
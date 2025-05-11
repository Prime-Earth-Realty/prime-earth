'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Prime Earth Realty delivered a seamless land-buying experience with transparent processes, great customer service, and strategic land locations. I felt well-supported every step of the way. Owning genuine, verified land and seeing its value appreciate over time has brought peace of mind. I highly recommend Prime Earth Realty to anyone looking for a trustworthy and professional real estate partner.",
      name: "Caleb Elikplim Houncarine",
    },
    {
      quote: "I chose Prime Earth Realty for its exceptional service and dependability. Their professionalism and commitment to future-focused land investment make them a reliable source for anyone looking to build assets.",
      name: "Theophilia Asiedu",
    },
    {
      quote: "As a first-time buyer, I found Prime Earth Realty’s transparency, verified documentation, and clear guidance very reassuring. The entire process—from purchase to starting construction—was smooth and stress-free. I especially value their flexible payment plans, absence of hidden charges, and the ease of beginning my project. Based on both my experience and that of my siblings, I confidently recommend them for their integrity and reliability.",
      name: "Emerald Regina Dodoo",
    },
    {
      quote: "I chose Prime Earth Realty for their transparent and efficient process, which made the entire experience seamless from inquiry to documentation. Their team was consistently available, professional, and supportive throughout. Owning a verified plot with clear documentation has given me real peace of mind. I highly recommend them for their expertise, integrity, and strong customer focus",
      name: "Mr. Brian Doodo",
    },
    {
      quote: "I chose Prime Earth Realty based on a trusted recommendation and paid 70% upfront without seeing the land—and I’m glad I did. The process was transparent and efficient, giving me full confidence in my decision. Their customer service was exceptional, marked by honesty, patience, and professionalism. I now enjoy a deep sense of security owning a legitimate property and highly recommend Prime Earth Realty for their integrity and genuine customer care.",
      name: "Telfer Noel",
    },
  ];

  return (
    <section className="py-16 text-teal-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-teal-800/3 p-8 rounded-lg h-full flex flex-col justify-center items-center">
                <div className="text-xl italic mb-6">"{testimonial.quote}"</div>
                <div className="font-bold">{testimonial.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

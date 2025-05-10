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
    }
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

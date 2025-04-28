'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The installment plan made it possible for me to own land as a teacher. Now my plot has doubled in value!",
      name: "Kwame Asante",
      role: "Homeowner"
    },
    {
      quote: "As a diaspora investor, Prime Earth made the process seamless. The documents were ready when I flew in to visit.",
      name: "Nana Yaa Mensah",
      role: "UK-Based Investor"
    },
    {
      quote: "We purchased land for our retirement home. The area is developing faster than we expected!",
      name: "The Adjei Family",
      role: "Retirees"
    },
    {
      quote: "We purchased land for our retirement home. The area is developing faster than we expected!",
      name: "The Adjei Family",
      role: "Retirees"
    },
    {
      quote: "We purchased land for our retirement home. The area is developing faster than we expected!",
      name: "The Adjei Family",
      role: "Retirees"
    }
  ];

  return (
    <section className="py-16 text-teal-800">
      <div className="container mx-auto px-4" >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-teal-800/3 p-8 rounded-lg h-full flex flex-col justify-between">
                <div className="text-xl italic mb-6">"{testimonial.quote}"</div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-teal-200">{testimonial.role}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

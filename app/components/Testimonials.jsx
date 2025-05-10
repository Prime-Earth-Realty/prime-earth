'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I was motivated to purchase land from Prime Earth Realty because of their solid reputation, transparent processes, and affordable payment plans. I was also impressed by their strategic locations and the potential for value appreciation. My overall experience was smooth and professional; the process was well-structured, and I was kept informed at every step.",
      name: "Caleb Elikplim Houncarine",
    },
    {
      quote: "The customer service was exceptional. The team was responsive, patient, and very supportive throughout the entire journey. They took time to address all my concerns and made sure I was comfortable with every stage of the transaction.",
      name: "Caleb Elikplim Houncarine",
    },
    {
      quote: "The most rewarding part has been the peace of mind that comes from owning a genuine, verified property. Additionally, seeing the development around the area and the steady increase in land value assures me I made a smart investment.",
      name: "Caleb Elikplim Houncarine",
    },
    {
      quote: "Absolutely. I would highly recommend Prime Earth Realty because of their professionalism, transparency, and commitment to customer satisfaction. They make land ownership accessible and trustworthy, which is not always easy to find in the real estate market.",
      name: "Caleb Elikplim Houncarine",
    },
    {
      quote: "Prime Earth Realty’s transparent processes and affordable payment plans made owning land easy. Their excellent customer service and the steady increase in land value have given me peace of mind and confidence in my investment.",
      name: "Caleb Elikplim Houncarine",
    },
    {
      quote: "I chose Prime Earth Realty for its exceptional service and dependability. Their professionalism and commitment to future-focused land investment make them a reliable source for anyone looking to build assets.",
      name: "Theophilia Asiedu",
    }
  ];

  return (
    <section className="py-16 text-teal-800">
      <div className="container mx-auto px-4 text-center" >
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
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            }
          }}
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

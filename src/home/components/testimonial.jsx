import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kapil Paliwal",
    position: "Full Stack Developer",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQFgZO0p5iBbPg/profile-displayphoto-shrink_200_200/B56ZPkTFXSG4AY-/0/1734702029826?e=1759363200&v=beta&t=vSKCSc_rzrzopndE4eGXWThDgPi_1a69QkH3cPnwRzw",
    content:
      "This resume builder is incredible! I landed my dream job at Google within 2 weeks of using it. The AI suggestions were spot on.",
    rating: 5,
  },
  {
    name: "Akash Yadav",
    position: "Electrical Engineer",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4E03AQE39EkCWSZj5Q/profile-displayphoto-shrink_200_200/B4EZRllWAhHMAY-/0/1736871078034?e=1759363200&v=beta&t=23VtaVFXP6m-ZEJyvc-4KOYeUk8ZuPe68Xh0GwO5JEc",
    content:
      "The templates are stunning and professional. I received more interview calls than ever before. Highly recommend!",
    rating: 5,
  },
  {
    name: "Vikas Babu",
    position: "Software Engineer",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5635AQFeDVKA_5l_pA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1729191216649?e=1757149200&v=beta&t=OwhlW4OG6Y5LIKO_MDlg2BAERSiqKrm3mb5r1vXzSoU",
    content:
      "Simple, elegant, and effective. The mobile editor saved me so much time. Perfect for busy professionals.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our
            <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent ml-3">
              Users Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers
            with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-8 h-8 text-blue-400" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full ring-2 ring-blue-400/50 group-hover:ring-blue-400 transition-all"
                />
                <div>
                  <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.position}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

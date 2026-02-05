import { testimonials } from "../../assets/constants/testimonials";

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-16 serif italic text-[#C5A59E]">
        Kind Words from Customers
      </h2>
      <div className="space-y-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="animate-fade-in"
          >
            <p className="text-xl md:text-2xl text-gray-700 italic font-light mb-6">
              "{testimonial.text}"
            </p>
            <div className="flex justify-center items-center space-x-2 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span
                  key={i}
                  className="text-[#C5A59E] text-lg"
                >
                  ★
                </span>
              ))}
            </div>
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-gray-500">
              — {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

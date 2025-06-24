import React, { useRef, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Kenlewis N.",
    quote: "Working with Joy was a dream. She turned my ideas into a sleek, fast, modern website that my clients love.",
  },
  {
    name: "Dave W.",
    quote: "Joy is a front-end magician. Every pixel was perfect — and the site performs like a charm.",
  },
  {
    name: "Imran B.",
    quote: "She gets both design and code. Joyous Tech brought elegance and brains to my brand.",
  },
];



  const Testimonials = () => {
    const sliderRef = useRef(null);
    const [sliderInstanceRef, slider] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
        perView: 1,
        spacing: 16,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">What Clients Say</h2>
          <p className="text-gray-400 mt-4 mb-8">
            A few words from people I've worked with.
          </p>
        </motion.div>

        <motion.div
          ref={(ref) => {
            sliderRef.current = ref;
            sliderInstanceRef(ref);
          }}
          className="keen-slider"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials.map((t, index) => (
            <div key={index} className="keen-slider__slide bg-gray-800 p-6 rounded-xl shadow-md">
              <p className="text-lg italic mb-4">“{t.quote}”</p>
              <p className="text-right font-semibold text-purple-400">— {t.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

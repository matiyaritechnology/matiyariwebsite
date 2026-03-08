import { motion } from "framer-motion";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";

const DeviceShowcase = () => {
  return (
    <section className="py-28 px-6 section-light relative overflow-hidden" id="story">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stainless Steel Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-4 tracking-tight">
              Forged in <span className="green-gradient-text">stainless steel.</span>
            </h2>
            <p className="text-body leading-relaxed text-lg">
              Unmatched design and a functional build with precision engineering that keeps up with your demands.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={img2} alt="Stainless steel enclosure angled view" className="rounded-2xl w-full shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;

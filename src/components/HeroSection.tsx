import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="KAAI bioengineered air purification device in urban setting"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/10 to-background/10" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="badge-green mb-8 shadow-[0_0_20px_rgba(34,197,94,0.2)] border-primary/30 backdrop-blur-md bg-background/50"
        >
          <Leaf size={16} />
          Bioengineered Air Purification
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-lg"
        >
          The Future of Clean Air
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-lg mx-auto drop-shadow-md"
        >
          Transforming polluted air into breathable life.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;

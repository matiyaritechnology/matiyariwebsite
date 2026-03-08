import { motion } from "framer-motion";
import { TreePine, Heart, Settings, Droplets } from "lucide-react";
import kaaiDevice from "@/assets/kaai-device.jpg";

const benefits = [
  {
    icon: TreePine,
    title: "Environmental Benefits",
    description: "CO₂ absorption capacity with a Sustainable closed-loop system",
  },
  {
    icon: Heart,
    title: "Health & Lifestyle Benefits",
    description: "A natural, chemical-free system that cleans the air, eliminates pollutants, boosts oxygen levels, and runs quietly.",
  },
  {
    icon: Settings,
    title: "Operational Benefits",
    description: "Low maintenance, Automated algae care, with Real-time air quality monitoring",
  },
  {
    icon: Droplets,
    title: "Automated Nutrients",
    description: "Self-regulating nutrient delivery system for optimal growth",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-6 section-alt relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={kaaiDevice}
            alt="KAAI device details"
            className="rounded-3xl w-full max-w-lg mx-auto green-glow"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-heading font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-body text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

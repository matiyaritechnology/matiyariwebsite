import { motion } from "framer-motion";
import { TreePine, Users, TrendingUp } from "lucide-react";

const stats = [
  { number: "25x", label: "Tree Equivalent", icon: TreePine },
  { number: "0", label: "Electricity Cost", icon: TrendingUp },
  { number: "24/7", label: "Air Monitoring", icon: Users },
];

const DesignedInIndia = () => (
  <section className="py-28 px-6 section-light">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-heading mb-4 tracking-tight"
      >
        Designed in India. <span className="green-gradient-text">Made for India.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl text-body mb-16"
      >
        The power of 25 trees, packed into 1.
      </motion.p>

      <div className="grid grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="stat-number mb-2">{stat.number}</div>
            <p className="text-subtle text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DesignedInIndia;

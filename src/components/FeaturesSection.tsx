import { motion } from "framer-motion";
import { Smartphone, Sun, Bell, Wrench } from "lucide-react";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import img5 from "@/assets/img5.png";

const features = [
  { icon: Smartphone, title: "Smart Controls", desc: "Intuitive interface for easy management" },
  { icon: Sun, title: "Solar Powered", desc: "Sustainable energy for continuous operation" },
  { icon: Bell, title: "Real-Time Alerts", desc: "Real-time monitoring of air quality & algae health." },
  { icon: Wrench, title: "Low Maintenance", desc: "Durable design with minimal upkeep requirements." },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-28 px-6 section-alt overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={img3}
          alt="KAAI detail background"
          className="w-full h-full object-cover opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="max-w-6xl mx-auto space-y-28 relative z-10">
        {/* Illuminate Section */}
        <div className="text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-heading tracking-tight"
          >
            Illuminate <span className="green-gradient-text">every detail.</span>
          </motion.h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Advanced monitoring system with real-time data visualization and smart controls.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-3">
                  <f.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-heading font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-subtle text-xs">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solar / Environment Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={img4}
            alt="KAAI in outdoor environment"
            className="rounded-2xl w-full shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-4 tracking-tight">
              Built to thrive <span className="green-gradient-text">in any environment.</span>
            </h2>
            <p className="text-body leading-relaxed text-lg">
              Powered entirely by sunlight. The integrated solar panels keep it running day and night, offering a zero-maintenance, zero-electricity solution for modern spaces.
            </p>
          </motion.div>
        </div>

        {/* AQI Display */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-4 tracking-tight">
              Stay informed. Stay protected.
            </h2>
            <p className="text-body leading-relaxed text-lg">
              The built-in Smart AQI Display shows live air quality, weather updates, and algae health — all in one sleek, responsive screen.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={img5}
            alt="KAAI front view with AQI display"
            className="rounded-2xl w-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

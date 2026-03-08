import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import hepaImage from "@/assets/hepa-filters.jpeg";
import kaaiImage from "@/assets/img6.png";

const ComparisonSection = () => {
  return (
    <section className="py-28 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-4 tracking-tight">
            Why KAAI Wins
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            See how KAAI outperforms traditional purification technology on every metric
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* HEPA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            <img src={hepaImage} alt="Traditional HEPA purifier" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-heading font-bold text-xl mb-2">Traditional HEPA Purifiers</h3>
              <p className="text-body text-sm mb-5">
                Local filtration with recurring maintenance and limited intelligence.
              </p>
              <ul className="space-y-3">
                {[
                  "Limited coverage — only nearby air is treated",
                  "High electricity usage",
                  "Frequent filter cleaning required",
                  "Ongoing maintenance and part replacements",
                  "Reactive, not predictive",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                    <X size={16} className="text-destructive mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* KAAI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden border-primary/40 green-glow"
          >
            <img src={kaaiImage} alt="KAAI device" className="w-full h-52 object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-heading font-bold text-xl">KAAI</h3>
                <span className="badge-green text-xs">Recommended</span>
              </div>
              <p className="text-body text-sm mb-5">
                Smart, whole-room air management — low running cost and predictive control.
              </p>
              <ul className="space-y-3">
                {[
                  "Monitors and models whole-room air quality",
                  "Low energy usage",
                  "No filter dependency",
                  "Predictive analytics for proactive control",
                  "Automation and intelligent control",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-heading font-medium">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

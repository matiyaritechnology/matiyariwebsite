import { motion } from "framer-motion";
import { Rocket, TrendingUp, Users, Check, ArrowRight } from "lucide-react";

const models = [
  {
    icon: Rocket,
    title: "Pilot Program",
    desc: "Test KAAI in your facility with full support and performance tracking",
    features: ["3-6 month trial period", "Installation & maintenance included", "Real-time air quality monitoring", "Performance guarantee"],
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "ESG Investment",
    desc: "Align with climate goals while generating measurable environmental impact",
    features: ["Carbon credit eligibility", "ESG reporting support", "ROI through energy savings", "Scalable deployment"],
    highlight: true,
  },
  {
    icon: Users,
    title: "CSR Partnership",
    desc: "Fulfill corporate social responsibility with tangible community health benefits",
    features: ["Branded installations", "Community impact reports", "Tax benefits", "Media & PR support"],
    highlight: false,
  },
];

const PartnersSection = () => {
  return (
    <section className="py-28 px-6 section-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-green mb-4">Collaboration Models</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-4 tracking-tight">Partner With KAAI</h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Flexible partnership models designed for corporates, smart cities, and ESG-focused investors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-7 transition-all duration-300 ${
                model.highlight
                  ? "bg-primary text-primary-foreground shadow-lg green-glow"
                  : "glass-card-hover"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                model.highlight ? "bg-primary-foreground/20" : "bg-accent"
              }`}>
                <model.icon className={model.highlight ? "text-primary-foreground" : "text-primary"} size={22} />
              </div>
              <h3 className={`font-bold text-lg mb-2 ${model.highlight ? "" : "text-heading"}`}>{model.title}</h3>
              <p className={`text-sm mb-5 ${model.highlight ? "opacity-90" : "text-body"}`}>{model.desc}</p>
              <ul className="space-y-2.5 mb-6">
                {model.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${model.highlight ? "opacity-90" : "text-body"}`}>
                    <Check size={14} className={`shrink-0 ${model.highlight ? "" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`inline-flex items-center gap-1 text-sm font-semibold ${
                model.highlight ? "text-primary-foreground" : "text-primary"
              } hover:gap-2 transition-all`}>
                Get Started <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

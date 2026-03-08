import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import appSmartCity from "@/assets/app-smart-city.jpg";
import appAirport from "@/assets/app-airport.jpg";
import appIndustrial from "@/assets/app-industrial.jpg";
import appCorporate from "@/assets/app-corporate.jpg";
import appHospital from "@/assets/app-hospital.jpg";
import appHighway from "@/assets/app-highway.jpg";

const applications = [
  {
    image: appSmartCity,
    title: "Smart Cities & Urban Infrastructure",
    description: "Deploy KAAI across smart-city plazas, walkways and redevelopment corridors to restore green balance where natural cover is lost.",
    tag: "Urban",
  },
  {
    image: appAirport,
    title: "Airports, Metro & Transit Hubs",
    description: "Perfect for high-traffic hubs that need continuous CO₂ reduction and oxygen enrichment for a healthier commuter experience.",
    tag: "Transport",
  },
  {
    image: appIndustrial,
    title: "Industrial & Manufacturing Zones",
    description: "Integrate KAAI into industrial parks to visibly reduce emissions, toxic gases and heat pockets for safer work zones.",
    tag: "Industry",
  },
  {
    image: appCorporate,
    title: "Corporate Parks & Campuses",
    description: "Boost employee wellbeing and ESG credentials by installing KAAI-powered fresh-air zones across corporate campuses.",
    tag: "Enterprise",
  },
  {
    image: appHospital,
    title: "Hospitals & Healthcare",
    description: "Create cleaner breathing zones around healthcare facilities to support recovery and staff wellbeing.",
    tag: "Healthcare",
  },
  {
    image: appHighway,
    title: "Highways & Toll Plazas",
    description: "Place KAAI along high-traffic corridors to reduce vehicle-related pollutants at toll gates, rest stops, and entry points.",
    tag: "Infrastructure",
  },
];

const ApplicationsSection = () => {
  return (
    <section className="py-28 px-6 section-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-green mb-4">Deployment Sectors</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-4 tracking-tight">
            Ideal Applications
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Purpose-built solutions for high-impact environments across cities and industries
          </p>
        </motion.div>

        {/* Featured large cards - first 2 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {applications.slice(0, 2).map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="badge-green text-xs mb-3">{app.tag}</span>
                <h3 className="text-heading font-bold text-xl mb-2 mt-3">{app.title}</h3>
                <p className="text-body text-sm leading-relaxed mb-4">{app.description}</p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid of remaining 4 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.slice(2).map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <span className="badge-green text-xs">{app.tag}</span>
                <h3 className="text-heading font-semibold text-base mb-1.5 mt-2">{app.title}</h3>
                <p className="text-body text-xs leading-relaxed">{app.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional sectors list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-subtle text-sm">
            Also ideal for: <span className="text-body font-medium">Public Parks • Residential Societies • Schools & Universities • Sewage Treatment Plants • CSR & ESG Projects • Government Buildings</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationsSection;

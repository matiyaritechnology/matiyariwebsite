import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Request submitted!", description: "Our team will get back to you within 24 hours." });
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 px-6 section-light">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge-green mb-4">Get Started</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-4 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-body text-lg mb-8 leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours. Whether you're exploring a pilot program, ESG investment, or CSR partnership — we'd love to hear from you.
            </p>

            <div className="space-y-4">
              {[
                { label: "Quick Response", desc: "We respond within 24 hours" },
                { label: "Custom Solutions", desc: "Tailored to your specific needs" },
                { label: "Expert Support", desc: "Dedicated team for every project" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="text-heading font-semibold text-sm">{item.label}</p>
                    <p className="text-subtle text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 shadow-sm space-y-5"
          >
            <div>
              <label className="text-sm text-heading font-medium mb-1.5 block">Full Name *</label>
              <Input required placeholder="Your full name" className="bg-background border-border" />
            </div>
            <div>
              <label className="text-sm text-heading font-medium mb-1.5 block">Email Address *</label>
              <Input required type="email" placeholder="you@example.com" className="bg-background border-border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-heading font-medium mb-1.5 block">Organization</label>
                <Input placeholder="Company name" className="bg-background border-border" />
              </div>
              <div>
                <label className="text-sm text-heading font-medium mb-1.5 block">Phone *</label>
                <Input required type="tel" placeholder="+91 XXXXX XXXXX" className="bg-background border-border" />
              </div>
            </div>
            <div>
              <label className="text-sm text-heading font-medium mb-1.5 block">Message</label>
              <Textarea placeholder="Tell us about your requirements..." className="bg-background border-border min-h-[100px]" />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              <Send size={16} className="mr-2" />
              {loading ? "Submitting..." : "Submit Request"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

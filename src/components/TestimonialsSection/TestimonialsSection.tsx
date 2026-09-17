import { motion } from "framer-motion";
import { Gauge, Users2, FileCheck2 } from "lucide-react";

// NOTE: These are real, résumé-backed results — not client quotes.
// When you have LinkedIn recommendations, you can swap this section back
// to a quote/name/role format if you prefer.
const results = [
  {
    metric: "90%+",
    icon: Gauge,
    title: "Process Automation",
    content: "Delivered 90%+ process automation across enterprise clients, cutting manual workflow time by 70–90% and freeing teams for higher-value work.",
  },
  {
    metric: "25K+",
    icon: Users2,
    title: "Contacts Migrated",
    content: "Migrated 25,000+ contacts in a single GoHighLevel project with 99.9% data integrity, using intelligent pipeline-splitting logic.",
  },
  {
    metric: "100K+",
    icon: FileCheck2,
    title: "Documents Processed",
    content: "Built an OCR pipeline that processed 100,000+ documents at ~99% accuracy, reducing manual document handling by 95%.",
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Results That <span className="text-gradient-primary">Speak</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A track record of zero client churn and 100% on-time delivery — here's the measurable impact behind it.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-panel p-8 rounded-3xl border border-foreground/10 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
            >
              {/* Subtle glow orb */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />

              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-extrabold text-gradient-primary tracking-tight">
                  {item.metric}
                </span>
              </div>

              <h4 className="text-foreground font-bold text-lg mb-2 relative z-10">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed flex-grow relative z-10">
                {item.content}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;

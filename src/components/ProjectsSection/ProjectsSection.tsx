import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

// Live screenshots of each site, generated on the fly by WordPress mShots.
const shot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=800`;

export const ProjectsSection = () => {
  const featured = [
    {
      id: 1,
      title: "Multi-Platform Automation Suite",
      subtitle: "50+ workflows across Zapier, n8n, Make & GHL — incl. a 25,000+ contact CRM migration and a 100k+ document OCR pipeline (99% accuracy)",
      link: "#",
      image: "https://images.pexels.com/photos/8294591/pexels-photo-8294591.jpeg?auto=compress&cs=tinysrgb&w=1200",
      gridClass: "md:col-span-7 h-[420px]",
    },
    {
      id: 2,
      title: "HED KP — Government HR Portal",
      subtitle: "Laravel HR & admin system for the Higher Education Dept, Govt of KPK — serving 100+ institutions with role-based access",
      link: "https://hed.gkp.pk/",
      image: shot("https://hed.gkp.pk/"),
      gridClass: "md:col-span-5 h-[420px]",
    },
    {
      id: 3,
      title: "Jetlocker",
      subtitle: "Smart parcel-locker management platform — automated allocation, notifications & REST APIs for logistics partners",
      link: "https://jetlocker.co/",
      image: shot("https://jetlocker.co/"),
      gridClass: "md:col-span-5 h-[360px]",
    },
    {
      id: 4,
      title: "Canada Prime Marketing",
      subtitle: "B2B/B2C platform (Laravel + React) with lead automation, multi-gateway payments and a 95% performance score",
      link: "https://canadaprimemarketing.com/",
      image: shot("https://canadaprimemarketing.com/"),
      gridClass: "md:col-span-7 h-[360px]",
    },
  ];

  const moreWork = [
    {
      title: "GleamHR",
      tag: "Laravel · HR SaaS",
      desc: "HR management SaaS — feature development and performance optimization.",
      link: "https://gleamhr.com/",
    },
    {
      title: "Sakoon Pharmacy & Healthcare",
      tag: "E-commerce",
      desc: "Pharmacy and healthcare e-commerce platform with product catalog and orders.",
      link: "https://sakoon.pk/",
    },
    {
      title: "Window City — Bristol",
      tag: "Web · Lead-gen",
      desc: "Double-glazing windows & doors website for a UK business, with quote flows.",
      link: "https://window-city.co.uk/",
    },
    {
      title: "Fahad Khan — Lifestyle Coach",
      tag: "GHL · Funnel",
      desc: "Coaching website and marketing funnel with automated lead capture.",
      link: "https://fahadkhan.live/",
    },
    {
      title: "XIB Solutions",
      tag: "Web · Agency",
      desc: "Corporate website and solutions platform for a technology services company.",
      link: "https://www.xibsolutions.com/",
    },
    {
      title: "IFUY Foundation",
      tag: "Web · CMS",
      desc: "Website for the International Foundation of Ultimate Youngsters non-profit.",
      link: "http://www.ifuy.org/",
    },
  ];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          Selected <span className="text-gradient-primary">Works</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          Automation systems and full-stack platforms I've engineered across CRM, government, logistics, healthcare and
          marketing — with live client sites below.
        </p>
      </motion.div>

      {/* Featured 12-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {featured.map((project, i) => {
          const isExternal = project.link !== "#";
          return (
            <motion.a
              key={project.id}
              href={project.link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/10 ${project.gridClass}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="absolute inset-0 bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                <div className="flex items-end justify-between gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                  <div className="z-10 max-w-lg">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-white/80 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-300 rotate-45 group-hover:rotate-0 z-10 shadow-lg">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* More client work */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-extrabold tracking-tight mt-20 mb-8"
      >
        More <span className="text-gradient-primary">Client Work</span>
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {moreWork.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-panel rounded-3xl border border-foreground/10 overflow-hidden hover:border-primary/40 transition-colors shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Screenshot thumbnail */}
            <div className="relative h-44 overflow-hidden bg-neutral-900 border-b border-foreground/10">
              <img
                src={shot(project.link)}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="p-5 flex flex-col gap-2 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5 w-max">
                {project.tag}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1">{project.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

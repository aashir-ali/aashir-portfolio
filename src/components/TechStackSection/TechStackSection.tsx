import { motion } from "framer-motion";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

type Tech = { name: string; icon?: string };

const technologies: Tech[] = [
  { name: "Zapier" },
  { name: "Make" },
  { name: "n8n" },
  { name: "GoHighLevel" },
  { name: "AI Agents" },
  { name: "PHP", icon: `${D}/php/php-original.svg` },
  { name: "Laravel", icon: `${D}/laravel/laravel-original.svg` },
  { name: "React", icon: `${D}/react/react-original.svg` },
  { name: "JavaScript", icon: `${D}/javascript/javascript-original.svg` },
  { name: "TypeScript", icon: `${D}/typescript/typescript-original.svg` },
  { name: "Node.js", icon: `${D}/nodejs/nodejs-original.svg` },
  { name: "MySQL", icon: `${D}/mysql/mysql-original.svg` },
  { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
  { name: "WordPress", icon: `${D}/wordpress/wordpress-plain.svg` },
  { name: "WooCommerce" },
  { name: "REST APIs" },
  { name: "Webhooks" },
  { name: "Tailwind CSS", icon: `${D}/tailwindcss/tailwindcss-original.svg` },
  { name: "Bootstrap", icon: `${D}/bootstrap/bootstrap-original.svg` },
  { name: "Git", icon: `${D}/git/git-original.svg` },
  { name: "Docker", icon: `${D}/docker/docker-original.svg` },
];

const TechStackSection = () => {
  return (
    <div className="w-full py-6 border-t border-b border-foreground/10 bg-foreground/[0.02] flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full overflow-hidden relative flex items-center"
      >
        {/* Gradients to fade edges */}
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Animation */}
        <div className="flex w-max animate-[marquee_38s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused] py-1">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={i}
              className="mx-3 px-5 py-2.5 rounded-full border border-foreground/10 bg-background/80 text-foreground font-medium text-sm flex items-center gap-3 transition-all hover:scale-105 hover:border-primary/50 hover:bg-foreground/5 cursor-default shadow-sm group shrink-0"
            >
              {tech.icon ? (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-purple-500 to-sky-400 shrink-0" />
              )}
              <span className="tracking-wide text-xs md:text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default TechStackSection;

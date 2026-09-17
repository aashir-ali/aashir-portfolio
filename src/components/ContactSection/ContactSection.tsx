import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, CalendarCheck, Briefcase, Store, Linkedin, Github } from "lucide-react";
import { Input } from "../lightswind/input";
import { Textarea } from "../lightswind/textarea";
import { Button } from "../lightswind/button";

const EMAIL = "engr.aashirabbas@gmail.com";
const PHONE_DISPLAY = "+92 328 6598179";
const PHONE_TEL = "+923286598179";
const LOCATION = "Islamabad, Pakistan";
const CALENDLY_URL = "https://calendly.com/aashir-ali-abbas";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "your site"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const contactItems = [
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, label: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { icon: MapPin, label: LOCATION, href: "#" },
  ];

  const platforms = [
    { icon: Briefcase, label: "Upwork", href: "https://www.upwork.com/freelancers/~012efa5017a3d67acc" },
    { icon: Store, label: "Fiverr", href: "https://www.fiverr.com/aashir_ali015" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/aashir-ali-abbas" },
    { icon: Github, label: "GitHub", href: "https://github.com/aashir-ali" },
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-foreground/10 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">

          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Let's <span className="text-gradient-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground">
                Open to remote and contract automation and full-stack work. Have a process you'd like to automate or a
                system to build? Send a note, book a call, or reach me on any platform below.
              </p>
            </div>

            <div className="space-y-6">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Book a call CTA */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-primary/10 border border-primary/30 text-primary font-semibold hover:bg-primary/20 transition-all shadow-sm"
            >
              <CalendarCheck className="w-5 h-5" /> Book a 30-min call
            </a>

            {/* Platform links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Find me on</p>
              <div className="flex flex-wrap gap-3">
                {platforms.map((p) => {
                  const Icon = p.icon;
                  return (
                    <a
                      key={p.label}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel border border-foreground/10 text-sm font-semibold text-foreground hover:text-primary hover:border-primary/40 transition-all shadow-sm"
                    >
                      <Icon className="w-4 h-4" /> {p.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-foreground/10 relative">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Name</label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Message</label>
                <Textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary resize-none placeholder:text-muted-foreground/50 min-h-[120px]"
                  placeholder="Tell me about the workflow or project..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] mt-4 h-12">
                Send Message <Send className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

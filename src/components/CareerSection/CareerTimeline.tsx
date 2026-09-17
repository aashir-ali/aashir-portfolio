import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Workflow, Bot, Code2, Users, Layers, Package } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Sep 2025 – Present",
      title: "Automation Engineer",
      subtitle: "Adwater · Arizona, USA (Remote)",
      description:
        "Architect automation systems across Zapier, n8n and Make to eliminate repetitive operations. Deploy GoHighLevel solutions including AI agents, smart sales pipelines and automated outreach, cutting manual workload by 80%+.",
      icon: <Workflow className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Mar 2025 – Sep 2025",
      title: "Automation Engineer",
      subtitle: "Spark Digital Inc. · Texas, USA (Remote)",
      description:
        "Built multi-step workflows across Zapier, n8n and Make for critical operations. Integrated GHL for lead management and email/SMS campaigns, and implemented webhook + API sync with conditional routing and error handling.",
      icon: <Bot className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Jul 2022 – Feb 2023",
      title: "Full-Stack Developer & Automation Engineer",
      subtitle: "Canada Prime Marketing · Islamabad",
      description:
        "Built the World Immigration Group B2B/B2C platform, lifting performance to 95%. Designed Zapier + GHL automations for lead management and customer communication, plus automated email sequences and lead scoring.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Jul 2021 – Jul 2022",
      title: "Software Engineer (Team Lead)",
      subtitle: "The Sots · Faisalabad",
      description:
        "Led development of the HED KP HR Management System on Laravel, meeting 100% of enterprise requirements. Automated HR workflows across employee data, payroll and performance tracking while managing code reviews and deployments.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Jan 2021 – Mar 2021",
      title: "Junior Software Engineer",
      subtitle: "GlowLogix · Islamabad",
      description:
        "Extended the GleamHR management platform, improving system performance by 93% through database optimization and code refactoring in close collaboration with product and business teams.",
      icon: <Code2 className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Sep 2019 – Dec 2020",
      title: "Junior Software Engineer",
      subtitle: "Ecarobar · Islamabad",
      description:
        "Developed the Jetlocker smart parcel-locker platform — secure authentication, automated locker allocation and notifications — and built RESTful APIs for shipping and logistics integrations.",
      icon: <Package className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="From full-stack engineering to automation-first systems"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};

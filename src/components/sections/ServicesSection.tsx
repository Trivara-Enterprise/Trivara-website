import { SectionHeader, GlassCard } from "@/components/ui";
import {
    IconBuilding,
    IconMobile,
    IconLink,
    IconChart,
} from "@/components/ui/Icons";
import type { ServiceItem } from "@/types";

const SERVICES: ServiceItem[] = [
    {
        icon: <IconBuilding className="w-8 h-8" />,
        title: "Custom Enterprise Software",
        description:
            "Tailored solutions built specifically for your business processes. No more adapting to generic software — we adapt to you.",
        features: ["Process Automation", "Custom Workflows", "Enterprise Scale"],
    },
    {
        icon: <IconMobile className="w-8 h-8" />,
        title: "Mobile-First Applications",
        description:
            "Your team works in the field, not at desks. We build apps that work seamlessly on mobile, even with poor connectivity.",
        features: ["Offline Support", "Real-time Sync", "Intuitive UX"],
    },
    {
        icon: <IconLink className="w-8 h-8" />,
        title: "System Integration",
        description:
            "Connect your existing tools, databases, and workflows into one unified system. No more copy-pasting between apps.",
        features: ["API Integrations", "Data Migration", "Legacy Support"],
    },
    {
        icon: <IconChart className="w-8 h-8" />,
        title: "Analytics & Reporting",
        description:
            "Make decisions based on real-time data. Dashboards, reports, and insights that actually matter to your business.",
        features: ["Live Dashboards", "Custom Reports", "Predictive Insights"],
    },
];

export const ServicesSection = () => {
    return (
        <section id="services" className="py-20 sm:py-28 section-with-glow">
            <div className="section-container">
                <SectionHeader
                    label="What We Build"
                    title={
                        <>
                            Technology That{" "}
                            <span className="gradient-text">Transforms Operations</span>
                        </>
                    }
                    description="We don't just build software — we build solutions that eliminate friction, automate the mundane, and give you back control of your business."
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {SERVICES.map((service, i) => (
                        <GlassCard key={i} className="p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-xl mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/60 text-sm mb-4">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature, j) => (
                                            <span
                                                key={j}
                                                className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

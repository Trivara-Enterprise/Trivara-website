import { GlassCard, Badge } from "@/components/ui";
import {
    IconTruck,
    IconDocument,
    IconCog,
    IconPresentation,
    IconMobile,
    IconBell,
    IconMail,
} from "@/components/ui/Icons";
import { CONTACT } from "@/constants";
import type { FeatureItem } from "@/types";

const FEATURES: FeatureItem[] = [
    {
        icon: <IconTruck className="w-6 h-6" />,
        title: "Fleet Tracking",
        description: "Real-time GPS tracking of all your vehicles",
    },
    {
        icon: <IconDocument className="w-6 h-6" />,
        title: "Digital Documentation",
        description: "All paperwork digitized — invoices, permits, receipts",
    },
    {
        icon: <IconCog className="w-6 h-6" />,
        title: "Automated Workflows",
        description: "From booking to delivery, everything automated",
    },
    {
        icon: <IconPresentation className="w-6 h-6" />,
        title: "Live Dashboard",
        description: "See your entire operation in one screen",
    },
    {
        icon: <IconMobile className="w-6 h-6" />,
        title: "Mobile App",
        description: "Drivers and managers stay connected on the go",
    },
    {
        icon: <IconBell className="w-6 h-6" />,
        title: "Smart Alerts",
        description: "Get notified of delays, issues, and milestones",
    },
];

export const ProductTeaserSection = () => {
    return (
        <section
            id="products"
            className="py-20 sm:py-28 bg-gradient-to-b from-[#0a0a15] to-black"
        >
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div>
                        <Badge variant="success" pulse className="mb-6">
                            Coming Soon
                        </Badge>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
                            Introducing <span className="gradient-text">TruckFlow</span>
                        </h2>
                        <p className="text-white/70 text-base sm:text-lg mb-4">
                            Our first product: A complete fleet management system designed
                            specifically for the tank truck transportation industry.
                        </p>
                        <p className="text-white/70 text-base sm:text-lg mb-8">
                            No more paper trip sheets. No more waiting for phone updates. No
                            more manual billing. TruckFlow digitizes and automates your entire
                            fleet operation from dispatch to delivery.
                        </p>

                        {/* Contact CTA */}
                        <a
                            href={`mailto:${CONTACT.email}?subject=TruckFlow%20Early%20Access`}
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            <IconMail className="w-5 h-5" />
                            Get Early Access
                        </a>
                        <p className="text-white/40 text-sm mt-3">
                            Reach out to learn more about TruckFlow
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {FEATURES.map((feature, i) => (
                            <GlassCard key={i} className="p-5 group">
                                <div className="text-indigo-400 mb-3 group-hover:scale-110 transition-transform inline-block">
                                    {feature.icon}
                                </div>
                                <h4 className="text-white font-medium text-sm mb-1">
                                    {feature.title}
                                </h4>
                                <p className="text-white/50 text-xs">{feature.description}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

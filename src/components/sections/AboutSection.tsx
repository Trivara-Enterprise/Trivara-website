import { GlassCard } from "@/components/ui";
import {
    IconRocket,
    IconGlobe,
    IconBolt,
    IconHandshake,
} from "@/components/ui/Icons";
import type { ValueItem } from "@/types";

const VALUES: ValueItem[] = [
    {
        icon: <IconRocket className="w-6 h-6" />,
        title: "Innovation First",
        desc: "Cutting-edge tech for real problems",
    },
    {
        icon: <IconGlobe className="w-6 h-6" />,
        title: "Global Reach",
        desc: "Solutions that scale worldwide",
    },
    {
        icon: <IconBolt className="w-6 h-6" />,
        title: "Speed & Scale",
        desc: "From day one to enterprise scale",
    },
    {
        icon: <IconHandshake className="w-6 h-6" />,
        title: "Partner Mindset",
        desc: "Your success is our success",
    },
];

export const AboutSection = () => {
    return (
        <section id="about" className="section-with-glow py-20 sm:py-28">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4 block">
                            About Trivara
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
                            Modernizing{" "}
                            <span className="gradient-text">Traditional Industries</span>
                        </h2>
                        <p className="text-white/70 text-base sm:text-lg mb-6">
                            Trivara is a technology startup on a mission to revolutionize
                            industries that have been operating the same way for decades. From
                            transportation and logistics to manufacturing and agriculture — we
                            see enterprises drowning in paperwork, manual processes, and
                            disconnected systems.
                        </p>
                        <p className="text-white/70 text-base sm:text-lg mb-8">
                            We&apos;re here to change that. Our team builds modern, intuitive
                            software that eliminates friction, automates workflows, and gives
                            business owners complete visibility into their operations — all
                            from one unified platform.
                        </p>

                        {/* Values */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {VALUES.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
                                >
                                    <span className="text-indigo-400 mt-0.5">{item.icon}</span>
                                    <div>
                                        <h4 className="text-white font-medium text-sm">
                                            {item.title}
                                        </h4>
                                        <p className="text-white/50 text-xs">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="order-1 lg:order-2 relative">
                        <GlassCard className="p-8 sm:p-12" hoverable={false}>
                            <div className="text-6xl sm:text-8xl font-bold gradient-text mb-4">
                                2025
                            </div>
                            <p className="text-white text-xl sm:text-2xl font-medium mb-2">
                                Founded & Growing
                            </p>
                            <p className="text-white/60">
                                Starting our journey to transform how traditional industries
                                operate worldwide
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-white/50 text-sm">First Product</p>
                                <p className="text-white text-lg font-medium">
                                    Fleet Management System
                                </p>
                            </div>
                        </GlassCard>
                        {/* Decorative glow */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

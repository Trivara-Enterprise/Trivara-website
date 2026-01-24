import { SectionHeader, Badge } from "@/components/ui";
import {
    IconSearch,
    IconPencil,
    IconCog,
    IconRocket,
} from "@/components/ui/Icons";
import type { ProcessStep } from "@/types";

const PROCESS_STEPS: ProcessStep[] = [
    {
        number: "01",
        title: "Discover",
        description:
            "We dive deep into your business. Understanding your workflows, pain points, and goals is our first step.",
        icon: <IconSearch className="w-10 h-10" />,
    },
    {
        number: "02",
        title: "Design",
        description:
            "We architect a solution tailored to your needs. You'll see mockups and prototypes before any code is written.",
        icon: <IconPencil className="w-10 h-10" />,
    },
    {
        number: "03",
        title: "Develop",
        description:
            "Our team builds your solution with modern, scalable technology. Regular updates keep you in the loop.",
        icon: <IconCog className="w-10 h-10" />,
    },
    {
        number: "04",
        title: "Deploy",
        description:
            "Launch with confidence. We handle deployment, training, and provide ongoing support to ensure success.",
        icon: <IconRocket className="w-10 h-10" />,
    },
];

export const ProcessSection = () => {
    return (
        <section id="process" className="py-20 sm:py-28 section-with-glow">
            <div className="section-container">
                <SectionHeader
                    label="Our Process"
                    title={
                        <>
                            From Idea to <span className="gradient-text">Live Product</span>
                        </>
                    }
                    description="We follow a proven methodology that ensures we deliver exactly what your business needs — on time and on budget."
                />

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="relative text-center group">
                                {/* Step Icon with Number */}
                                <div className="inline-flex relative mb-6">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform border border-indigo-500/30">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                        {step.number}
                                    </div>
                                </div>

                                <h3 className="text-white font-semibold text-xl mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-white/60 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

import { SectionHeader, GlassCard } from "@/components/ui";
import {
    IconDocument,
    IconClock,
    IconPuzzle,
    IconEyeOff,
    IconCurrency,
} from "@/components/ui/Icons";
import type { ProblemItem } from "@/types";

const PROBLEMS: ProblemItem[] = [
    {
        icon: <IconDocument className="w-8 h-8" />,
        title: "Mountains of Paperwork",
        description:
            "Invoices, delivery receipts, logs, permits — all managed manually. One misplaced document causes delays for everyone.",
    },
    {
        icon: <IconClock className="w-8 h-8" />,
        title: "Waiting for Information",
        description:
            "Need approval? Wait for a phone call. Need data? Wait for someone to email a spreadsheet. Time wasted, every day.",
    },
    {
        icon: <IconPuzzle className="w-8 h-8" />,
        title: "Disconnected Systems",
        description:
            "Data in notebooks, Excel files, messaging apps, and legacy software that don't talk to each other.",
    },
    {
        icon: <IconEyeOff className="w-8 h-8" />,
        title: "Zero Visibility",
        description:
            "Business owners can't see what's happening in real-time. Decisions are made on outdated or incomplete information.",
    },
];

export const ProblemSection = () => {
    return (
        <section className="py-20 sm:py-28 bg-gradient-to-b from-black to-[#0a0a15]">
            <div className="section-container">
                <SectionHeader
                    label="The Problem"
                    labelColor="text-red-400"
                    title={
                        <>
                            Traditional Industries Are{" "}
                            <span className="text-red-400">Bleeding Time & Money</span>
                        </>
                    }
                    description="Across the world, countless businesses in transportation, logistics, manufacturing, and more still operate like it's 1990. Here's what we see every day:"
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROBLEMS.map((problem, i) => (
                        <GlassCard key={i} className="p-6 text-center group">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                                {problem.icon}
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">
                                {problem.title}
                            </h3>
                            <p className="text-white/60 text-sm">{problem.description}</p>
                        </GlassCard>
                    ))}
                </div>

                {/* Impact Statement */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20">
                        <IconCurrency className="w-6 h-6 text-red-400" />
                        <p className="text-white/80">
                            Businesses lose{" "}
                            <span className="text-red-400 font-semibold">
                                millions annually
                            </span>{" "}
                            to inefficiency and manual errors
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

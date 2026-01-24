import Link from "next/link";

export default function UnderConstruction() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/30">
                    <svg
                        className="w-8 h-8 text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                        />
                    </svg>
                </div>

                <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                    Under Construction
                </h1>

                <p className="text-white/50 max-w-sm mx-auto mb-8">
                    This page is being built and will be available soon.
                </p>

                <Link href="/" className="btn-primary">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

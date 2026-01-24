import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="relative z-10">
                {/* 404 Text */}
                <h1 className="text-[120px] sm:text-[180px] font-bold leading-none gradient-text mb-4">
                    404
                </h1>

                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                    Page Not Found
                </h2>

                <p className="text-white/60 max-w-md mx-auto mb-8">
                    Oops! The page you&apos;re looking for doesn&apos;t exist or has been
                    moved. Let&apos;s get you back on track.
                </p>

                <Link
                    href="/"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

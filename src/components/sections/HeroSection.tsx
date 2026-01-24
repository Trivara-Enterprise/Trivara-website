export const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-dvh w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 pb-16 overflow-hidden"
        >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full opacity-30 animate-pulse-glow"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)",
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto stagger-children">
                {/* Badge */}
                <div className="animate-fadeInUp opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white/70 mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Building the Future of Industry
                </div>

                {/* Main Headline */}
                <h1 className="animate-fadeInUp opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-[1.1]">
                    We Build{" "}
                    <span className="gradient-text">CUTTING-EDGE</span>
                    <br />
                    <span className="gradient-text">SOFTWARE</span>
                    {" "}for Industries
                    <br />
                    Stuck in the Past
                </h1>

                {/* Subheadline */}
                <p className="animate-fadeInUp opacity-0 text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10">
                    Trivara transforms traditional businesses with modern technology. We
                    automate manual processes, digitize paperwork, and build scalable
                    enterprise solutions that run your operations seamlessly.
                </p>

                {/* CTAs */}
                <div className="animate-fadeInUp opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#products" className="btn-primary">
                        Explore Our First Product →
                    </a>
                    <a href="#about" className="btn-outline">
                        Learn About Trivara
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden sm:block">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
};

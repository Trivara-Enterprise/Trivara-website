import { IconMail, IconCheck } from "@/components/ui/Icons";
import { CONTACT } from "@/constants";

export const CTASection = () => {
    return (
        <section id="contact" className="py-20 sm:py-28">
            <div className="section-container">
                <div className="relative overflow-hidden rounded-3xl">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtMnYtMmgydi0yaDJ2MmgydjJoLTJ2Mmgydjh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

                    <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-24 text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready to Modernize Your Business?
                        </h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                            Whether you&apos;re looking to digitize operations, automate
                            workflows, or build custom software — let&apos;s talk about how
                            Trivara can help transform your business.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg"
                            >
                                <IconMail className="w-5 h-5" />
                                Get in Touch
                            </a>
                            <a
                                href="#products"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
                            >
                                Explore TruckFlow →
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
                            <div className="flex items-center gap-2">
                                <IconCheck className="w-5 h-5 text-green-400" />
                                Free Consultation
                            </div>
                            <div className="flex items-center gap-2">
                                <IconCheck className="w-5 h-5 text-green-400" />
                                No Commitment Required
                            </div>
                            <div className="flex items-center gap-2">
                                <IconCheck className="w-5 h-5 text-green-400" />
                                Response within 24 hours
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

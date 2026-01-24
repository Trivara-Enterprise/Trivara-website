export const SITE_CONFIG = {
    companyName: "Trivara",
    companyFullName: "Trivara Enterprises",
    tagline: "Building Scalable Software Solutions",

    email: "trivaraenterprise@gmail.com",

    socials: {
        twitter: "/",
        linkedin: "https://www.linkedin.com/in/trivara-enterprises-1991a43a8/",
        instagram: "/",
    },

    launchDate: "2026-02-18",

    copyrightYear: 2025,
} as const;

export const EMAIL_SUBJECTS = {
    inquiry: "Inquiry from Trivara Enterprises Website",
    support: "Support Request",
} as const;

export const getMailtoLink = (subject: keyof typeof EMAIL_SUBJECTS = "inquiry") => {
    return `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(EMAIL_SUBJECTS[subject])}`;
};

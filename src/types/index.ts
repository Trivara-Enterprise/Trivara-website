// Shared TypeScript types for the application

import { ReactNode } from "react";

// Navigation types
export interface NavLink {
    label: string;
    href: string;
}

// Section data types
export interface ValueItem {
    icon: ReactNode;
    title: string;
    desc: string;
}

export interface ProblemItem {
    icon: ReactNode;
    title: string;
    description: string;
}

export interface ServiceItem {
    icon: ReactNode;
    title: string;
    description: string;
    features: string[];
}

export interface FeatureItem {
    icon: ReactNode;
    title: string;
    description: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
    icon: ReactNode;
}

export interface FooterLinkGroup {
    company: NavLink[];
    products: NavLink[];
    resources: NavLink[];
}

export interface SocialLink {
    label: string;
    href: string;
    icon: ReactNode;
}

// Component prop types
export interface SectionProps {
    id?: string;
    className?: string;
    children?: ReactNode;
}

export interface ButtonProps {
    variant?: "primary" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
    children: ReactNode;
    className?: string;
    type?: "button" | "submit";
    disabled?: boolean;
}

export interface CardProps {
    className?: string;
    children: ReactNode;
    hoverable?: boolean;
}

export interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    required?: boolean;
    name?: string;
    id?: string;
}

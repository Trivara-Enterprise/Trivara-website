// Reusable UI Components

import { FC, ReactNode } from "react";
import { ButtonProps, CardProps, InputProps } from "@/types";

/**
 * Primary Button Component
 * Supports primary (filled) and outline variants
 */
export const Button: FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    href,
    onClick,
    children,
    className = "",
    type = "button",
    disabled = false,
}) => {
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    const baseClasses = `
    inline-flex items-center justify-center gap-2 
    font-medium rounded-xl transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
  `;

    const variantClasses = {
        primary: `
      bg-gradient-to-r from-[#07043f] to-[#7a76c8] 
      text-white shadow-lg shadow-indigo-500/25
      hover:opacity-90 hover:translate-y-[-2px]
    `,
        outline: `
      relative bg-transparent text-white
      before:absolute before:inset-0 before:rounded-xl before:p-[1px]
      before:bg-gradient-to-r before:from-indigo-500/40 before:via-purple-500/40 before:to-indigo-400/40
      before:mask-composite-exclude before:-z-10
      hover:bg-indigo-500/10
      border border-indigo-500/30
    `,
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

    if (href) {
        return (
            <a href={href} className={combinedClasses}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedClasses}
        >
            {children}
        </button>
    );
};

/**
 * Glass Card Component
 * Semi-transparent card with backdrop blur
 */
export const GlassCard: FC<CardProps> = ({
    className = "",
    children,
    hoverable = true,
}) => {
    const hoverClasses = hoverable
        ? "hover:border-indigo-500/50 hover:translate-y-[-4px]"
        : "";

    return (
        <div
            className={`
        bg-white/5 backdrop-blur-xl
        border border-white/10 rounded-2xl
        transition-all duration-300
        ${hoverClasses}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

/**
 * Input Component
 * Styled input field for forms
 */
export const Input: FC<InputProps> = ({
    type = "text",
    placeholder,
    value,
    onChange,
    className = "",
    required = false,
    name,
    id,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            name={name}
            id={id}
            className={`
        px-4 py-3 rounded-lg
        bg-white/5 border border-white/10
        text-white placeholder-white/40
        focus:outline-none focus:border-indigo-500
        transition-colors duration-200
        ${className}
      `}
        />
    );
};

/**
 * Section Container Component
 * Standard section wrapper with max-width and padding
 */
export const SectionContainer: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className = "" }) => {
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

/**
 * Section Header Component
 * Consistent section header with label, title, and description
 */
export const SectionHeader: FC<{
    label?: string;
    labelColor?: string;
    title: ReactNode;
    description?: string;
    className?: string;
}> = ({
    label,
    labelColor = "text-indigo-400",
    title,
    description,
    className = "",
}) => {
        return (
            <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
                {label && (
                    <span
                        className={`text-sm font-medium uppercase tracking-wider mb-4 block ${labelColor}`}
                    >
                        {label}
                    </span>
                )}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
                    {title}
                </h2>
                {description && (
                    <p className="text-white/70 text-base sm:text-lg">{description}</p>
                )}
            </div>
        );
    };

/**
 * Badge Component
 * Small status indicator badge
 */
export const Badge: FC<{
    children: ReactNode;
    variant?: "success" | "info" | "warning";
    pulse?: boolean;
    className?: string;
}> = ({ children, variant = "info", pulse = false, className = "" }) => {
    const variantClasses = {
        success: "bg-green-500/10 border-green-500/20 text-green-400",
        info: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
        warning: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    };

    return (
        <div
            className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full
        border text-sm
        ${variantClasses[variant]}
        ${className}
      `}
        >
            {pulse && (
                <span
                    className={`w-2 h-2 rounded-full animate-pulse ${variant === "success"
                            ? "bg-green-400"
                            : variant === "warning"
                                ? "bg-amber-400"
                                : "bg-indigo-400"
                        }`}
                />
            )}
            {children}
        </div>
    );
};

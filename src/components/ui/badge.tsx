import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "outline" | "secondary";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border border-border text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-colors cursor-default",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}

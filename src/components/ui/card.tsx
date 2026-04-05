import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={cn(
            "bg-card text-card-foreground rounded-xl border border-border/50 p-6 shadow-sm hover:shadow-md transition-shadow",
            className
        )}>
            {children}
        </div>
    );
}

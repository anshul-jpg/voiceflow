import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6",
        hover && "transition-all duration-300 hover:border-white/15 hover:bg-surface-elevated",
        className
      )}
    >
      {children}
    </div>
  );
}

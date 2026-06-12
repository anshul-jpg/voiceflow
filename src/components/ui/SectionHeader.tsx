import { cn } from "@/lib/utils";
import { GradientText } from "./GradientText";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  highlight,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <p className="mb-4 text-sm font-medium tracking-wide text-blue-400 uppercase">
          {badge}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
        {highlight && (
          <>
            {" "}
            <GradientText>{highlight}</GradientText>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}

import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: never };

type ButtonAsLink = ButtonBaseProps & { href: string; children: React.ReactNode; className?: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.75rem]",
  md: "px-6 py-3 text-[0.82rem]",
  lg: "px-8 py-4 text-[0.9rem]",
};

function getStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return {
        background: "var(--color-teal)",
        color: "var(--color-navy)",
        boxShadow: "var(--shadow-teal)",
        border: "none",
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--color-teal)",
        border: "1px solid oklch(0.65 0.12 185 / 0.40)",
      };
    case "dark":
      return {
        background: "oklch(1 0 0 / 0.08)",
        color: "var(--color-ivory)",
        border: "1px solid oklch(1 0 0 / 0.12)",
      };
  }
}

const baseClass =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className = "" } = props;
  const sizeClass = sizeStyles[size];
  const style = getStyles(variant);
  const combinedClass = `${baseClass} ${sizeClass} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={combinedClass}
        style={{ ...style, borderRadius: "6px" }}
      >
        {props.children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { href: _href, variant: _v, size: _s, ...rest } = props as ButtonAsButton & { href?: never; variant?: Variant; size?: Size };

  return (
    <button
      {...rest}
      className={combinedClass}
      style={{ ...style, borderRadius: "6px" }}
    />
  );
}

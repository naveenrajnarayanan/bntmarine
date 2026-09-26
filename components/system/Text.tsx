import type { ComponentPropsWithoutRef, ElementType } from "react";
import { typeClass } from "@/lib/design-system/classes";
import { cn } from "@/lib/design-system/cn";
import type { TypographyRole } from "@/lib/design-system/tokens";

const toneClass = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
  muted: "text-text-muted",
  brand: "text-brand-primary",
  inverse: "text-text-inverse",
} as const;

const defaultElement: Record<TypographyRole, ElementType> = {
  "display-xl": "p",
  "display-large": "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-large": "p",
  body: "p",
  "body-small": "p",
  caption: "p",
  eyebrow: "p",
  navigation: "span",
  cta: "span",
  "product-meta": "span",
  "spec-number": "span",
};

type Tone = keyof typeof toneClass;

type TextProps<T extends ElementType> = {
  as?: T;
  variant: TypographyRole;
  tone?: Tone;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Text<T extends ElementType = "p">({
  as,
  variant,
  tone,
  className,
  ...props
}: TextProps<T>) {
  const Component = as ?? defaultElement[variant];
  const resolvedTone =
    tone ??
    (variant === "product-meta"
      ? undefined
      : variant === "caption" || variant === "eyebrow"
        ? "secondary"
        : "primary");

  return (
    <Component
      className={cn(
        typeClass[variant],
        resolvedTone ? toneClass[resolvedTone] : undefined,
        className,
      )}
      {...props}
    />
  );
}

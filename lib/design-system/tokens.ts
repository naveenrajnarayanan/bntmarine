export const breakpoints = {
  tablet: 768,
  desktop: 1024,
  content: 1440,
} as const;

export const spacing = {
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  24: 24,
  32: 32,
  48: 48,
  64: 64,
  80: 80,
  96: 96,
  128: 128,
  160: 160,
} as const;

export const grid = {
  columns: {
    mobile: 4,
    tablet: 8,
    desktop: 12,
  },
  maxWidth: 1440,
  pageMargin: {
    mobile: spacing[24],
    tablet: spacing[48],
    desktop: spacing[80],
  },
  columnGap: {
    mobile: spacing[16],
    tablet: spacing[16],
    desktop: spacing[24],
  },
  sectionSpacing: {
    mobile: spacing[80],
    tablet: spacing[96],
    desktop: spacing[128],
  },
  mobilePadding: spacing[24],
} as const;

export const color = {
  background: {
    primary: "var(--background-primary)",
    secondary: "var(--background-secondary)",
  },
  surface: {
    primary: "var(--surface-primary)",
    elevated: "var(--surface-elevated)",
  },
  text: {
    primary: "var(--text-primary)",
    secondary: "var(--text-secondary)",
    tertiary: "var(--text-tertiary)",
    muted: "var(--text-muted)",
  },
  border: {
    subtle: "var(--border-subtle)",
    default: "var(--border-default)",
    strong: "var(--border-strong)",
  },
  brand: {
    primary: "var(--brand-primary)",
    hover: "var(--brand-hover)",
    active: "var(--brand-active)",
  },
  interactive: {
    default: "var(--interactive-default)",
    hover: "var(--interactive-hover)",
    active: "var(--interactive-active)",
    focus: "var(--interactive-focus)",
    disabled: "var(--interactive-disabled)",
  },
  status: {
    success: "var(--status-success)",
    error: "var(--status-error)",
    warning: "var(--status-warning)",
  },
} as const;

export const typographyRoles = [
  "display-xl",
  "display-large",
  "h1",
  "h2",
  "h3",
  "h4",
  "body-large",
  "body",
  "body-small",
  "caption",
  "eyebrow",
  "navigation",
  "cta",
  "product-meta",
  "spec-number",
] as const;

export type TypographyRole = (typeof typographyRoles)[number];

export const typography = {
  "display-xl": {
    size: "var(--font-display-xl-size)",
    line: "var(--font-display-xl-line)",
    tracking: "var(--font-display-xl-tracking)",
    weight: "var(--font-display-xl-weight)",
    mobile: 48,
    tablet: 72,
    desktop: 104,
  },
  "display-large": {
    size: "var(--font-display-large-size)",
    line: "var(--font-display-large-line)",
    tracking: "var(--font-display-large-tracking)",
    weight: "var(--font-display-large-weight)",
    mobile: 40,
    tablet: 64,
    desktop: 88,
  },
  h1: {
    size: "var(--font-h1-size)",
    line: "var(--font-h1-line)",
    tracking: "var(--font-h1-tracking)",
    weight: "var(--font-h1-weight)",
    mobile: 36,
    tablet: 52,
    desktop: 72,
  },
  h2: {
    size: "var(--font-h2-size)",
    line: "var(--font-h2-line)",
    tracking: "var(--font-h2-tracking)",
    weight: "var(--font-h2-weight)",
    mobile: 32,
    tablet: 44,
    desktop: 60,
  },
  h3: {
    size: "var(--font-h3-size)",
    line: "var(--font-h3-line)",
    tracking: "var(--font-h3-tracking)",
    weight: "var(--font-h3-weight)",
    mobile: 24,
    tablet: 32,
    desktop: 40,
  },
  h4: {
    size: "var(--font-h4-size)",
    line: "var(--font-h4-line)",
    tracking: "var(--font-h4-tracking)",
    weight: "var(--font-h4-weight)",
    mobile: 20,
    tablet: 22,
    desktop: 24,
  },
  "body-large": {
    size: "var(--font-body-large-size)",
    line: "var(--font-body-large-line)",
    tracking: "var(--font-body-large-tracking)",
    weight: "var(--font-body-large-weight)",
    mobile: 17,
    tablet: 18,
    desktop: 18,
  },
  body: {
    size: "var(--font-body-size)",
    line: "var(--font-body-line)",
    tracking: "var(--font-body-tracking)",
    weight: "var(--font-body-weight)",
    mobile: 16,
    tablet: 16,
    desktop: 16,
  },
  "body-small": {
    size: "var(--font-body-small-size)",
    line: "var(--font-body-small-line)",
    tracking: "var(--font-body-small-tracking)",
    weight: "var(--font-body-small-weight)",
    mobile: 13,
    tablet: 14,
    desktop: 14,
  },
  caption: {
    size: "var(--font-caption-size)",
    line: "var(--font-caption-line)",
    tracking: "var(--font-caption-tracking)",
    weight: "var(--font-caption-weight)",
    mobile: 12,
    tablet: 12,
    desktop: 12,
  },
  eyebrow: {
    size: "var(--font-eyebrow-size)",
    line: "var(--font-eyebrow-line)",
    tracking: "var(--font-eyebrow-tracking)",
    weight: "var(--font-eyebrow-weight)",
    mobile: 11,
    tablet: 11,
    desktop: 11,
  },
  navigation: {
    size: "var(--font-navigation-size)",
    line: "var(--font-navigation-line)",
    tracking: "var(--font-navigation-tracking)",
    weight: "var(--font-navigation-weight)",
    mobile: 12,
    tablet: 13,
    desktop: 13,
  },
  cta: {
    size: "var(--font-cta-size)",
    line: "var(--font-cta-line)",
    tracking: "var(--font-cta-tracking)",
    weight: "var(--font-cta-weight)",
    mobile: 12,
    tablet: 13,
    desktop: 13,
  },
  "product-meta": {
    size: "var(--font-product-meta-size)",
    line: "var(--font-product-meta-line)",
    tracking: "var(--font-product-meta-tracking)",
    weight: "var(--font-product-meta-weight)",
    mobile: 12,
    tablet: 12,
    desktop: 12,
  },
  "spec-number": {
    size: "var(--font-spec-number-size)",
    line: "var(--font-spec-number-line)",
    tracking: "var(--font-spec-number-tracking)",
    weight: "var(--font-spec-number-weight)",
    mobile: 32,
    tablet: 44,
    desktop: 56,
  },
} as const satisfies Record<
  TypographyRole,
  {
    size: string;
    line: string;
    tracking: string;
    weight: string;
    mobile: number;
    tablet: number;
    desktop: number;
  }
>;

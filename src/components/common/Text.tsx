//@ts-nocheck
import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Balancer } from "react-wrap-balancer";

const textVariants = cva([], {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      XL: "text-3xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      foreground: "text-foreground",
      "primary-foreground": "text-primary-foreground",
      "primary-container-foreground": "text-primary-container-foreground",
      "secondary-foreground": "text-secondary-foreground",
      "secondary-container-foreground": "text-secondary-container-foreground",
      "tertiary-foreground": "text-tertiary-foreground",
      "tertiary-container-foreground": "text-tertiary-container-foreground",
      "destructive-foreground": "text-destructive-foreground",
      "destructive-container-foreground":
        "text-destructive-container-foreground",
      "surface-foreground": "text-surface-foreground",
      "surface-high-foreground": "text-surface-high-foreground",
      black: "text-black",
      neutral: "text-black/60",
      ghost: "text-gray-400",
    },
  },
});

type TextStylesProps = VariantProps<typeof textVariants>;

export interface TextProps
  extends Omit<TextStylesProps, "size" | "weight" | "color"> {
  variant: `${NonNullable<TextStylesProps["size"]>}/${NonNullable<
    TextStylesProps["weight"]
  >}/${NonNullable<TextStylesProps["color"]>}`;
  children?: ReactNode;
  className?: string;
}

export function Text({ variant, children, className }: TextProps) {
  const [size, weight, color] = (variant as string).split("/") as [
    TextStylesProps["size"],
    TextStylesProps["weight"],
    TextStylesProps["color"]
  ];
  return (
    <div className={cn(textVariants({ size, weight, color, className }))}>
      <Balancer>{children}</Balancer>
    </div>
  );
}

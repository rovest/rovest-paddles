"use client";

import NextLink from "next/link";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva("", {
  variants: {
    variant: {
      default:
        // "border-b hover:border-b-slate-900 dark:hover:border-b-slate-300 dark:border-b-slate-600 border-b-slate-600",
        "border-b border-b-foreground/40 hover:border-b-foreground/100 text-foreground/80 hover:text-foreground transition-colors",
      underline:
        "border-b border-b-foreground/30 hover:border-b-foreground/40 hover:border-b-foreground/100 hover:text-foreground transition-colors",
      hoverUnderline:
        "mb-[1px] hover:mb-0 hover:border-b hover:border-b-foreground/40 hover:border-b-foreground/100 hover:text-foreground transition-colors",
      dashed: "border-b border-dashed border-b-foreground/40 hover:border-b-foreground/100",
      ghost: "",
      outline: "border border-b-foreground/40 hover:border-b-foreground/100",
      "outline-rounded": "border rounded border-b-foreground/40 hover:border-b-foreground/100",
      secondary:
        "border-b hover:border-b-neutral-900 dark:hover:border-b-neutral-300 dark:border-b-neutral-600 border-b-neutral-600",
      primary: "text-primary border-b hover:border-b-primary",
    },
    size: {
      default: "pb-1/2",
      sm: "text-sm",
      lg: "text-lg",
      icon: "h-4 w-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type NextLinkType = typeof NextLink;
// type LinkProps = NextLinkType & VariantProps<typeof linkVariants>;
// type LinkProps = React.ComponentProps<typeof NextLink> & VariantProps<typeof linkVariants>;
export interface LinkProps extends React.ComponentPropsWithRef<NextLinkType>, VariantProps<typeof linkVariants> {}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ className, variant, size, ...props }, ref) => {
  return (
    <NextLink {...props} ref={ref} className={cn(linkVariants({ variant, size, className }))}>
      {props.children}
    </NextLink>
  );
});

Link.displayName = "LinkTag";

export { Link, linkVariants };

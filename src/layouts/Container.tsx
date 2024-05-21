import { createElement } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  type?: "main" | "div" | "section" | "article";
  verticalAlign?: "top" | "middle" | "bottom";
  className?: string;
  subType?: "section";
  subTypeClassName?: string;
  myPage?: boolean;
}

export default function Container({
  children,
  type = "main",
  verticalAlign = "top",
  className,
  subType,
  subTypeClassName,
  myPage,
}: React.PropsWithChildren<ContainerProps>) {
  return createElement(
    type,
    {
      className: cn(
        "w-full",
        type === "main" && "animate-in",
        verticalAlign === "middle" && "items-center",
        verticalAlign === "bottom" && "items-end",
        !myPage && "flex flex-grow max-w-8xl mt-16 mx-auto p-4 md:p-6 lg:p-8",
        className
      ),
    },
    subType ? createElement(subType, { className: cn("w-full", subTypeClassName) }, children) : children
  );
}

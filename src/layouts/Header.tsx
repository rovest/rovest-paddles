"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";
import LogoImage from "@/assets/images/logo/logo.webp";

import { Badge } from "@/components/ui/badge";

import AccountUI from "./AccountUI";

type LayoutFrontHeaderProps = {
  className?: string;
  headerClassName?: string;
};

export default function LayoutFrontHeader({ className, headerClassName }: LayoutFrontHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  const getLogoImage = () => {
    return LogoImage;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed z-10 w-full bg-accent",
        "transition-height duration-0 ease-in-out border-b",
        isScrolled ? "h-12" : "h-16",
        className
      )}
    >
      <header
        className={cn(
          "flex items-center justify-between flex-shrink w-full h-full px-4 mx-auto border-b max-w-8xl md:px-6 lg:px-8",
          headerClassName
        )}
      >
        <div className="flex items-center justify-start gap-2">
          <Link href={`/`} className={cn("w-10 h-10", isScrolled && "w-8 h-8")}>
            <Image src={getLogoImage()} alt="Logo image" width={40} height={40} priority />
          </Link>
          <Link href={`/`}>TITLE</Link>
          <Badge>MVP</Badge>
        </div>
        <div className="flex items-center gap-1">
          {/* <ThemeSwitcher /> */}
          <AccountUI isMiniSize={isScrolled} />
        </div>
      </header>
    </div>
  );
}

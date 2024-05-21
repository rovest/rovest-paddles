"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

type AccountUIProps = {
  isMiniSize: boolean;
};

export default function AccountUI({ isMiniSize }: AccountUIProps) {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return (
      <div>
        <UserButton />
      </div>
    );
  } else {
    return (
      <div className="flex items-center h-5 ml-2 gap-3 text-sm">
        <Link href={`/account/sign-in`} className="tracking-tight">
          로그인
        </Link>
        <Link href={`/account/sign-up`} className="tracking-tight hidden sm:block">
          회원가입
        </Link>
      </div>
    );
  }
}

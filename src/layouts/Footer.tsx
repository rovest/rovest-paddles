import { headers } from "next/headers";
import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, TwitterIcon } from "lucide-react";

// import { GA4ConsentComponent } from "@/modules/google/analytics";

import { cn } from "@/lib/utils";

import { Link } from "@/components/ui/link";

type LayoutFrontFooterProps = {
  className?: string;
  footerClassName?: string;
};

export default async function LayoutFrontFooter({ className, footerClassName }: LayoutFrontFooterProps) {
  const headerList = headers();
  return (
    <div className={cn("w-full mt-20 py-6 bg-accent/50 border-t", className)}>
      {/* {!isBot && <GA4ConsentComponent />} */}
      <footer className={cn("mx-auto max-w-8xl space-y-6 md:space-y-4 px-4 md:px-6 lg:px-8 py-4", footerClassName)}>
        <div className="flex items-center justify-between flex-col md:flex-row gap-4">
          <div className="flex-1 text-center md:text-left">
            <Link href={`/`} variant="ghost" className="tracking-wide font-semibold">
              TITLE
            </Link>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <nav className="flex-grow gap-4 flex flex-wrap justify-center md:justify-end md:gap-2">
              <Link href={`/`} className="text-sm">
                홈
              </Link>
              <Link href={`/customer-support`} className="text-sm">
                고객센터
              </Link>
              <Link href={`/customer-support/contact-us`} className="text-sm">
                문의
              </Link>
            </nav>
            <nav className="flex-grow gap-4 flex flex-wrap justify-center md:justify-end md:gap-2">
              <Link href={`/legal/terms-of-service`} className="text-sm">
                이용약관
              </Link>
              <Link href={`/legal/privacy-policy`} className="text-sm">
                개인정보처리방침
              </Link>
            </nav>
          </div>
        </div>

        {/* <div className="flex items-center gap-4 text-xs md:gap-2">
          <div className="flex items-center gap-1">
            <PhoneIcon className="w-4 h-4 text-gray-500" />
            <span className="text-gray-500 dark:text-gray-400">+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center gap-1">
            <MailIcon className="w-4 h-4 text-gray-500" />
            <Link
              className="underline text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Email
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <MapPinIcon className="w-4 h-4 text-gray-500" />
            <span className="text-gray-500 dark:text-gray-400">123 Street, City, Country</span>
          </div>
        </div> */}
        {/* <div className="flex items-center gap-4 text-2xl">
          <Link
            variant="ghost"
            href="#"
          >
            <FacebookIcon className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            variant="ghost"
            href="#"
          >
            <TwitterIcon className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            variant="ghost"
            href="#"
          >
            <InstagramIcon className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            variant="ghost"
            href="#"
          >
            <LinkedinIcon className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div> */}
        <div className="py-4 text-center md:text-left">
          <span className="text-xs text-foreground/80">© {new Date().getFullYear()} TITLE. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

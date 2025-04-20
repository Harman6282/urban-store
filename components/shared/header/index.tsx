import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME}`}
              width={48}
              height={48}
              priority={true}
            />
            <span className="hidden font-bold text-2xl ml-3 lg:block">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant={"ghost"}>
            <Link href={"/cart"}>
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href={"/sign-in"}>
              <UserIcon className="w-6 h-6" /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

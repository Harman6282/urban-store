import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EllipsisVertical, ShoppingCart } from "lucide-react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import UserButton from "./user-button";

const Menu = () => {
  return (
    <div className="flex jusitfy-end gap-3">
      {/*  this is for large screens */}
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <Button asChild variant={"ghost"}>
          <Link href={"/cart"}>
            <ShoppingCart className="w-6 h-6" />
          </Link>
        </Button>
        <UserButton />
      </nav>

      {/* this navbar is for mobile screens */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>

          <SheetContent className="flex flex-col items-start">
            <SheetTitle> Menu </SheetTitle>
            <ModeToggle />
            <Button asChild variant={"ghost"}>
              <Link href={"/cart"}>
                <ShoppingCart /> Cart
              </Link>
            </Button>

            <UserButton />

            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;

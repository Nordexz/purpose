import { buttonVariants } from "@/packages/ui";
import { cn } from "@/packages/ui/lib/utils";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-black/90 p-4">
      <div className=" container mx-auto flex w-full items-center gap-4">
        <Link
          href="/contracts"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Contracts
        </Link>
        <Link
          href="/offers"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Offers
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { FileType2, HelpCircle, MousePointerSquare } from "lucide-react";

import { buttonVariants } from "@/packages/ui";
import { cn } from "@/packages/ui/lib/utils";

function MarketplaceSingleNavigation() {
  return (
    <section className="text-secondary-main-dark mb-9">
      <div className="bg-background mx-auto grid max-w-[640px] grid-cols-2 place-items-center gap-4 rounded-xl p-2 sm:flex sm:items-center sm:justify-center sm:p-[6px] ">
        <a
          href="#overview"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "hover:text-secondary-main-dark hover:bg-card w-full max-w-[138px] px-[22px] text-base capitalize hover:shadow-md",
          )}
        >
          <div>
            <FileType2 className=" mr-2 h-4 w-4" />
          </div>
          Overview
        </a>

        <a
          href="#usage"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "hover:text-secondary-main-dark hover:bg-card w-full max-w-[138px] px-[22px]  text-base capitalize  hover:shadow-md",
          )}
        >
          <div>
            <MousePointerSquare className="mr-2 h-4 w-4" />
          </div>
          Usage
        </a>
        <a
          href="#support"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "hover:text-secondary-main-dark hover:bg-card w-full max-w-[138px] px-[22px]  text-base capitalize hover:shadow-md",
          )}
        >
          <div>
            <HelpCircle className="mr-2 h-4 w-4" />
          </div>
          Support
        </a>
      </div>
    </section>
  );
}

export default MarketplaceSingleNavigation;

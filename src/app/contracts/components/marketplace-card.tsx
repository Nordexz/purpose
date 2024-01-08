import { Dot, StarIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/packages/ui";
import type { Contract, Offer } from "@/server/db/schema";

interface ContractWithOffer extends Contract {
  offer: Offer | null;
}

export function MarketplaceCard({ contract }: { contract: ContractWithOffer }) {
  return (
    <Card className="w-full">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{contract.offer?.name ?? "shadcn/ui"}</CardTitle>
          <CardDescription>
            <span className="flex">
              {contract.offer?.author ?? "Author name"}
              <Dot />
              <span className="text-md font-semibold">
                {contract.offer?.status}
              </span>
            </span>
          </CardDescription>
          <CardDescription className="line-clamp-6 break-all">
            {contract.offer?.description ??
              `Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.`}
          </CardDescription>
        </div>
        <div className="bg-secondary text-secondary-foreground flex items-center rounded-md"></div>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground flex space-x-4 text-sm">
          <div className="flex items-center">TypeScript</div>
          <div className="flex items-center">
            <StarIcon className="mr-1 h-3 w-3" />
            20k
          </div>
          <div>Updated April 2023</div>
        </div>
      </CardContent>
    </Card>
  );
}

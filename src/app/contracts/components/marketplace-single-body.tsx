import React from "react";
import MarketplaceHeader from "./marketplace-single-header";
import MarketplaceSingleNavigation from "./marketplace-single-navigation";
import MarketplaceSingleOverview from "./marketplace-single-overview";
import { Card } from "@/packages/ui";
import MarketplaceSingleUsageInfo from "./marketplace-single-usage-info";
import MarketplaceSingleSupportInfo from "./marketplace-single-support-info";

export default function MarketplaceSingleBody() {
  return (
    <Card className="p-5">
      <MarketplaceHeader />
      <MarketplaceSingleNavigation />
      <MarketplaceSingleOverview />
      <MarketplaceSingleUsageInfo />
      <MarketplaceSingleSupportInfo />
    </Card>
  );
}

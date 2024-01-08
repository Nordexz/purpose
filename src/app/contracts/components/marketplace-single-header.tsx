import React from "react";
import { AlertCircle } from "lucide-react";

import { Card, Button } from "@/packages/ui";

const MarketplaceHeader = () => {
  return (
    <Card className="mb-3 flex p-6">
      <section className="mb-2 w-full sm:ml-[44px]">
        <div className="flex flex-col-reverse justify-between sm:flex-row sm:items-center">
          <h2 className="text-2xl font-medium">Title</h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="outline" className="uppercase ">
              Save to list
            </Button>
            <Button className="uppercase">View purchase options</Button>
          </div>
        </div>
        <h3 className="mb-3 text-sm">Version: version 1.0 </h3>
        <h3 className="mb-3 text-sm">Author: Author Name </h3>
        <p className="mb-3 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ducimus
          ratione, saepe explicabo inventore natus modi doloribus ab numquam
          error distinctio minus placeat deleniti quo ea unde libero obcaecati
          labore?
        </p>
        <div className="flex items-center gap-1">
          <a
            href={""}
            className="text-sm text-blue-600 visited:text-purple-600 hover:text-blue-800"
          >
            0 external reviews
          </a>
          <AlertCircle className="h-4 w-4 text-blue-600 visited:text-purple-600 hover:text-blue-800" />
        </div>
      </section>
    </Card>
  );
};

export default MarketplaceHeader;

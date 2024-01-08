import React from "react";
import { ExternalLink } from "lucide-react";

const MarketplaceSingleUsageInfo = () => {
  return (
    <section
      id="usage"
      className="text-secondary-main-dark mb-9 rounded-lg border p-6"
    >
      <h2 className="mb-6 text-2xl font-medium leading-9">Usage Information</h2>
      <h2 className="mb-3 text-xl font-bold">Fulfillment Options</h2>
      <h3 className="text-base font-bold leading-5">
        Software as a Service (SaaS)
      </h3>
      <p className="text-sm">
        Software as a service is a delivery model for software applications
        whereby the vendor hosts and operates the application over the Internet.
      </p>
      <p className="mb-6 text-sm">
        Customers pay for using the software without owning the underlying
        infrastructure. With SaaS Contracts, customers will pay for usage
        through their AWS bill.
      </p>
      <h2 className="text-xl font-bold leading-7">
        End User License Agreement
      </h2>
      <p className="text-sm leading-5">
        By subscribing to this product you agree to terms and conditions
        outlined in the product
      </p>
      <div className="flex items-center gap-1">
        <a
          href="#/"
          className="truncate text-sm leading-5 text-blue-600  visited:text-purple-600 hover:text-blue-800"
        >
          End User License Agreement (EULA)
        </a>
        <div>
          <ExternalLink className="text-accent h-4 w-4" />
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSingleUsageInfo;

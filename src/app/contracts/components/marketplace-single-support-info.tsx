import React from "react";

const MarketplaceSingleSupportInfo = () => {
  return (
    <section
      id="support"
      className="text-secondary-main-dark rounded-lg border p-6"
    >
      <h2 className="mb-3 text-2xl font-bold leading-9">Support Information</h2>
      <div>
        <h3 className="mb-1 text-base font-bold leading-5">Title</h3>
        <p className="text-sm leading-5">
          Contact our knowledgable Support Engineers via email, live chat, or
          in-app messages
        </p>

        <a
          href="/#"
          target="_blank"
          className="mb-3 block truncate text-blue-600 visited:text-purple-600 hover:text-blue-800"
        >
          https://www.amazon.com/support/
        </a>
      </div>

      <div>
        <h3 className="text-base font-bold leading-5">Refund Policy</h3>

        <a
          href="/#"
          target="_blank"
          className="block truncate text-blue-600 visited:text-purple-600 hover:text-blue-800"
        >
          https://www.amazon.com/support/
        </a>
      </div>
    </section>
  );
};

export default MarketplaceSingleSupportInfo;

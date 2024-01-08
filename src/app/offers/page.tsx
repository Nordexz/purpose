"use client";

import { CreateOffer } from "./components/create-offer";
import { OfferCard } from "./components/offer-card";
import { Card, Separator } from "@/packages/ui";
import { api } from "@/trpc/react";

export default function OffersPage() {
  const { data } = api.offers.getAll.useQuery();

  return (
    <div className="min-h-full w-full p-2">
      <Card className="flex h-[89vh] w-full flex-col p-6 overflow-x-scroll">
        <div className="flex justify-between">
          <h2 className="ml-4 text-left text-2xl font-bold tracking-tight">
            Offers page
          </h2>
          <CreateOffer />
        </div>
        <Separator className="my-4" />

        {!data?.length ? (
          <div className="flex h-full items-center justify-center">
            <h2 className="ml-4 text-left text-4xl font-thin">
              Posts not found
            </h2>
          </div>
        ) : (
          <div className="mt-4 space-y-2 ">
            {!!data?.length &&
              data.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
          </div>
        )}
      </Card>
    </div>
  );
}

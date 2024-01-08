"use client";

import React, { useState } from "react";
import { MarketplaceCard } from "../components/marketplace-card";
import { Button } from "../../../packages/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/packages/ui";
import { api } from "@/trpc/react";

export default function Page() {
  const { data: offers } = api.offers.getAll.useQuery({ status: "PREPEARING" });
  const [currentId, setCurrentId] = useState("");
  const context = api.useUtils();

  const { data: contracts } = api.contracts.getAll.useQuery();
  const { mutate: createContract } = api.contracts.create.useMutation();

  return (
    <div className="flex flex-col w-full gap-3 py-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-60">Create new contract</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select offer</DialogTitle>
            <Select onValueChange={(v) => setCurrentId(v)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Offers" />
              </SelectTrigger>
              <SelectContent>
                {offers?.length &&
                  offers.map((offer) => (
                    <SelectItem value={offer.id} key={offer.id}>
                      {offer.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>

            <DialogDescription></DialogDescription>
          </DialogHeader>
          <Button
            disabled={!currentId}
            onClick={() => {
              createContract(
                { offerId: currentId },
                { onSuccess: () => void context.contracts.getAll.invalidate() },
              );
            }}
          >
            Sign contract
          </Button>
        </DialogContent>
      </Dialog>

      {!!contracts?.length &&
        contracts.map((contract) => (
          <MarketplaceCard key={contract.id} contract={contract} />
        ))}

      {/* <Button className="mx-auto w-[320px]">Show More</Button> */}
    </div>
  );
}

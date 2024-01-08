import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Textarea,
} from "@/packages/ui";
import { Dot, Pencil, StarIcon, Trash2 } from "lucide-react";
import { useState } from "react";

import type { Offer } from "@/server/db/schema";
import { api } from "@/trpc/react";

const useDeleteOffer = () =>
  api.offers.delete.useMutation();

export function OfferCard({ offer }: { offer: Offer }) {
  const { mutate: deleteOffer } = useDeleteOffer();
  const context = api.useUtils();

  return (
    <Card className="w-full">
      <CardHeader className="grid grid-cols-[1fr_80px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{offer.name ?? "shadcn/ui"}</CardTitle>
          <CardDescription>
            <span className="flex">
              {offer.author ?? "Author name"}
              <Dot />
              <span className="text-md font-semibold">{offer.status}</span>
              <Dot />
              <span>{`Duration: ${offer.duration} seconds`}</span>
            </span>
          </CardDescription>
          <CardDescription className="line-clamp-6 break-all">
            {offer.description ??
              `Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.`}
          </CardDescription>
        </div>
        <div className="bg-secondary text-secondary-foreground flex items-center gap-2 rounded-md">
          <EditPost offer={offer} />
          <Button
            onClick={() =>
              deleteOffer(
                { id: offer.id },
                { onSuccess: () => void context.offers.getAll.invalidate() },
              )
            }
            className="w-10 flex-shrink-0 p-0"
          >
            <Trash2 color="#fff" />
          </Button>
        </div>
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

const useEditOffer = () =>
  api.offers.edit.useMutation();

export const EditPost = ({ offer }: { offer: Offer }) => {
  const { mutate: edit } = useEditOffer();
  const context = api.useUtils();

  const [editedOffer, setEditedOffer] = useState(offer);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          disabled={offer.status !== "PREPEARING"}
          className="flex w-10 max-w-[150px] flex-shrink-0 p-0 text-white"
        >
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit offer</DialogTitle>
          <div className="flex flex-col gap-2 pt-2">
            <Input
              onChange={(e) =>
                setEditedOffer((prevOffer) => ({
                  ...prevOffer,
                  name: e.target.value,
                }))
              }
              placeholder="Title"
              value={editedOffer.name}
            />
            <Input
              onChange={(e) =>
                setEditedOffer((prevOffer) => ({
                  ...prevOffer,
                  author: e.target.value,
                }))
              }
              placeholder="Author"
              value={editedOffer.author}
            />
            <Textarea
              onChange={(e) =>
                setEditedOffer((prevOffer) => ({
                  ...prevOffer,
                  description: e.target.value,
                }))
              }
              className="min-h-[150px] resize-none"
              placeholder="Description"
              value={editedOffer.description}
            />
            <Button
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { status, ...edited } = editedOffer;
                edit(edited, {
                  onSuccess: () => void context.offers.getAll.invalidate(),
                });
                setIsOpen(false);
              }}
              className="mt-2"
            >
              Edit
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

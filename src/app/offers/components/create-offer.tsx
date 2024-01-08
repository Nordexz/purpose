import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Textarea,
  Button,
} from "@/packages/ui";
import { api } from "@/trpc/react";
import type { Offer } from "@/server/db/schema";

const useCreateOffer = () =>
  api.offers.create.useMutation();

export const CreateOffer = ({}) => {
  const { mutate: create } = useCreateOffer();

  const [offer, setOffer] = useState<Offer>({
    id: "",
    name: "",
    description: "",
    duration: 0,
    author: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "PREPEARING",
  });
  const [isOpen, setIsOpen] = useState(false);
  const context = api.useUtils();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full max-w-[150px] text-white">
          Add new offer
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new offer</DialogTitle>
          <div className="flex flex-col gap-2 pt-2">
            <Input
              onChange={(e) =>
                setOffer((prevOffer) => ({
                  ...prevOffer,
                  name: e.target.value,
                }))
              }
              placeholder="Title"
            />
            <Input
              onChange={(e) =>
                setOffer((prevOffer) => ({
                  ...prevOffer,
                  author: e.target.value,
                }))
              }
              placeholder="Author"
            />
            <Textarea
              onChange={(e) =>
                setOffer((prevOffer) => ({
                  ...prevOffer,
                  description: e.target.value,
                }))
              }
              className="min-h-[150px] resize-none"
              placeholder="Description"
            />
            <div className="flex items-center gap-3">
              <Input
                onChange={(e) =>
                  setOffer((prevOffer) => ({
                    ...prevOffer,
                    duration: Number(e.target.value),
                  }))
                }
                type="number"
                placeholder="Contract duration"
              />
              Seconds
            </div>

            <Button
              onClick={() => {
                create(
                  {
                    name: offer.name,
                    description: offer.description,
                    author: offer.author,
                    duration: offer.duration,
                  },
                  {
                    onSuccess: () => {
                      setIsOpen(false);
                      return void context.offers.getAll.invalidate();
                    },
                  },
                );
              }}
              className="mt-2"
            >
              Create
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

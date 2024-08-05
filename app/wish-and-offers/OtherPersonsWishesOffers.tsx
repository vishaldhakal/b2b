// OtherPersonsWishesOffers.tsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";
import { Wish, Offer, mockWishes } from "./types";
import { MakeOfferForm } from "./MakeOfferForm";

export const OtherPersonsWishesOffers: React.FC = () => {
  const [selectedWish, setSelectedWish] = useState<Wish | null>(null);
  const [showOfferForm, setShowOfferForm] = useState(false);

  const handleMakeOffer = (wish: Wish) => {
    setSelectedWish(wish);
    setShowOfferForm(true);
  };

  const renderWish = (item: Wish | Offer) => (
    <Card key={item.id} className="mb-4">
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.userName}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{item.description}</p>
        <p className="mt-2">Category: {item.category}</p>
        {"userId" in item && (
          <Button
            onClick={() => handleMakeOffer(item as Wish)}
            className="mt-4"
          >
            Make an Offer
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Want to make an Offer?</h2>
      {mockWishes.map(renderWish)}
      {showOfferForm && selectedWish && (
        <MakeOfferForm
          wish={selectedWish}
          onClose={() => setShowOfferForm(false)}
        />
      )}
    </div>
  );
};

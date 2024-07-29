import React, { useState, useMemo } from "react";
import ItemColumn from "./ItemColumn";
import MatchingArea from "./MatchingArea";
import ProbableMatchesColumn from "./ProbableMatchesColumn";
import CreateItemModal from "./CreateItemModal";
import { Matches, WishOfferItem } from "../../../../types/wish";
import { offers } from "../../../../mock-data/offer";
import { wishes } from "../../../../mock-data/wishes";
import { findMatches } from "../../../lib/findMatches";
import { Button } from "../../ui/button";

interface MatchingPageProps {
  isOfferPage: boolean;
}

const MatchingPage: React.FC<MatchingPageProps> = ({ isOfferPage }) => {
  const [selectedItem, setSelectedItem] = useState<WishOfferItem | null>(null);
  const [items, setItems] = useState(isOfferPage ? offers : wishes);
  const matchItems = isOfferPage ? wishes : offers;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { exactMatches, probableMatches } = useMemo<Matches>(
    () =>
      selectedItem
        ? findMatches(selectedItem, matchItems)
        : { exactMatches: [], probableMatches: [] },
    [selectedItem, matchItems]
  );

  const handleCreateItem = (newItem: WishOfferItem) => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-start">
          {isOfferPage
            ? "Your offers and matching wishes"
            : "Your wishes and matching offers"}
        </h1>
        <Button onClick={() => setIsModalOpen(true)}>
          {isOfferPage ? "Create Offer" : "Create Wish"}
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ItemColumn
          items={items}
          selectedItem={selectedItem}
          onItemSelect={setSelectedItem}
          title={isOfferPage ? "Select an Offer" : "Select a Wish"}
          selectedColor={isOfferPage ? "green" : "blue"}
        />
        <MatchingArea
          selectedItem={selectedItem}
          exactMatches={exactMatches}
          isOffer={isOfferPage}
        />
        <ProbableMatchesColumn
          selectedItem={selectedItem}
          probableMatches={probableMatches}
          isOffer={isOfferPage}
        />
      </div>
      <CreateItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isOfferPage={isOfferPage}
        onSubmit={handleCreateItem}
      />
    </div>
  );
};

export default MatchingPage;

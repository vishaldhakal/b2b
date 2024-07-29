import { Matches, WishOfferItem } from "../../types/wish";

export const findMatches = (
  selectedItem: WishOfferItem,
  items: WishOfferItem[]
): Matches => {
  const exactMatches = items.filter(
    (item) =>
      item.category === selectedItem.category && item.type === selectedItem.type
  );
  const probableMatches = items
    .filter(
      (item) =>
        item.category === selectedItem.category ||
        item.type === selectedItem.type
    )
    .slice(0, 3);
  return { exactMatches, probableMatches };
};

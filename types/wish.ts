export interface WishOfferItem {
  id: number;
  title: string;
  category: string;
  type: string;
}

export interface Matches {
  exactMatches: WishOfferItem[];
  probableMatches: WishOfferItem[];
}

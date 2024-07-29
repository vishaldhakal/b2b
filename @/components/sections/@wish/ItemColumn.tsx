import React from "react";
import Item from "./Item";
import { WishOfferItem } from "../../../../types/wish";

interface ItemColumnProps {
  items: WishOfferItem[];
  selectedItem: WishOfferItem | null;
  onItemSelect: (item: WishOfferItem) => void;
  title: string;
  selectedColor: string;
}

const ItemColumn: React.FC<ItemColumnProps> = ({
  items,
  selectedItem,
  onItemSelect,
  title,
  selectedColor,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="space-y-4">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          isSelected={selectedItem?.id === item.id}
          onClick={() => onItemSelect(item)}
          selectedColor={selectedColor}
        />
      ))}
    </div>
  </div>
);

export default ItemColumn;

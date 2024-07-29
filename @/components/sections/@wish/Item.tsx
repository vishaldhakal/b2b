import React from "react";
import { motion } from "framer-motion";
import { WishOfferItem } from "../../../../types/wish";

interface ItemProps {
  item: WishOfferItem;
  isSelected: boolean;
  onClick: () => void;
  selectedColor?: string;
}

const Item: React.FC<ItemProps> = ({
  item,
  isSelected,
  onClick,
  selectedColor = "blue",
}) => (
  <motion.div
    className={`p-4 rounded-lg cursor-pointer ${
      isSelected
        ? `bg-${selectedColor}-100 border-2 border-${selectedColor}-500`
        : "bg-gray-100 hover:bg-gray-200"
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="font-semibold">{item.title}</h3>
    <p className="text-sm text-gray-600">
      {item.category} - {item.type}
    </p>
  </motion.div>
);

export default Item;

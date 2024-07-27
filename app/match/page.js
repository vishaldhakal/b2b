"use client";
import { useState, useEffect } from "react";

const wishes = [
  {
    id: 1,
    type: "Product",
    category: "Electronics",
    title: "Industrial 3D Printer",
    description:
      "Looking for a high-quality industrial 3D printer capable of printing large objects with various materials.",
    quantity: 2,
    budget: 75000,
    deadline: "2024-08-15",
  },
  {
    id: 2,
    type: "Service",
    category: "Consulting",
    title: "Supply Chain Optimization",
    description:
      "Seeking a consultant to help optimize our international supply chain operations and reduce costs.",
    duration: "3 months",
    budget: 30000,
    deadline: "2024-09-01",
  },
];

const offers = [
  {
    id: 1,
    type: "Product",
    category: "Electronics",
    title: "High-Quality Industrial 3D Printer",
    description:
      "Offering a high-quality industrial 3D printer capable of printing large objects with various materials.",
    quantity: 2,
    price: 70000,
    deadline: "2024-08-30",
  },
  {
    id: 2,
    type: "Service",
    category: "Consulting",
    title: "Supply Chain Optimization Consulting",
    description:
      "Offering consulting services to optimize your international supply chain operations and reduce costs.",
    duration: "3 months",
    price: 25000,
    deadline: "2024-09-15",
  },
];

function WishOfferMatch() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const findMatches = () => {
      let tempMatches = [];

      wishes.forEach((wish) => {
        offers.forEach((offer) => {
          if (
            wish.type === offer.type &&
            wish.category === offer.category &&
            ((wish.quantity &&
              offer.quantity &&
              wish.quantity === offer.quantity) ||
              (wish.duration &&
                offer.duration &&
                wish.duration === offer.duration))
          ) {
            tempMatches.push({
              wish,
              offer,
            });
          }
        });
      });

      setMatches(tempMatches);
    };

    findMatches();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Wish and Offer Matches</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map(({ wish, offer }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                  {wish.type}
                </span>
                <h3 className="text-xl font-semibold mb-2">{wish.title}</h3>
                <p className="text-gray-600 mb-4">{wish.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <p>
                    <strong>Category:</strong> {wish.category}
                  </p>
                  {wish.quantity && (
                    <p>
                      <strong>Quantity:</strong> {wish.quantity}
                    </p>
                  )}
                  {wish.duration && (
                    <p>
                      <strong>Duration:</strong> {wish.duration}
                    </p>
                  )}
                  <p>
                    <strong>Budget:</strong> ${wish.budget}
                  </p>
                  <p>
                    <strong>Required By:</strong> {wish.deadline}
                  </p>
                </div>
              </div>
              <div className="mb-4 border-t border-gray-200 pt-4">
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                  {offer.type}
                </span>
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <p>
                    <strong>Category:</strong> {offer.category}
                  </p>
                  {offer.quantity && (
                    <p>
                      <strong>Quantity:</strong> {offer.quantity}
                    </p>
                  )}
                  {offer.duration && (
                    <p>
                      <strong>Duration:</strong> {offer.duration}
                    </p>
                  )}
                  <p>
                    <strong>Price:</strong> ${offer.price}
                  </p>
                  <p>
                    <strong>Offer Valid Until:</strong> {offer.deadline}
                  </p>
                </div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>

      {matches.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No matches found.</p>
      )}
    </main>
  );
}

export default WishOfferMatch;

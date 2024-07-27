"use client";
import { useState } from "react";

function Wish() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Create a New Wish</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="wish-type"
                  >
                    Wish Type
                  </label>
                  <select
                    id="wish-type"
                    name="wish-type"
                    className="w-full p-2 border rounded"
                  >
                    <option>Product</option>
                    <option>Service</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    className="w-full p-2 border rounded"
                    placeholder="e.g., Electronics, Consulting"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full p-2 border rounded"
                    placeholder="Brief description of your wish"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="description"
                  >
                    Detailed Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    className="w-full p-2 border rounded"
                    placeholder="Provide more details about your requirements"
                  ></textarea>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="quantity"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    className="w-full p-2 border rounded"
                    placeholder="Required quantity"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="budget"
                  >
                    Expected Budget
                  </label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    className="w-full p-2 border rounded"
                    placeholder="Your budget in $"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="deadline"
                  >
                    Required By
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Post Wish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <section>
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-wrap gap-4">
            <select className="p-2 border rounded">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Machinery</option>
              <option>Consulting</option>
              <option>Raw Materials</option>
            </select>
            <select className="p-2 border rounded">
              <option>All Types</option>
              <option>Products</option>
              <option>Services</option>
            </select>
            <input
              type="text"
              placeholder="Search wishes..."
              className="p-2 border rounded flex-grow"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Search
            </button>
            <button
              onClick={toggleModal}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Create a New Wish
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                Product
              </span>
              <h3 className="text-xl font-semibold mb-2">
                Industrial 3D Printer
              </h3>
              <p className="text-gray-600 mb-4">
                Looking for a high-quality industrial 3D printer capable of
                printing large objects with various materials.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p>
                  <strong>Quantity:</strong> 2
                </p>
                <p>
                  <strong>Budget:</strong> $50,000 - $75,000
                </p>
                <p>
                  <strong>Required By:</strong> August 15, 2024
                </p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
                Respond to Wish
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                Service
              </span>
              <h3 className="text-xl font-semibold mb-2">
                Supply Chain Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                Seeking a consultant to help optimize our international supply
                chain operations and reduce costs.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p>
                  <strong>Duration:</strong> 3 months
                </p>
                <p>
                  <strong>Budget:</strong> $20,000 - $30,000
                </p>
                <p>
                  <strong>Required By:</strong> September 1, 2024
                </p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
                Respond to Wish
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
            >
              1
            </a>
            <a
              href="#"
              className="px-3 py-2 border-t border-b border-gray-300 bg-white text-blue-600 font-medium hover:bg-blue-50"
            >
              2
            </a>
            <a
              href="#"
              className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
            >
              3
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
            >
              Next
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}

export default Wish;

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main class="container mx-auto px-4 py-8">
        <section class="bg-[#639190] text-white rounded-lg p-8 mb-8">
          <h2 class="text-4xl font-bold mb-4">
            Connect, Collaborate, and Grow Your Business
          </h2>
          <p class="text-xl mb-6">
            Join our B2B networking platform to find the perfect business
            matches and opportunities.
          </p>
          <button class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">Wish</h3>
            <p class="text-gray-600 mb-4">
              Post your product or service requirements and find potential
              suppliers.
            </p>
            <a href="#" class="text-blue-600 hover:underline">
              Create a Wish &rarr;
            </a>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">Offer</h3>
            <p class="text-gray-600 mb-4">
              Showcase your products or services to potential buyers in the
              network.
            </p>
            <a href="#" class="text-blue-600 hover:underline">
              Create an Offer &rarr;
            </a>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">Meetings</h3>
            <p class="text-gray-600 mb-4">
              Schedule and manage B2B meetings with potential partners.
            </p>
            <a href="#" class="text-blue-600 hover:underline">
              Book a Meeting &rarr;
            </a>
          </div>
        </section>

        <section class="bg-white p-8 rounded-lg shadow mb-12">
          <h2 class="text-2xl font-bold mb-4">District B2B Networking</h2>
          <p class="text-gray-600 mb-6">
            Explore business opportunities in specific districts and regions.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button class="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
              Biratnagar
            </button>
            <button class="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
              Itahari
            </button>
            <button class="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
              Birtamod
            </button>
            <button class="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
              Jhapa
            </button>
          </div>
        </section>

        <section class="bg-white p-8 rounded-lg shadow">
          <h2 class="text-2xl font-bold mb-4">Supply Chain Visualization</h2>
          <p class="text-gray-600 mb-6">
            Understand and optimize your supply chain network.
          </p>
          <div class="bg-gray-100 p-4 rounded-lg">
            <p class="text-center text-gray-500">
              Supply Chain Visualization Tool
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

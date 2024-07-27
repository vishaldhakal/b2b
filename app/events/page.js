function Events() {
  return (
    <main class="container mx-auto px-4 py-8 max-w-7xl">
      <section class="rounded-lg shadow mb-8">
        <div class="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search locations..."
            class="flex-grow p-4 rounded bg-[#f8f9fa]"
          />
          <select class="p-4 border rounded">
            <option>All Districts</option>
            <option>Biratnagar</option>
            <option>Itahari</option>
            <option>Birtamod</option>
            <option>Jhapa</option>
          </select>
          <button class="bg-[#639190] text-white px-4 py-2 rounded hover:bg-blue-700">
            Search
          </button>
        </div>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Birat Expo 2024 Premises"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Birat Expo 2024 Premises</h3>
            <p class="text-gray-600 mb-4">Biratnagar, Morang</p>
            <ul class="text-sm text-gray-600 mb-4">
              <li>Capacity: 500 people</li>
              <li>Amenities: Wi-Fi, Projector, Catering</li>
            </ul>
            <button class="bg-[#639190] text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Book This Location
            </button>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Biratnagar CIM Secretariat Building"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              Biratnagar CIM Secretariat Building
            </h3>
            <p class="text-gray-600 mb-4">Biratnagar, Morang</p>
            <ul class="text-sm text-gray-600 mb-4">
              <li>Capacity: 200 people</li>
              <li>Amenities: Wi-Fi, Conference Rooms</li>
            </ul>
            <button class="bg-[#639190] text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Book This Location
            </button>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Itahari Conference Center"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              Itahari Conference Center
            </h3>
            <p class="text-gray-600 mb-4">Itahari, Sunsari</p>
            <ul class="text-sm text-gray-600 mb-4">
              <li>Capacity: 300 people</li>
              <li>Amenities: Wi-Fi, AV Equipment, Parking</li>
            </ul>
            <button class="bg-[#639190] text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Book This Location
            </button>
          </div>
        </div>
      </section>
      <section class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl font-bold mb-4">Booking Information</h2>
        <p class="text-gray-600 mb-4">
          To book a meeting location, please follow these steps:
        </p>
        <ol class="list-decimal list-inside text-gray-600">
          <li class="mb-2">
            Select your preferred location from the options above.
          </li>
          <li class="mb-2">Click on the "Book This Location" button.</li>
          <li class="mb-2">Choose your desired date and time slot.</li>
          <li class="mb-2">Fill in the required details for your meeting.</li>
          <li class="mb-2">
            Confirm your booking and make any necessary payments.
          </li>
        </ol>
        <p class="mt-4 text-gray-600">
          For any assistance or special requests, please contact our support
          team.
        </p>
      </section>
    </main>
  );
}

export default Events;

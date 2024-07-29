function Events() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <section className="rounded-lg shadow mb-8">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search locations..."
            className="flex-grow p-4 rounded bg-[#f8f9fa]"
          />
          <select className="p-4 border rounded">
            <option>All Districts</option>
            <option>Biratnagar</option>
            <option>Itahari</option>
            <option>Birtamod</option>
            <option>Jhapa</option>
          </select>
          <button className="bg-[#639190] text-white px-4 py-2 rounded hover:bg-blue-700">
            Search
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Birat Expo 2024 Premises"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Birat Expo 2024 Premises
            </h3>
            <p className="text-gray-600 mb-4">Biratnagar, Morang</p>
            <ul className="text-sm text-gray-600 mb-4">
              <li>Capacity: 500 people</li>
              <li>Amenities: Wi-Fi, Projector, Catering</li>
            </ul>
            <button className="bg-[#639190] text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Book This Location
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Biratnagar CIM Secretariat Building"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Biratnagar CIM Secretariat Building
            </h3>
            <p className="text-gray-600 mb-4">Biratnagar, Morang</p>
            <ul className="text-sm text-gray-600 mb-4">
              <li>Capacity: 200 people</li>
              <li>Amenities: Wi-Fi, Conference Rooms</li>
            </ul>
            <button className="bg-[#639190] text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Book This Location
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Itahari Conference Center"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Itahari Conference Center
            </h3>
            <p className="text-gray-600 mb-4">Itahari, Sunsari</p>
            <ul className="text-sm text-gray-600 mb-4">
              <li>Capacity: 300 people</li>
              <li>Amenities: Wi-Fi, AV Equipment, Parking</li>
            </ul>
            <button className="bg-[#639190] text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Book This Location
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Booking Information</h2>
        <p className="text-gray-600 mb-4">
          To book a meeting location, please follow these steps:
        </p>
        <ol className="list-decimal list-inside text-gray-600">
          <li className="mb-2">
            Select your preferred location from the options above.
          </li>
          <li className="mb-2">Click on the "Book This Location" button.</li>
          <li className="mb-2">Choose your desired date and time slot.</li>
          <li className="mb-2">
            Fill in the required details for your meeting.
          </li>
          <li className="mb-2">
            Confirm your booking and make any necessary payments.
          </li>
        </ol>
        <p className="mt-4 text-gray-600">
          For any assistance or special requests, please contact our support
          team.
        </p>
      </section>
    </main>
  );
}

export default Events;

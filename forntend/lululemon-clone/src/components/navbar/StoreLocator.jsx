import React, { useState } from "react";

const StoreLocator = () => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Call API to fetch store locations
    console.log("Searching for stores near:", location);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Find a Store</h2>
      <input
        type="text"
        placeholder="Enter your location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
      />
      <button
        onClick={handleSearch}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default StoreLocator;

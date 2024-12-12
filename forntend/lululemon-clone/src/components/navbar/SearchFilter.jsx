import React, { useState } from "react";

const SearchFilter = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    price: "all",
    size: "all",
    color: "all",
  });

  const handleSearch = () => {
    // Call API with query and filters
    console.log("Searching for:", query, filters);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg mb-4"
      />
      <div className="flex space-x-4">
        <select
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Prices</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
        <select
          onChange={(e) => setFilters({ ...filters, size: e.target.value })}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Sizes</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
        <select
          onChange={(e) => setFilters({ ...filters, color: e.target.value })}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Colors</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>
      </div>
      <button
        onClick={handleSearch}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;


'use client';

import Image from "next/image";
import { useState } from "react";

type Plant = {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  season: string[];
  availability: boolean;
  rating: number;
};

type FilterOptions = {
  category: string;
  priceRange: [number, number];
  season: string;
  searchQuery: string;
};

const plants: Plant[] = [
  { id: "1", name: "Tomato", image: "/tomato.jpg", price: 99, category: "Climbers", season: ["Summer", "Monsoon"], availability: true, rating: 4.5 },
  { id: "2", name: "Brinjal", image: "/brinjal.jpg", price: 89, category: "Climbers", season: ["Summer", "Winter"], availability: true, rating: 4.2 },
  { id: "3", name: "Chili", image: "/chili.jpg", price: 79, category: "Climbers", season: ["Summer"], availability: false, rating: 4.0 },
  { id: "4", name: "Spinach", image: "/spinach.jpg", price: 59, category: "Leafy Vegetables", season: ["Winter"], availability: true, rating: 4.7 },
  { id: "5", name: "Carrot", image: "/carrot.jpg", price: 69, category: "Root Vegetables", season: ["Winter"], availability: true, rating: 4.3 },
  { id: "6", name: "Beetroot", image: "/beetroot.jpg", price: 89, category: "Root Vegetables", season: ["Winter"], availability: true, rating: 4.1 },
  { id: "7", name: "Cucumber", image: "/cucumber.jpg", price: 109, category: "Climbers", season: ["Summer"], availability: false, rating: 3.9 },
  { id: "8", name: "Lettuce", image: "/lettuce.jpg", price: 119, category: "Leafy Vegetables", season: ["Winter"], availability: true, rating: 4.8 },
];

const categories = ["All", "Leafy Vegetables", "Root Vegetables", "Climbers"];
const seasons = ["All", "Summer", "Winter", "Monsoon"];
const priceRanges = [
  { label: "All", value: [0, 200] },
  { label: "Under ₹100", value: [0, 99] },
  { label: "₹100-₹150", value: [100, 150] },
  { label: "Over ₹150", value: [151, 200] },
];

export default function ProductCatalog() {
  const [filters, setFilters] = useState<FilterOptions>({
    category: "All",
    priceRange: [0, 200],
    season: "All",
    searchQuery: "",
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredPlants = plants.filter((plant) => {
    const matchesCategory = filters.category === "All" || plant.category === filters.category;
    const matchesPrice = plant.price >= filters.priceRange[0] && plant.price <= filters.priceRange[1];
    const matchesSeason = filters.season === "All" || plant.season.includes(filters.season);
    const matchesSearch = plant.name.toLowerCase().includes(filters.searchQuery.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesSeason && matchesSearch;
  });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Plant Collection</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover premium quality saplings for your home garden
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96 text-black">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search plants..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={filters.searchQuery}
                onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
              />
            </div>

            {/* Mobile Filter Button */}
            <button
              type="button"
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 text-black rounded-lg bg-white shadow-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex gap-4 text-black">
              <select
                className="px-3 py-2 border border-gray-300 text-black rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={filters.season}
                onChange={(e) => setFilters({ ...filters, season: e.target.value })}
              >
                {seasons.map((season) => (
                  <option key={season} value={season}>{season}</option>
                ))}
              </select>

              <select
                className="px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={filters.priceRange.join(",")}
                onChange={(e) => {
                  const [min, max] = e.target.value.split(",").map(Number);
                  setFilters({ ...filters, priceRange: [min, max] });
                }}
              >
                {priceRanges.map((range) => (
                  <option key={range.label} value={range.value.join(",")}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filters Overlay */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto p-4 bg-white sm:p-6 md:hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">Filters</h3>
              <button
                type="button"
                className="-mr-2 p-2 text-gray-400 hover:text-gray-500"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`mobile-category-${category}`}
                        name="category"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                        checked={filters.category === category}
                        onChange={() => setFilters({ ...filters, category })}
                      />
                      <label htmlFor={`mobile-category-${category}`} className="ml-3 text-gray-700">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Growing Season</h4>
                <div className="space-y-2">
                  {seasons.map((season) => (
                    <div key={season} className="flex items-center">
                      <input
                        id={`mobile-season-${season}`}
                        name="season"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                        checked={filters.season === season}
                        onChange={() => setFilters({ ...filters, season })}
                      />
                      <label htmlFor={`mobile-season-${season}`} className="ml-3 text-gray-700">
                        {season}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range.label} className="flex items-center">
                      <input
                        id={`mobile-price-${range.label}`}
                        name="price"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                        checked={filters.priceRange[0] === range.value[0] && filters.priceRange[1] === range.value[1]}
                        onChange={() => setFilters({ ...filters, priceRange: range.value as [number, number] })}
                      />
                      <label htmlFor={`mobile-price-${range.label}`} className="ml-3 text-gray-700">
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => setMobileFiltersOpen(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant) => (
              <div key={plant.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-xl bg-gray-200 h-64 relative">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!plant.availability && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-medium">Out of Stock</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{plant.name}</h3>
                      <p className="text-sm text-gray-500">{plant.category}</p>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-600">{plant.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold text-green-600">₹{plant.price}</p>
                      <p className="text-xs text-gray-500">{plant.season.join(", ")} season</p>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-lg font-medium ${plant.availability ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'} transition-colors`}
                      disabled={!plant.availability}
                    >
                      {plant.availability ? 'Add to Cart' : 'Notify Me'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No plants found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
              <button
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                onClick={() => setFilters({
                  category: "All",
                  priceRange: [0, 200],
                  season: "All",
                  searchQuery: "",
                })}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
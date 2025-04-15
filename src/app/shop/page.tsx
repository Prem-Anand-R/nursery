'use client';

import { useState } from 'react';
import { PLANTS, CATEGORIES, SEASONS } from '@/constants/data';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);

  const filteredPlants = PLANTS.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plant.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || plant.category === selectedCategory;
    const matchesSeason = selectedSeason === 'all' || plant.season === selectedSeason;
    const matchesPrice = parseInt(plant.price.replace('₹', '')) >= priceRange[0] && 
                        parseInt(plant.price.replace('₹', '')) <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesSeason && matchesPrice;
  });

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Plants</h1>
        
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search plants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">All Categories</option>
                {CATEGORIES.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Season Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Growing Season
              </label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">All Seasons</option>
                {SEASONS.map(season => (
                  <option key={season.id} value={season.id}>
                    {season.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range (₹{priceRange[0]} - ₹{priceRange[1]})
              </label>
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredPlants.length} of {PLANTS.length} plants
          </p>
        </div>

        {/* Plant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPlants.map((plant) => (
            <Card
              key={plant.id}
              title={plant.name}
              image={plant.image}
              price={plant.price}
              description={plant.description}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-gray-600">{plant.rating} ({plant.reviews} reviews)</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  plant.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {plant.availability ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <Button 
                variant="primary" 
                size="md" 
                className="w-full"
                disabled={!plant.availability}
              >
                {plant.availability ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 
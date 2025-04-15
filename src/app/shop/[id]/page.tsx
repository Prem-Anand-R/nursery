'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PLANTS } from '@/constants/data';
import Button from '@/components/ui/Button';


interface PageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: PageProps) {
  const [quantity, setQuantity] = useState(1);
  const plant = PLANTS.find(p => p.id === params.id);

  if (!plant) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={plant.image}
              alt={plant.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{plant.name}</h1>
              <p className="text-2xl font-semibold text-green-600">{plant.price}</p>
            </div>

            {/* Rating and Availability */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="ml-1 text-gray-600">
                  {plant.rating} ({plant.reviews} reviews)
                </span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                plant.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {plant.availability ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <label className="text-gray-700">Quantity:</label>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                  className="w-16 text-center border-x py-1"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              disabled={!plant.availability}
            >
              {plant.availability ? 'Add to Cart' : 'Out of Stock'}
            </Button>

            {/* Description */}
            <div className="prose">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600">{plant.description}</p>
            </div>

            {/* Care Instructions */}
            <div className="prose">
              <h2 className="text-2xl font-bold mb-4">Care Instructions</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Plant in well-draining soil with good sunlight</li>
                <li>Water regularly, keeping the soil moist but not waterlogged</li>
                <li>Fertilize every 2-3 weeks during growing season</li>
                <li>Prune regularly to encourage growth</li>
                <li>Protect from extreme weather conditions</li>
              </ul>
            </div>

            {/* Growth Information */}
            <div className="prose">
              <h2 className="text-2xl font-bold mb-4">Growth Information</h2>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p className="font-semibold">Growing Season:</p>
                  <p>{plant.season}</p>
                </div>
                <div>
                  <p className="font-semibold">Maturity Time:</p>
                  <p>60-90 days</p>
                </div>
                <div>
                  <p className="font-semibold">Sunlight Required:</p>
                  <p>Full sun (6-8 hours daily)</p>
                </div>
                <div>
                  <p className="font-semibold">Water Requirements:</p>
                  <p>Moderate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

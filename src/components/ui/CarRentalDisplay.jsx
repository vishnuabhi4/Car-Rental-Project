import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, Grid3X3, List, MapPin } from 'lucide-react';
import { Star, Users, Fuel, Settings } from 'lucide-react';
import CarRentalCard from '../Cards/CarRentalCard';
import cars from "../../Data/CarList"

// This should be in a separate file: src/components/cards/CarRentalCard.jsx

const CarRentalDisplay = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
const [visibleCount, setVisibleCount] = useState(8);

  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by car name, type, or location..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Type</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Price</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Location</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Available Cars</h2>
            <p className="text-gray-600 mt-1">{cars.length} cars found</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Sort by:</span>
            <select className="border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Car Grid - Responsive Breakpoints */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' // Mobile: 1, Tablet: 2, Desktop: 3, Large: 4
            : 'grid-cols-1 lg:grid-cols-2' // List view: 1 on mobile, 2 on desktop
        }`}>
         {cars.slice(0, visibleCount).map((car) => (
  <CarRentalCard key={car.id} car={car} />
))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
         {visibleCount < cars.length && (
  <div className="text-center mt-12">
    <button
      onClick={() => setVisibleCount(cars.length)}
      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
    >
      Load More Cars
    </button>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default CarRentalDisplay;
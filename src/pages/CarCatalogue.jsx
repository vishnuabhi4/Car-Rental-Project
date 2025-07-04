import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, Grid3X3, List, MapPin, ChevronDown } from 'lucide-react';
import { Star, Users, Fuel, Settings } from 'lucide-react';
import CarRentalCard from '../components/Cards/CarRentalCard';
import cars from "../components/Data/CarList"

const CarCatalogue = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  
  // Filter states
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [minRating, setMinRating] = useState('');
  const [availableOnly, setAvailableOnly] = useState(false);
  
  // Sort state
  const [sortBy, setSortBy] = useState('name');
  
  // Dropdown states
  const [showTypeFilter, setShowTypeFilter] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showLocationFilter, setShowLocationFilter] = useState(false);

  // Get unique values for filter options
  const filterOptions = useMemo(() => {
    const types = [...new Set(cars.map(car => car.type))];
    const locations = [...new Set(cars.map(car => car.location))];
    const transmissions = [...new Set(cars.map(car => car.transmission))];
    const fuels = [...new Set(cars.map(car => car.fuel))];
    
    return { types, locations, transmissions, fuels };
  }, []);

  // Filter and sort logic
  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter(car => {
      // Search filter
      const matchesSearch = searchTerm === '' || 
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.location.toLowerCase().includes(searchTerm.toLowerCase());

      // Type filter
      const matchesType = selectedType === '' || car.type === selectedType;

      // Price filter
      const matchesPrice = (priceRange.min === '' || car.pricePerDay >= parseInt(priceRange.min)) &&
                          (priceRange.max === '' || car.pricePerDay <= parseInt(priceRange.max));

      // Location filter
      const matchesLocation = selectedLocation === '' || car.location === selectedLocation;

      // Transmission filter  
      const matchesTransmission = selectedTransmission === '' || car.transmission === selectedTransmission;

      // Fuel filter
      const matchesFuel = selectedFuel === '' || car.fuel === selectedFuel;

      // Rating filter
      const matchesRating = minRating === '' || car.rating >= parseFloat(minRating);

      // Availability filter
      const matchesAvailability = !availableOnly || car.available;

      return matchesSearch && matchesType && matchesPrice && matchesLocation && 
             matchesTransmission && matchesFuel && matchesRating && matchesAvailability;
    });

    // Sort logic
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.pricePerDay - b.pricePerDay;
        case 'price-high':
          return b.pricePerDay - a.pricePerDay;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id - a.id; // Assuming higher ID means newer
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedType, priceRange, selectedLocation, selectedTransmission, 
      selectedFuel, minRating, availableOnly, sortBy]);

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType('');
    setPriceRange({ min: '', max: '' });
    setSelectedLocation('');
    setSelectedTransmission('');
    setSelectedFuel('');
    setMinRating('');
    setAvailableOnly(false);
    setSortBy('name');
  };

  const hasActiveFilters = searchTerm || selectedType || priceRange.min || priceRange.max || 
                          selectedLocation || selectedTransmission || selectedFuel || 
                          minRating || availableOnly;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-white">
      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 dark:bg-gray-700 dark:text-white">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by car name, type, or location..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {/* Type Filter */}
              <div className="relative">
                <button 
                  onClick={() => setShowTypeFilter(!showTypeFilter)}
                  className={`flex items-center gap-2 px-4 py-3 border rounded-xl transition-colors ${
                    selectedType ? 'border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900' : 
                    'border-gray-200 hover:border-blue-500 hover:text-blue-600 dark:border-gray-500 dark:hover:border-blue-400'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span className="hidden sm:inline">Type</span>
                  {selectedType && <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">{selectedType}</span>}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showTypeFilter && (
                  <div className="absolute top-full mt-2 left-0 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg z-10 min-w-[200px]">
                    <div className="p-4">
                      <h4 className="font-semibold mb-3">Vehicle Type</h4>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input 
                            type="radio" 
                            name="type" 
                            value=""
                            checked={selectedType === ''}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="mr-2" 
                          />
                          All Types
                        </label>
                        {filterOptions.types.map(type => (
                          <label key={type} className="flex items-center">
                            <input 
                              type="radio" 
                              name="type" 
                              value={type}
                              checked={selectedType === type}
                              onChange={(e) => setSelectedType(e.target.value)}
                              className="mr-2" 
                            />
                            {type}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Price Filter */}
              <div className="relative">
                <button 
                  onClick={() => setShowPriceFilter(!showPriceFilter)}
                  className={`flex items-center gap-2 px-4 py-3 border rounded-xl transition-colors ${
                    (priceRange.min || priceRange.max) ? 'border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900' : 
                    'border-gray-200 hover:border-blue-500 hover:text-blue-600 dark:border-gray-500 dark:hover:border-blue-400'
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="hidden sm:inline">Price</span>
                  {(priceRange.min || priceRange.max) && (
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                      ${priceRange.min || '0'}-${priceRange.max || '∞'}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showPriceFilter && (
                  <div className="absolute top-full mt-2 left-0 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg z-10 min-w-[300px]">
                    <div className="p-4">
                      <h4 className="font-semibold mb-3">Price Range (per day)</h4>
                      <div className="flex gap-2 mb-4">
                        <input
                          type="number"
                          placeholder="Min"
                          value={priceRange.min}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg dark:bg-gray-600 dark:border-gray-500"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          value={priceRange.max}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg dark:bg-gray-600 dark:border-gray-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">Additional Filters</h5>
                        <label className="flex items-center">
                          <input 
                            type="checkbox"
                            checked={availableOnly}
                            onChange={(e) => setAvailableOnly(e.target.checked)}
                            className="mr-2" 
                          />
                          Available only
                        </label>
                        
                        <div className="flex gap-2">
                          <select
                            value={selectedTransmission}
                            onChange={(e) => setSelectedTransmission(e.target.value)}
                            className="flex-1 px-2 py-1 border border-gray-200 rounded text-sm dark:bg-gray-600 dark:border-gray-500"
                          >
                            <option value="">Any Transmission</option>
                            {filterOptions.transmissions.map(trans => (
                              <option key={trans} value={trans}>{trans}</option>
                            ))}
                          </select>
                          
                          <select
                            value={selectedFuel}
                            onChange={(e) => setSelectedFuel(e.target.value)}
                            className="flex-1 px-2 py-1 border border-gray-200 rounded text-sm dark:bg-gray-600 dark:border-gray-500"
                          >
                            <option value="">Any Fuel</option>
                            {filterOptions.fuels.map(fuel => (
                              <option key={fuel} value={fuel}>{fuel}</option>
                            ))}
                          </select>
                        </div>
                        
                        <select
                          value={minRating}
                          onChange={(e) => setMinRating(e.target.value)}
                          className="w-full px-2 py-1 border border-gray-200 rounded text-sm dark:bg-gray-600 dark:border-gray-500"
                        >
                          <option value="">Any Rating</option>
                          <option value="4.5">4.5+ Stars</option>
                          <option value="4.0">4.0+ Stars</option>
                          <option value="3.5">3.5+ Stars</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Location Filter */}
              <div className="relative">
                <button 
                  onClick={() => setShowLocationFilter(!showLocationFilter)}
                  className={`flex items-center gap-2 px-4 py-3 border rounded-xl transition-colors ${
                    selectedLocation ? 'border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900' : 
                    'border-gray-200 hover:border-blue-500 hover:text-blue-600 dark:border-gray-500 dark:hover:border-blue-400'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span className="hidden sm:inline">Location</span>
                  {selectedLocation && <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">{selectedLocation}</span>}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showLocationFilter && (
                  <div className="absolute top-full mt-2 left-0 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg z-10 min-w-[200px]">
                    <div className="p-4">
                      <h4 className="font-semibold mb-3">Location</h4>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input 
                            type="radio" 
                            name="location" 
                            value=""
                            checked={selectedLocation === ''}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="mr-2" 
                          />
                          All Locations
                        </label>
                        {filterOptions.locations.map(location => (
                          <label key={location} className="flex items-center">
                            <input 
                              type="radio" 
                              name="location" 
                              value={location}
                              checked={selectedLocation === location}
                              onChange={(e) => setSelectedLocation(e.target.value)}
                              className="mr-2" 
                            />
                            {location}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-blue-900 dark:text-blue-200">
                      Search: "{searchTerm}"
                    </span>
                  )}
                  {selectedType && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full dark:bg-green-900 dark:text-green-200">
                      Type: {selectedType}
                    </span>
                  )}
                  {selectedLocation && (
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full dark:bg-purple-900 dark:text-purple-200">
                      Location: {selectedLocation}
                    </span>
                  )}
                  {(priceRange.min || priceRange.max) && (
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full dark:bg-orange-900 dark:text-orange-200">
                      Price: ${priceRange.min || '0'} - ${priceRange.max || '∞'}
                    </span>
                  )}
                </div>
                <button
                  onClick={resetFilters}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Available Cars</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {filteredAndSortedCars.length} {filteredAndSortedCars.length === 1 ? 'car' : 'cars'} found
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option> 
            </select>
          </div>
        </div>

        {/* No Results Message */}
        {filteredAndSortedCars.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No cars found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Car Grid - Responsive Breakpoints */}
        {filteredAndSortedCars.length > 0 && (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' // Mobile: 1, Tablet: 2, Desktop: 3, Large: 4
              : 'grid-cols-1 lg:grid-cols-2' // List view: 1 on mobile, 2 on desktop
          }`}>
            {filteredAndSortedCars.slice(0, visibleCount).map((car) => (
              <CarRentalCard key={car.id} car={car} />
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredAndSortedCars.length > 0 && visibleCount < filteredAndSortedCars.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(filteredAndSortedCars.length)}
              className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              Show All
            </button>
          </div>
        )}

        {/* Click outside to close dropdowns */}
        {(showTypeFilter || showPriceFilter || showLocationFilter) && (
          <div 
            className="fixed inset-0 z-0" 
            onClick={() => {
              setShowTypeFilter(false);
              setShowPriceFilter(false);
              setShowLocationFilter(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CarCatalogue;
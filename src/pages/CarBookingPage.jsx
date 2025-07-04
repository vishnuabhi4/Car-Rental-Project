 import cars from "../components/Data/CarList"
import { useParams } from "react-router-dom"
import React, { useState } from 'react';
import { ArrowLeft, Star, Users, Fuel, Settings, MapPin, Shield, Calendar, Clock, Phone, Mail, Heart, Share2, CheckCircle, Wifi, Bluetooth, Navigation, Snowflake, Radio, Zap } from 'lucide-react';
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";
import BookingModal from "../components/BookingModal";



const CarBookingPage = () => {  
  const { id } = useParams();
  const navigateTo = useNavigate();
  const car = cars.find((i) => i.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);

const handleBookNow = () => {
  setIsModalOpen(true);
};

const handleConfirmBooking = () => {
  setIsModalOpen(false);
  alert('Booking confirmed!');
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};
    
  if (!car || !car.available) return <p>car not available</p>;

  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    pickupDate: '',
    returnDate: ''
  });

  const [datesBooked, setDatesBooked] = useState(0);

  const handleDateChange = (field, value) => {
    setSelectedDates(prev => ({
      ...prev,
      [field]: value
    }));
  };

  //  Calculate difference using useEffect
  useEffect(() => {
    const { pickupDate, returnDate } = selectedDates;
    if (pickupDate && returnDate) {
      const pickup = new Date(pickupDate);
      const returning = new Date(returnDate);

      if (!isNaN(pickup) && !isNaN(returning)) {
        const timeDifference = returning - pickup;
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const daysDifference = timeDifference / millisecondsPerDay;
        setDatesBooked(daysDifference > 0 ? daysDifference : 0);
      }
    }
  }, [selectedDates]);

  const [totalPrice, setTotalPrice] = useState(0);

useEffect(() => {
  if (datesBooked > 0) {
    const total = car.pricePerDay * datesBooked + 15 + 10; // daily * days + insurance + service fee
    setTotalPrice(total);
  } else {
    setTotalPrice(0);
  }
}, [datesBooked, car.pricePerDay]);



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <ArrowLeft onClick={()=>navigateTo('/cars')} className="w-5 h-5" />
              <span  className="font-medium">Back to Cars</span>
            </button>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors ${
                  isLiked 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={car.images[selectedImage]} 
                  alt={car.name}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    car.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {car.available ? 'Available' : 'Booked'}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">{car.rating}</span>
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="p-4">
                <div className="flex gap-3 overflow-x-auto">
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index 
                          ? 'border-blue-500' 
                          : 'border-gray-200 dark:border-gray-600'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${car.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Car Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{car.name}</h1>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">${car.pricePerDay}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">/day</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg text-gray-600 dark:text-gray-300">{car.type}</span>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{car.location}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(car.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">({car.reviews} reviews)</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{car.description}</p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-6 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="text-center">
                  <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-500 dark:text-gray-400">Passengers</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{car.passengers}</div>
                </div>
                <div className="text-center">
                  <Settings className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-500 dark:text-gray-400">Transmission</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{car.transmission}</div>
                </div>
                <div className="text-center">
                  <Fuel className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-500 dark:text-gray-400">Fuel Type</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{car.fuel}</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md flex items-center gap-1"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {car.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <amenity.icon className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(car.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                      <span className="text-gray-500 dark:text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-medium text-gray-900 dark:text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Book This Car</h3>
              
              {/* Date Selection */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Pickup Date
                  </label>
                  <input 
                    type="date"
                    value={selectedDates.pickupDate}
                    onChange={(e) => handleDateChange('pickupDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Return Date
                  </label>
                  <input 
                    type="date"
                    value={selectedDates.returnDate}
                    onChange={(e) => handleDateChange('returnDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Daily Rate</span>
                  <span className="text-gray-900 dark:text-white">${car.pricePerDay}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Insurance</span>
                  <span className="text-gray-900 dark:text-white">$15</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Service Fee</span>
                  <span className="text-gray-900 dark:text-white">$10</span>
                </div>
                <hr className="border-gray-200 dark:border-gray-600" />
                <div className="flex justify-between font-semibold text-lg">
                   <span className="text-gray-900 dark:text-white">Total days</span>
                  <span className="text-gray-900 dark:text-white">{datesBooked} days</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-gray-900 dark:text-white">Total</span>
                  <span className="text-gray-900 dark:text-white">${totalPrice}</span>
                </div>
              </div>


              <button 
  className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
    car.available
      ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
      : 'bg-gray-400 cursor-not-allowed'
  }`}
  disabled={!car.available || datesBooked === 0}
  onClick={handleBookNow}
>
  {car.available ? 'Book Now' : 'Unavailable'}
</button>

  <BookingModal
      isOpen={isModalOpen}
      totalPrice={totalPrice}
      onClose={handleCloseModal}
      onConfirm={handleConfirmBooking}
    />

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" />
                  Free cancellation up to 24 hours
                </p>
              </div>

              {/* Owner Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Rental Company</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 dark:text-white">{car.owner.name}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{car.owner.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>Response time: {car.owner.responseTime}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">Call</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Email</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBookingPage;
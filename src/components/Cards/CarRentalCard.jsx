import React from "react";
import { Link } from "react-router-dom";
import { Star, Users, Fuel, Settings, MapPin } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { useSelector } from 'react-redux';

const CarRentalCard = ({ car }) => {

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addToCart(car));
    if(user)alert('added to cart')
      if(!user)alert('login to add the product into cart')
  };

  return (
    <div className="bg-white rounded-2xl dark:bg-gray-600 dark:text-white dark:shadow-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              car.available
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {car.available ? "Available" : "Booked"}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold text-gray-700">
              {car.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{car.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{car.type}</span>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="w-3 h-3" />
              <span>{car.location}</span>
            </div>
          </div>
        </div>

        {/* Car Specs */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-sm">{car.passengers}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-sm">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Fuel className="w-4 h-4 text-blue-500" />
            <span className="text-sm">{car.fuel}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {car.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
            {car.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                +{car.features.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Reviews */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(car.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({car.reviews} reviews)</span>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-gray-900">
                ${car.pricePerDay}
              </span>
              <span className="text-sm text-gray-500">/day</span>
            </div>
          </div>
          <div className="text-sm">
            <button
              onClick={handleCart}
              className="bg-blue-600 text-white px-3 py-3 font-semibold rounded-xl"
            >
              Add to cart
            </button>
          </div>
          <Link to={`/cars/${car.id}`} className="block">
            <div
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                car.available
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {car.available ? "Book Now" : "Unavailable"}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarRentalCard;

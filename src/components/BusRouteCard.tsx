import React from 'react';
import { Clock, IndianRupeeIcon, Star, Users } from 'lucide-react';
interface BusRoute {
  id: number;
  operator: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  busType: string;
  price: number;
  seatsAvailable: number;
  rating: number;
}
interface BusRouteCardProps {
  route: BusRoute;
  onBookNow: () => void;
}
export function BusRouteCard({
  route,
  onBookNow
}: BusRouteCardProps) {
  return <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            {route.operator}
          </h3>
          <span className="text-sm text-gray-500">{route.busType}</span>
        </div>
        <div className="flex items-center text-yellow-500">
          <Star size={16} className="fill-current" />
          <span className="ml-1 text-sm">{route.rating}</span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-xl font-bold text-gray-800">
            {route.departureTime}
          </div>
          <div className="text-sm text-gray-500">Departure</div>
        </div>
        <div className="flex items-center text-gray-400">
          <Clock size={16} />
          <span className="mx-2 text-sm">{route.duration}</span>
        </div>
        <div>
          <div className="text-xl font-bold text-gray-800">
            {route.arrivalTime}
          </div>
          <div className="text-sm text-gray-500">Arrival</div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-4">
          <div className="flex items-center text-green-600">
            <IndianRupeeIcon size={16} />
            <span className="font-bold ml-1">{route.price}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-1" />
            <span className="text-sm">{route.seatsAvailable} seats left</span>
          </div>
        </div>
        <button onClick={onBookNow} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Book Now
        </button>
      </div>
    </div>;
}
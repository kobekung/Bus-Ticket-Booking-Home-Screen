import React, { useState } from 'react';
import { RouteFilters } from './RouteFilters';
import { BusRouteCard } from './BusRouteCard';
interface BusRoutesListProps {
  onSelectBus: () => void;
}
const sampleRoutes = [{
  id: 1,
  operator: 'Express Lines',
  departureTime: '06:00',
  arrivalTime: '09:30',
  duration: '3h 30m',
  busType: 'Luxury',
  price: 45,
  seatsAvailable: 12,
  rating: 4.5
}, {
  id: 2,
  operator: 'City Connect',
  departureTime: '07:15',
  arrivalTime: '11:00',
  duration: '3h 45m',
  busType: 'Standard',
  price: 35,
  seatsAvailable: 5,
  rating: 4.2
}, {
  id: 3,
  operator: 'Royal Coaches',
  departureTime: '08:30',
  arrivalTime: '12:00',
  duration: '3h 30m',
  busType: 'Premium',
  price: 55,
  seatsAvailable: 20,
  rating: 4.8
}];
export function BusRoutesList({
  onSelectBus
}: BusRoutesListProps) {
  const [activeFilters, setActiveFilters] = useState({
    time: '',
    price: '',
    operator: ''
  });
  return <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Available Buses</h2>
        <p className="text-gray-600">15 buses found</p>
      </div>
      <RouteFilters activeFilters={activeFilters} onFilterChange={setActiveFilters} />
      <div className="space-y-4 mt-6">
        {sampleRoutes.map(route => <BusRouteCard key={route.id} route={route} onBookNow={onSelectBus} />)}
      </div>
    </div>;
}
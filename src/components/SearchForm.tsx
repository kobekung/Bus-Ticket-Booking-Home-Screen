import React, { useState } from 'react';
import { MapPinIcon, CalendarIcon, ArrowRightIcon } from 'lucide-react';
interface SearchFormProps {
  onSearch: () => void;
}
export function SearchForm({
  onSearch
}: SearchFormProps) {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };
  return <div className="bg-white rounded-xl shadow-lg p-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="from">
            From
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPinIcon size={18} className="text-blue-500" />
            </div>
            <input id="from" type="text" value={fromLocation} onChange={e => setFromLocation(e.target.value)} className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter origin city" required />
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="to">
            To
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPinIcon size={18} className="text-green-500" />
            </div>
            <input id="to" type="text" value={toLocation} onChange={e => setToLocation(e.target.value)} className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter destination city" required />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="date">
            Departure Date
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <CalendarIcon size={18} className="text-blue-500" />
            </div>
            <input id="date" type="date" value={departureDate} onChange={e => setDepartureDate(e.target.value)} className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition duration-150 ease-in-out">
          <span>Search Bus</span>
          <ArrowRightIcon size={18} className="ml-2" />
        </button>
      </form>
    </div>;
}
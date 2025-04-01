import React from 'react';
import type { Seat } from './SeatSelectionScreen';
interface BusLayoutProps {
  seats: Seat[];
  onSeatSelect: (seat: Seat) => void;
}
export function BusLayout({
  seats,
  onSeatSelect
}: BusLayoutProps) {
  return <div className="relative">
      {/* Driver's section */}
      <div className="flex items-center mb-8">
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
          <SteeringWheel />
        </div>
        <div className="ml-4 h-1 flex-1 bg-gray-200 rounded"></div>
      </div>
      {/* Seats grid */}
      <div className="grid grid-cols-4 gap-4">
        {seats.map(seat => <button key={seat.id} onClick={() => onSeatSelect(seat)} disabled={seat.isOccupied} className={`
              w-12 h-12 rounded-lg flex items-center justify-center text-sm font-medium
              transition-colors duration-200
              ${seat.isOccupied ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : seat.isSelected ? 'bg-blue-600 text-white' : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'}
            `}>
            {seat.number}
          </button>)}
      </div>
    </div>;
}
function SteeringWheel() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M20 12h2" />
      <path d="M2 12h2" />
    </svg>;
}
import React from 'react';
export function SeatLegend() {
  return <div className="flex justify-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-white border-2 border-blue-600"></div>
        <span className="text-sm text-gray-600">Available</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-gray-200"></div>
        <span className="text-sm text-gray-600">Occupied</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-blue-600"></div>
        <span className="text-sm text-gray-600">Selected</span>
      </div>
    </div>;
}
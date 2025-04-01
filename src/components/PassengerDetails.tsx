import React from 'react';
import type { Seat } from './SeatSelectionScreen';
interface PassengerDetailsProps {
  selectedSeat: Seat;
  passengerName: string;
  onNameChange: (name: string) => void;
  onContinue: () => void;
}
export function PassengerDetails({
  selectedSeat,
  passengerName,
  onNameChange,
  onContinue
}: PassengerDetailsProps) {
  return <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="passengerName">
          Passenger Name
        </label>
        <input type="text" id="passengerName" value={passengerName} onChange={e => onNameChange(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter passenger name" required />
      </div>
      <div className="flex items-center justify-between pt-4 border-t">
        <div>
          <p className="text-sm text-gray-600">Selected Seat</p>
          <p className="text-lg font-semibold text-gray-800">
            {selectedSeat.number}
          </p>
        </div>
        <button onClick={onContinue} className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors" disabled={!passengerName.trim()}>
          Continue to Payment
        </button>
      </div>
    </div>;
}
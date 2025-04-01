import React, { useState } from 'react';
import { BusLayout } from './BusLayout';
import { SeatLegend } from './SeatLegend';
import { PassengerDetails } from './PassengerDetails';
import { ArrowLeftIcon } from 'lucide-react';
export interface Seat {
  id: string;
  number: string;
  isOccupied: boolean;
  isSelected?: boolean;
}
const generateSeatData = (): Seat[] => {
  const seats: Seat[] = [];
  // Generate 40 seats (10 rows x 4 seats)
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 4; j++) {
      const seatNumber = `${i}${j === 1 ? 'A' : j === 2 ? 'B' : j === 3 ? 'C' : 'D'}`;
      seats.push({
        id: seatNumber,
        number: seatNumber,
        isOccupied: Math.random() < 0.3 // 30% seats are occupied
      });
    }
  }
  return seats;
};
interface SeatSelectionScreenProps {
  onContinue: () => void;
}
export function SeatSelectionScreen({
  onContinue
}: SeatSelectionScreenProps) {
  const [seats, setSeats] = useState<Seat[]>(generateSeatData());
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);
  const [passengerName, setPassengerName] = useState('');
  const handleSeatSelect = (seat: Seat) => {
    if (seat.isOccupied) return;
    setSeats(seats.map(s => ({
      ...s,
      isSelected: s.id === seat.id ? !s.isSelected : false
    })));
    setSelectedSeat(seat);
  };
  return <div className="flex flex-col h-full bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ArrowLeftIcon size={24} className="text-gray-700" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Select Seat
              </h1>
              <p className="text-sm text-gray-600">Express Lines • 6:00 AM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-md mx-auto px-4 py-6 space-y-6">
        <SeatLegend />
        <div className="bg-white rounded-lg shadow-md p-6">
          <BusLayout seats={seats} onSeatSelect={handleSeatSelect} />
        </div>
        {selectedSeat && <PassengerDetails selectedSeat={selectedSeat} passengerName={passengerName} onNameChange={setPassengerName} onContinue={onContinue} />}
      </div>
    </div>;
}
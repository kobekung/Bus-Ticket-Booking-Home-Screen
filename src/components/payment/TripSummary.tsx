import React from 'react';
import { MapPinIcon, CalendarIcon, ClockIcon, UserIcon } from 'lucide-react';
interface TripSummaryProps {
  tripInfo: {
    from: string;
    to: string;
    date: string;
    busOperator: string;
    departureTime: string;
    seatNumber: string;
    passengerName: string;
  };
}
export function TripSummary({
  tripInfo
}: TripSummaryProps) {
  return <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Trip Summary</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center gap-1">
            <MapPinIcon size={20} className="text-blue-600" />
            <div className="w-px h-12 bg-gray-200"></div>
            <MapPinIcon size={20} className="text-green-600" />
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <div className="font-medium text-gray-800">{tripInfo.from}</div>
              <div className="text-sm text-gray-500">From</div>
            </div>
            <div>
              <div className="font-medium text-gray-800">{tripInfo.to}</div>
              <div className="text-sm text-gray-500">To</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <CalendarIcon size={18} className="text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Date</div>
              <div className="font-medium text-gray-800">
                {new Date(tripInfo.date).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon size={18} className="text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Time</div>
              <div className="font-medium text-gray-800">
                {tripInfo.departureTime}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <UserIcon size={18} className="text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Passenger</div>
              <div className="font-medium text-gray-800">
                {tripInfo.passengerName}
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Seat</div>
            <div className="font-medium text-gray-800">
              {tripInfo.seatNumber}
            </div>
          </div>
        </div>
      </div>
    </div>;
}
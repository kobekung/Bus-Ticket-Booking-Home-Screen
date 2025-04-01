import React from 'react';
import { MapPinIcon, CalendarIcon, ClockIcon, UserIcon, BusIcon } from 'lucide-react';
interface TicketCardProps {
  ticket: {
    passenger: {
      name: string;
      seat: string;
    };
    journey: {
      from: string;
      to: string;
      date: string;
      departureTime: string;
      arrivalTime: string;
      busOperator: string;
    };
  };
}
export function TicketCard({
  ticket
}: TicketCardProps) {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="space-y-6">
          {/* Journey Details */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center gap-1">
              <MapPinIcon size={20} className="text-blue-600" />
              <div className="w-px h-12 bg-gray-200"></div>
              <MapPinIcon size={20} className="text-green-600" />
            </div>
            <div className="flex-1">
              <div className="mb-3">
                <div className="font-medium text-gray-800">
                  {ticket.journey.from}
                </div>
                <div className="text-sm text-gray-500">From</div>
              </div>
              <div>
                <div className="font-medium text-gray-800">
                  {ticket.journey.to}
                </div>
                <div className="text-sm text-gray-500">To</div>
              </div>
            </div>
          </div>
          {/* Time and Date */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <CalendarIcon size={18} className="text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Date</div>
                <div className="font-medium text-gray-800">
                  {new Date(ticket.journey.date).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon size={18} className="text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Departure</div>
                <div className="font-medium text-gray-800">
                  {ticket.journey.departureTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Separator with circles */}
      <div className="relative h-4 bg-gray-50">
        <div className="absolute left-0 top-1/2 -ml-2 w-4 h-4 rounded-full bg-gray-50"></div>
        <div className="absolute right-0 top-1/2 -mr-2 w-4 h-4 rounded-full bg-gray-50"></div>
      </div>
      {/* Passenger Details */}
      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <UserIcon size={18} className="text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Passenger</div>
              <div className="font-medium text-gray-800">
                {ticket.passenger.name}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <BusIcon size={18} className="text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Seat</div>
              <div className="font-medium text-gray-800">
                {ticket.passenger.seat}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
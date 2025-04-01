import React from 'react';
import { ArrowLeftIcon, CheckCircle2Icon, DownloadIcon, WalletIcon, PhoneIcon, MailIcon, PrinterIcon } from 'lucide-react';
import { TicketCard } from './confirmation/TicketCard';
import { QRCodeDisplay } from './confirmation/QRCodeDisplay';
import { SupportInfo } from './confirmation/SupportInfo';
interface TicketDetails {
  ticketNumber: string;
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
  price: {
    total: number;
    currency: string;
  };
}
export function ConfirmationScreen() {
  // Sample ticket data
  const ticketDetails: TicketDetails = {
    ticketNumber: 'BG28045719',
    passenger: {
      name: 'John Doe',
      seat: '5A'
    },
    journey: {
      from: 'New York',
      to: 'Boston',
      date: '2024-02-15',
      departureTime: '06:00',
      arrivalTime: '09:30',
      busOperator: 'Express Lines'
    },
    price: {
      total: 51.3,
      currency: 'USD'
    }
  };
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ArrowLeftIcon size={24} className="text-gray-700" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Booking Confirmed
              </h1>
              <p className="text-sm text-gray-600">
                Ticket #{ticketDetails.ticketNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-md mx-auto px-4 py-6 space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle2Icon size={32} className="text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Thank You!</h2>
          <p className="text-gray-600 mt-1">Your booking has been confirmed</p>
        </div>
        <TicketCard ticket={ticketDetails} />
        <QRCodeDisplay ticketNumber={ticketDetails.ticketNumber} />
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            <WalletIcon size={20} />
            <span>Add to Wallet</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            <DownloadIcon size={20} />
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            <PrinterIcon size={20} />
          </button>
        </div>
        <SupportInfo />
      </div>
    </div>;
}
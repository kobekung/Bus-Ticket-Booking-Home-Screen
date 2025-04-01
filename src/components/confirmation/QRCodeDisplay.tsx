import React from 'react';
interface QRCodeDisplayProps {
  ticketNumber: string;
}
export function QRCodeDisplay({
  ticketNumber
}: QRCodeDisplayProps) {
  return <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Show this QR code to board the bus
        </p>
      </div>
      <div className="bg-gray-100 p-8 rounded-lg mx-auto w-48 h-48 flex items-center justify-center mb-4">
        {/* In a real app, generate actual QR code using a library */}
        <span className="text-gray-400">Ticket QR Code</span>
      </div>
      <div className="font-mono text-sm text-gray-600">{ticketNumber}</div>
    </div>;
}
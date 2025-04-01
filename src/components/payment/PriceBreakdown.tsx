import React from 'react';
interface PriceBreakdownProps {
  price: {
    baseFare: number;
    serviceFee: number;
    tax: number;
  };
}
export function PriceBreakdown({
  price
}: PriceBreakdownProps) {
  const total = price.baseFare + price.serviceFee + price.tax;
  return <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Price Details
      </h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Base Fare</span>
          <span className="font-medium">${price.baseFare.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Service Fee</span>
          <span className="font-medium">${price.serviceFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${price.tax.toFixed(2)}</span>
        </div>
        <div className="pt-3 border-t">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-800">Total Amount</span>
            <span className="font-semibold text-gray-800">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>;
}
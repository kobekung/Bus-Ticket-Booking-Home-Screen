import React, { useState } from 'react';
import { ArrowLeftIcon, CreditCardIcon, QrCodeIcon, SmartphoneIcon } from 'lucide-react';
import { TripSummary } from './payment/TripSummary';
import { PaymentMethods } from './payment/PaymentMethods';
import { CreditCardForm } from './payment/CreditCardForm';
import { PriceBreakdown } from './payment/PriceBreakdown';
type PaymentMethod = 'card' | 'banking' | 'qr';
interface PaymentDetails {
  tripInfo: {
    from: string;
    to: string;
    date: string;
    busOperator: string;
    departureTime: string;
    seatNumber: string;
    passengerName: string;
  };
  price: {
    baseFare: number;
    serviceFee: number;
    tax: number;
  };
}
interface PaymentScreenProps {
  onPaymentComplete: () => void;
}
export function PaymentScreen({
  onPaymentComplete
}: PaymentScreenProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const paymentDetails: PaymentDetails = {
    tripInfo: {
      from: 'New York',
      to: 'Boston',
      date: '2024-02-15',
      busOperator: 'Express Lines',
      departureTime: '06:00',
      seatNumber: '5A',
      passengerName: 'John Doe'
    },
    price: {
      baseFare: 45,
      serviceFee: 2.5,
      tax: 3.8
    }
  };
  const handlePayment = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    onPaymentComplete();
  };
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ArrowLeftIcon size={24} className="text-gray-700" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Payment</h1>
              <p className="text-sm text-gray-600">Complete your booking</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-md mx-auto px-4 py-6 space-y-6">
        <TripSummary tripInfo={paymentDetails.tripInfo} />
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Payment Method
            </h2>
            <PaymentMethods selectedMethod={selectedMethod} onMethodSelect={setSelectedMethod} />
          </div>
          {selectedMethod === 'card' && <CreditCardForm />}
          {selectedMethod === 'banking' && <div className="border rounded-lg p-4 text-center space-y-3">
              <SmartphoneIcon className="mx-auto text-blue-600" size={32} />
              <p className="text-gray-600">
                Open your banking app and scan this QR code
              </p>
              <div className="bg-gray-100 p-8 rounded-lg mx-auto w-48 h-48 flex items-center justify-center">
                <span className="text-gray-400">Banking QR Code</span>
              </div>
            </div>}
          {selectedMethod === 'qr' && <div className="border rounded-lg p-4 text-center space-y-3">
              <QrCodeIcon className="mx-auto text-blue-600" size={32} />
              <p className="text-gray-600">Scan this QR code to pay</p>
              <div className="bg-gray-100 p-8 rounded-lg mx-auto w-48 h-48 flex items-center justify-center">
                <span className="text-gray-400">Payment QR Code</span>
              </div>
            </div>}
        </div>
        <PriceBreakdown price={paymentDetails.price} />
        <button onClick={handlePayment} disabled={isProcessing} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed">
          {isProcessing ? <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Processing...</span>
            </div> : <span>Pay Now</span>}
        </button>
      </div>
    </div>;
}
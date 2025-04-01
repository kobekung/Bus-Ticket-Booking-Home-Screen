import React from 'react';
import { CreditCardIcon, SmartphoneIcon, QrCodeIcon } from 'lucide-react';
interface PaymentMethodsProps {
  selectedMethod: string;
  onMethodSelect: (method: 'card' | 'banking' | 'qr') => void;
}
export function PaymentMethods({
  selectedMethod,
  onMethodSelect
}: PaymentMethodsProps) {
  return <div className="grid grid-cols-3 gap-3">
      <button onClick={() => onMethodSelect('card')} className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-colors
          ${selectedMethod === 'card' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'}`}>
        <CreditCardIcon size={24} />
        <span className="text-sm font-medium">Card</span>
      </button>
      <button onClick={() => onMethodSelect('banking')} className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-colors
          ${selectedMethod === 'banking' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'}`}>
        <SmartphoneIcon size={24} />
        <span className="text-sm font-medium">Banking</span>
      </button>
      <button onClick={() => onMethodSelect('qr')} className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-colors
          ${selectedMethod === 'qr' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'}`}>
        <QrCodeIcon size={24} />
        <span className="text-sm font-medium">QR Code</span>
      </button>
    </div>;
}
import React, { useState } from 'react';
import { CreditCardIcon } from 'lucide-react';
export function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim().slice(0, 19);
  };
  const formatExpiryDate = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 5);
  };
  return <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cardNumber">
          Card Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CreditCardIcon size={18} className="text-gray-400" />
          </div>
          <input id="cardNumber" type="text" value={cardNumber} onChange={e => setCardNumber(formatCardNumber(e.target.value))} placeholder="1234 5678 9012 3456" maxLength={19} className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="expiryDate">
            Expiry Date
          </label>
          <input id="expiryDate" type="text" value={expiryDate} onChange={e => setExpiryDate(formatExpiryDate(e.target.value))} placeholder="MM/YY" maxLength={5} className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cvv">
            CVV
          </label>
          <input id="cvv" type="password" value={cvv} onChange={e => setCvv(e.target.value.slice(0, 3))} placeholder="123" maxLength={3} className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
          Cardholder Name
        </label>
        <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
    </div>;
}
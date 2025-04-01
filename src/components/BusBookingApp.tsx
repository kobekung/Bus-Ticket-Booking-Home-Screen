import React, { useState } from 'react';
import { Header } from './Header';
import { SearchForm } from './SearchForm';
import { BusRoutesList } from './BusRoutesList';
import { SeatSelectionScreen } from './SeatSelectionScreen';
import { PaymentScreen } from './PaymentScreen';
import { ConfirmationScreen } from './ConfirmationScreen';
export function BusBookingApp() {
  const [currentScreen, setCurrentScreen] = useState('search'); // 'search' | 'results' | 'seats' | 'payment' | 'confirmation'
  return <div className="flex flex-col w-full min-h-screen">
      {currentScreen === 'seats' ? <SeatSelectionScreen onContinue={() => setCurrentScreen('payment')} /> : currentScreen === 'payment' ? <PaymentScreen onPaymentComplete={() => setCurrentScreen('confirmation')} /> : currentScreen === 'confirmation' ? <ConfirmationScreen /> : <>
          <Header />
          <main className="flex-1 px-4 py-6">
            <div className="max-w-md mx-auto">
              {currentScreen === 'search' ? <>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Find Your Bus
                    </h2>
                    <p className="text-gray-600">
                      Book tickets for your next journey
                    </p>
                  </div>
                  <SearchForm onSearch={() => setCurrentScreen('results')} />
                </> : <BusRoutesList onSelectBus={() => setCurrentScreen('seats')} />}
            </div>
          </main>
        </>}
    </div>;
}
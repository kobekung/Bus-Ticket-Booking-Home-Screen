import React from 'react';
import { BusIcon, MenuIcon, UserIcon } from 'lucide-react';
export function Header() {
  return <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BusIcon size={24} />
          <h1 className="text-xl font-bold">BusGo</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full hover:bg-blue-500">
            <UserIcon size={20} />
          </button>
          <button className="p-1 rounded-full hover:bg-blue-500">
            <MenuIcon size={20} />
          </button>
        </div>
      </div>
    </header>;
}
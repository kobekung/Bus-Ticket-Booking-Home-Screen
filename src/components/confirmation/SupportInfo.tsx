import React from 'react';
import { PhoneIcon, MailIcon } from 'lucide-react';
export function SupportInfo() {
  return <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <PhoneIcon size={20} className="text-blue-600" />
          </div>
          <div>
            <div className="text-sm text-gray-500">Call us at</div>
            <a href="tel:1800123456" className="text-blue-600 font-medium">
              1-800-123-456
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <MailIcon size={20} className="text-blue-600" />
          </div>
          <div>
            <div className="text-sm text-gray-500">Email us at</div>
            <a href="mailto:support@busgo.com" className="text-blue-600 font-medium">
              support@busgo.com
            </a>
          </div>
        </div>
      </div>
    </div>;
}
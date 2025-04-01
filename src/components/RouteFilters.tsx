import React, { useState } from 'react';
import { FilterIcon, ClockIcon, IndianRupeeIcon, BusIcon } from 'lucide-react';
interface FilterProps {
  activeFilters: {
    time: string;
    price: string;
    operator: string;
  };
  onFilterChange: (filters: any) => void;
}
export function RouteFilters({
  activeFilters,
  onFilterChange
}: FilterProps) {
  return <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-2 mb-4">
        <FilterIcon size={18} className="text-blue-600" />
        <span className="font-medium">Filters</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <FilterChip icon={<ClockIcon size={16} />} label="Departure" options={['Morning', 'Afternoon', 'Evening']} active={activeFilters.time} onChange={value => onFilterChange({
        ...activeFilters,
        time: value
      })} />
        <FilterChip icon={<IndianRupeeIcon size={16} />} label="Price" options={['Low to High', 'High to Low']} active={activeFilters.price} onChange={value => onFilterChange({
        ...activeFilters,
        price: value
      })} />
        <FilterChip icon={<BusIcon size={16} />} label="Bus Type" options={['All', 'Luxury', 'Standard']} active={activeFilters.operator} onChange={value => onFilterChange({
        ...activeFilters,
        operator: value
      })} />
      </div>
    </div>;
}
interface FilterChipProps {
  icon: React.ReactNode;
  label: string;
  options: string[];
  active: string;
  onChange: (value: string) => void;
}
function FilterChip({
  icon,
  label,
  options,
  active,
  onChange
}: FilterChipProps) {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm ${active ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
        {icon}
        <span>{active || label}</span>
      </button>
      {isOpen && <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 z-10 min-w-[150px]">
          {options.map(option => <button key={option} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={() => {
        onChange(option);
        setIsOpen(false);
      }}>
              {option}
            </button>)}
        </div>}
    </div>;
}
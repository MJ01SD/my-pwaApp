import React, { useState, useCallback } from 'react';

const Dropdown = ({
  label = 'Select an option',
  options = [],
  name,
  attributeName = '',
  onChange,
  dropdownHeight = 'h-10',
  dropdownwidth = 'w-44',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = useCallback(
    (option) => {
      setSelected(option[attributeName] || option);
      onChange({ [name]: option[attributeName] || option });
      setIsOpen(false);
    },
    [attributeName, name, onChange]
  );

  return (
    <div className={`relative inline-block text-left ${dropdownwidth}`}>
      <button
        type="button"
        onClick={handleToggle}
        className={`block ${dropdownwidth} ${dropdownHeight} px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300  rounded-md shadow-sm bg-white hover:bg-gray-50 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-left`}
      >
        {selected}
      </button>
      {isOpen && (
        <div
          className={`absolute z-10 ${dropdownwidth} mt-1 bg-white border border-gray-300 rounded-md shadow-lg`}
        >
          {options && options.length > 0 && options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
            >
              {attributeName ? option[attributeName] : option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
import React, { useState } from 'react';

const Dropdownmenu = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdownmenu;
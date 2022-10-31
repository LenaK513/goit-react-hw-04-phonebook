import React from 'react';

export const Filter = ({ value, onChangeForFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeForFilter} />
    </label>
  );
};

import React from 'react';
import { InputFilter } from './Filter.styled';
import { Input } from 'components/Form/Form.styled';
export const Filter = ({ value, onChangeForFilter }) => {
  return (
    <InputFilter>
      Find contacts by name
      <Input type="text" value={value} onChange={onChangeForFilter} />
    </InputFilter>
  );
};

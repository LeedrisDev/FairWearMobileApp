import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../src/Pages/Search/Search';
import { searchInformations } from '../src/Pages/Search/objects';

describe('Search', () => {
  it('should update the text value on input change', () => {
    const { getByPlaceholderText } = render(<Search />);
    const inputElement = getByPlaceholderText('Find an item or brand') as HTMLInputElement;
    const inputValue = 'New input value';
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(inputElement.value).toBe(inputValue);
  });

  it('should update the searchInformations object on item selection', () => {
    const { getByText } = render(<Search />);
    const genderItem = getByText('Man');
    fireEvent.click(genderItem);
    expect(searchInformations.gender).toBe('Man');
  });
});

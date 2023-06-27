import * as React from 'react';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { searchInformations } from './objects';

import './Search.css';
import { useState } from 'react';

const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'];
const genders = ['Man', 'Woman', 'Child'];
const colors = ['Blue', 'Pink', 'Black', 'White'];

interface IFilterSearchProps {
  title: string,
  items: string[],
}

function FilterSearch({ title, items }: IFilterSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemSelection = (item: string) => {
    setSelectedItem(item);
    switch (title) {
      case 'Color':
        searchInformations.color = item;
        break;
      case 'Gender':
        searchInformations.gender = item;
        break;
      default:
        searchInformations.size = item;
        break;
    }
    setIsOpen(false);
  };

  return (
    <div className="filter-search">
      <div
        className="filter-field"
        onClick={toggleDropdown}
        style={{
          borderBottomRightRadius: isOpen ? '0px' : '10px',
          borderBottomLeftRadius: isOpen ? '0px' : '10px',
        }}
      >
        <p className="text-filtre">
          {
                selectedItem !== '' ? selectedItem : title
            }
        </p>
        <FontAwesomeIcon className="icon-filter" icon={faArrowDown} />
      </div>
      <div className="dropdown-filter">
        {isOpen && (
        <div>
          {items.map((item) => (
            <div>
              <div key={item} className="item-filter" onClick={() => handleItemSelection(item)}>
                {item}
              </div>
              <hr className="line" />
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}

function Search() {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    searchInformations.input = event.target.value;
  };

  return (
    <div className="search">
      <input
        className="input-search"
        type="text"
        placeholder="Find an item or brand"
        value={text}
        onChange={handleChange}
        style={{
          color: text ? 'black' : 'gray',
        }}
      />
      <div className="filter-box">
        <FilterSearch title="Gender" items={genders} />
        <FilterSearch title="Size" items={sizes} />
        <FilterSearch title="Color" items={colors} />
      </div>
    </div>
  );
}

export default Search;

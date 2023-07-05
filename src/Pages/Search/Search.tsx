import * as React from 'react';
import { searchInformations } from './objects';
import produit1 from '../../assets/produit1.png';
import BrandBusiness from '../../Business/BrandBusiness';

import './Search.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/*
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

 */

function Search() {
  const [text, setText] = useState('');
  const [length, setLength] = useState(0);
  // const [brands, setBrands] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    searchInformations.input = event.target.value;
  };

  const handleSearch = () => {
    BrandBusiness(text);
    setText('');
    setLength(5);
  };

  return (
    <div className="search">
      <div className="input-box">
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
        <button
          type="button"
          className="button-search"
          onClick={handleSearch}
        >
          Search
        </button>

      </div>
      <div className="clothes-alternatives">
        {
                Array.from({ length }, () => (
                  <Link to="/Brand" className="brand-proposition">
                    <div className="clothing-item-alternatives">
                      <img src={produit1} className="item-image-alternatives" alt="" />
                      <div className="brand-and-grade1 title-four">
                        <span className="title-brand">Shirt</span>
                      </div>
                    </div>
                  </Link>
                ))
            }
      </div>
      <div />
    </div>
  );
}

export default Search;

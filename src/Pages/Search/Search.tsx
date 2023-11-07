import * as React from 'react';
import { searchInformations } from './objects';
import {BrandByName, BrandSearchSuggestions} from '../../Business/BrandBusiness';

import './Search.css';
import { Link } from 'react-router-dom';
import { BrandModel } from '../../Models/BrandModel';
import {debounce} from "lodash";

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
  const [inputText, setInputText] = React.useState('');
  const [brands, setBrands] = React.useState([]); // BrandModel[

  const debouncedBrandByName = React.useRef(
    debounce(async (input: string) => {
        try {
            await BrandByName(input);
            const brandSuggestions: BrandModel[] = input !== '' ? await BrandSearchSuggestions(input) : [];
            setBrands(brandSuggestions);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.log("Brand not found:", error);
            } else {
                console.error("An error occurred:", error);
            }
        }
    }, 500)).current// Adjust the debounce delay as needed (e.g., 500 milliseconds)

    React.useEffect(() => {
        return () => {
            debouncedBrandByName.cancel();
        };
    }, [debouncedBrandByName]);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const input: string = event.target.value;
      const brandSuggestions: BrandModel[] = input !== '' ? await BrandSearchSuggestions(input) : [];
      setBrands(brandSuggestions);
      setInputText(input);
      await debouncedBrandByName(input);
  };

  return (
    <div className="search">
      <div className="input-box">
        <input
          className="input-search"
          type="text"
          placeholder="Find an item or brand"
          value={inputText}
          onChange={handleChange}
          style={{
            color: inputText ? 'black' : 'gray',
          }}
        />

      </div>
      <div className="search-proposition">
        {
                    brands.map((brand: BrandModel) => (
                      <Link to={`/Brand/${encodeURIComponent(brand.id)}`} className="brand-proposition">
                        <div className="brand-and-grade-search">
                          <span className="text-search title-brand">{brand.name}</span>
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

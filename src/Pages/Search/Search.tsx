import * as React from 'react';
import { searchInformations } from './objects';
import {BrandByName, BrandSearchSuggestions} from '../../Business/BrandBusiness';

import './Search.css';
import { Link } from 'react-router-dom';
import { BrandModel } from '../../Models/BrandModel';
import {debounce} from "lodash";

function Search() {
  const [inputText, setInputText] = React.useState('');
  const [brands, setBrands] = React.useState([]);

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

import * as React from 'react';
import { searchInformations } from './objects';
import { BrandByName, BrandSearchSuggestions } from '../../Business/BrandBusiness';

import './Search.css';
import { Link } from 'react-router-dom';
import { BrandModel } from '../../Models/BrandModel';

interface SearchStateProps {
  text: string;
  brands: BrandModel[];
}

function Search() {
  const initialState: SearchStateProps = {
    text: '',
    brands: [],
  };

  const [state, setState] = React.useState(initialState);
  const { text, brands } = state;

  const updateState = (newState: any) => {
    setState({ ...state, ...newState });
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const input: string = event.target.value;
    const brandSuggestions: BrandModel[] = event.target.value !== '' ? await BrandSearchSuggestions(input) : [];

    updateState({ text: input, brands: brandSuggestions });
    searchInformations.input = input;
  };

  const handleSearch = async () => {
    try {
      await BrandByName(text);
    } catch (error) {
      console.error(error);
    }

    updateState({ brands: await BrandSearchSuggestions(text) });
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
                    brands.map((brand: BrandModel) => (
                      <Link to={`/Brand/${encodeURIComponent(brand.id)}`} className="brand-proposition">
                        <div className="clothing-item-alternatives">
                          <div className="brand-and-grade-search title-four">
                            <span className="text-search title-brand">{brand.name}</span>
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

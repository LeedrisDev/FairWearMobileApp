import * as React from 'react';
import { BrandByName, BrandSearchSuggestions } from '../../Business/BrandBusiness';
import './Search.css';
import { Link } from 'react-router-dom';
import { BrandModel } from '../../Models/BrandModel';
import { debounce } from 'lodash';

function Search() {
  const [inputText, setInputText] = React.useState<string>('');
  const [brands, setBrands] = React.useState<BrandModel[]>([]);

  const debouncedBrandByName = React.useRef(
    debounce(async (input: string) => {
      try {
        await BrandByName(input);
        const brandSuggestions: BrandModel[] = input !== '' ? await BrandSearchSuggestions(input) : [];
        setBrands(brandSuggestions);
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          console.log('Brand not found:', error);
        } else {
          console.error('An error occurred:', error);
        }
      }
    }, 500),
  ).current;// Adjust the debounce delay as needed (e.g., 500 milliseconds)

  React.useEffect(() => () => {
    debouncedBrandByName.cancel();
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
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className="input-box">
        <i className='bx bx-search'></i>
        <input
          className="input-search"
          type="text"
          placeholder="Find a brand"
          value={inputText}
          onChange={handleChange}
          style={{
            color: inputText ? 'black' : 'gray',
          }}
        />

      </div>
      <div className='brands'>
        {
          brands.map((brand: BrandModel) => (
            <Link to={`/Brand/${encodeURIComponent(brand.id)}`} className="brand-proposition">
              <span className="title-brand">{brand.name}</span>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Search;

import './Home.css';
import * as React from 'react';
import ImageComponent from '../../Components/Images/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import topBrands from '../TopBrand/constantes';
import tips from '../../assets/tips-data/tips-list';

function SliderBrand() {
  return (
    <div className="brands-grid">
      {
        Array.from({ length: 5 }, (_, i) => (
          <div className="brand-item-box">
            <Link to={`/TopBrand/${encodeURIComponent(i)}`}>
              <ImageComponent image={topBrands[i].image} />
            </Link>
          </div>
        ))
      }
    </div>
  );
}

function TipOfTheDay() {
  const index = Math.floor(Math.random() * tips.length);

  return (
    <div className="tips-text-box">
      <div className="tips-title">{tips[index].title}</div>
      <div className="tips-text">
        {tips[index].tip}
      </div>
      {
        tips[index].image ? <img src={tips[index].image} className="tips-image" alt="Item" /> : null
      }
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="header-home">
        <FontAwesomeIcon icon={faEarth} className="logo-icon-home" />
        <div className="fairwear">FairWear</div>
      </div>

      <div className="content-box">
        <div className="home-subtitle-box">
          <FontAwesomeIcon icon={faPaperclip} className="icon-home-subtitle" />
          <div className="title-two">Tip of the day</div>
        </div>
        <TipOfTheDay />
      </div>

      <div className="content-box">
        <div className="home-subtitle-box">
          <FontAwesomeIcon icon={faStar} className="icon-home-subtitle" />
          <div className="title-two">Top Brands</div>
        </div>
        <div className="top-brands-slider">
          <SliderBrand />
        </div>
      </div>
    </div>
  );
}

export default Home;

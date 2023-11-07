import './Home.css';
import * as React from 'react';
import logo from '../../assets/images/FairWear.png';
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
      <p className="tips-text">
        {tips[index].tip}
      </p>
      <div className="tips-image-box">
        {
                    tips[index].image ? <img src={tips[index].image} className="tips-image" alt="Item" /> : null
                }
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="header-home">
        <FontAwesomeIcon icon={faEarth} className="logo-icon-home" />
        <div className="hearder-home-logo-box">
          <img src={logo} alt={logo} />
        </div>
      </div>

      <div className="home-subtitle-box">
        <FontAwesomeIcon icon={faPaperclip} className="icon-home-subtitle1" />
        <div className="home-subtitle">Tip of the day</div>
      </div>

      <div className="tips">
        <div className="tips-text-box">
          <div className="tips-title">Take care of clothes</div>
          <p className="tips-text">
            Taking care of our clothes is a way to fight against overconsumption.
            This includes washing your clothes! So do not hesitate to
            look at their label to know how many degrees your clothes can be
            wash according to their materials!
          </p>
          <div className="tips-image-box">
            <img src={tips} className="tips-image" alt="Item" />
          </div>
        </div>
      </div>

      <div className="box-top-brand">
        <div className="home-subtitle-box">
          <FontAwesomeIcon icon={faStar} className="icon-home-subtitle2" />
          <div className="home-subtitle">Top Brands</div>
        </div>
        <div className="top-brands-slider">
          <SliderBrand />
        </div>
      </div>
    </div>
  );
}

export default Home;

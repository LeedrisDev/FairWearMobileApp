import './Home.css';
import * as React from 'react';
import logo from '../../assets/FairWear.png';
import tips from '../../assets/imageTips.png';
import ImageComponent from '../../Components/Images/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import topBrands from '../TopBrand/constantes';

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
        <div className="home-subtitle">Today&apos;s tips</div>
      </div>

      <div className="tips">
        <div className="tips-text-box">
          <div className="tips-title">L&apos;entretien d&apos;un vêtement</div>
          <p className="tips-text">
            Prendre soin de nos vêtements est un moyen de lutter contre la surconsommation.
            Cela passe notamment par le lavage de vos vêtements ! Alors n&apos;hésitez pas à
            regarder leur étiquette pour savoir à combien de degrés vos vêtements peuvent se
            laver en fonction de leurs matières !
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

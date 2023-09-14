import './Home.css';
import * as React from 'react';
import tips from '../../assets/imageTips.png';
import ImageComponent from '../../Components/Images/Image';
import { Link } from 'react-router-dom';
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
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className="header-home">
        <i class='bx bx-world bx-lg logo-icon-home'></i>
        <div className="header-home-fairwear">
          FairWear
        </div>
      </div>

      <div className="home-subtitle-box">
        <i class='bx bx-bulb bx-sm'></i>
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
          <i class='bx bx-star bx-sm'></i>
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

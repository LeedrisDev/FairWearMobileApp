import './Home.css';
import * as React from 'react';
import ImageComponent from '../../Components/Images/Image';
import { Link } from 'react-router-dom';
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
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className="header-home">
        <i className='bx bx-world fairwear'></i>
        <div className="fairwear">FairWear</div>
      </div>

      <div className="content-box-home">
        <div className="home-subtitle-box">
          <i className='bx bx-bulb icon'></i>
          <div className="title-two">Tip of the day</div>
        </div>
        <TipOfTheDay />
      </div>

      <div className="content-box-home">
        <div className="home-subtitle-box">
          <i className='bx bx-star icon'></i>
          <div className="title-two">Top brands</div>
        </div>
        <div className="top-brands-slider">
          <SliderBrand />
        </div>
      </div>
    </div>
  );
}

export default Home;

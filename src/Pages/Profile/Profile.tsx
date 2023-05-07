import './Profile.css';
import '../../App.css';
import { useNavigate } from "react-router-dom";
import profilePicture from '../../Images/profilePic.jpg';
import beanie from '../../Images/beanie.jpeg';
import shirt from '../../Images/shirt.jpeg';
import jeans from '../../Images/jeans.jpeg';
import globe from '../../Images/globe.png';

function Profile() {
    let navigate = useNavigate();

    return (
        <div className="App">
            <button className='settings' onClick={() => { navigate('Settings') }}>S</button>
            <div className='profile'>
                <img src={profilePicture} className='profile-picture' />
                <div className='title-one'>Margaux</div>
            </div>
            <div className='content'>
                <div className='category'>
                    <div className='box-header'>
                        <span className='title-two'>History</span>
                        <span className='action'>See all</span>
                    </div>
                    <div className='box'>
                        <div className='clothes'>
                            <div className='clothing-item'>
                                <img src={shirt} className='item-image' />
                                <div className='brand-and-grade title-four'>
                                    <span>Shirt</span>
                                    <span className='fairscore'><img src={globe} width={15} /> 4</span>
                                </div>
                            </div>
                            <div className='clothing-item'>
                                <img src={beanie} className='item-image' />
                                <div className='brand-and-grade title-four'>
                                    <span>Beanie</span>
                                    <span className='fairscore'><img src={globe} width={15} /> 4</span>
                                </div>
                            </div>
                            <div className='clothing-item'>
                                <img src={jeans} className='item-image' />
                                <div className='brand-and-grade title-four'>
                                    <span>Jeans</span>
                                    <span className='fairscore'><img src={globe} width={15} /> 4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='category'>
                    <div className='box-header'>
                        <span className='title-two'>Stats</span>
                    </div>
                    <div className='box'>
                        <div className='clothes'>
                            Coming soon
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile

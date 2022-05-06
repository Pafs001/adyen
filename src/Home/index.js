import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css';
import Logo from '../assets/home/LOGOADYEN.svg'
import homevideo from '../assets/videos/mov_bbb.mp4'
export default function Home() {
  let navigate = useNavigate();
  return (
    <div className='content secondary-bg'>
      <div className='text-home-top'>
        <span className='span-bold'>casa <span className='color-primary span-light'>adyen</span></span>
      </div>
      

      <div>
        <video width="800" autoPlay onEnded={() => navigate("/gravador")}>
          <source src={homevideo} type="video/mp4" />
        </video>
      </div>
      
      <div className='text-home-bottom color-primary'>
        Como você imagina o futuro dos pagamentos?
      </div>
      <div>
        <img className='logo-adyen' src={Logo} alt="Adyen" />
      </div>
    </div>
  )
}

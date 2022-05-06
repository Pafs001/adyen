import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css';
import LogoTop from '../assets/home/TELA 1.svg'
import homevideo from '../assets/videos/mov_bbb.mp4'
export default function Home() {
  let navigate = useNavigate();
  return (
    <div className='content green-bg'>
      <div>
        <h1>Como você imagina o futuro dos pagamentos?</h1>
      </div>

      <div>
        <video width="800" autoPlay onEnded={() => navigate("/adyen")}>
          <source src={homevideo} type="video/mp4" />
        </video>
      </div>
      
      <div>
        adyen
      </div>
    </div>
  )
}

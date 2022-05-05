import React from 'react';
import './styles.css';
import LogoTop from '../assets/home/TELA 1.svg'

export default function Home() {
  return (
    <div className='my-content'>
      <div >
        <img className='logo-top' src={LogoTop} alt="alt" />
      </div>
    </div>
  )
}

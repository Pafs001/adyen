import React from 'react'
import LogoTop from '../assets/home/TELA 4.svg';
import './appreciate.css';
import { useNavigate } from "react-router-dom";
export default function Agradecemos() {
  let navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/adyen");
    }, 10000);
  }, []);
  return (
    <div className='my-bg'>
      <img className='logo-body' src={LogoTop} alt="alt" />
    </div>
  )
}

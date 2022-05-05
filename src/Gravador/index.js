import React from 'react'
import { Link } from 'react-router-dom';

export default function Gravador() {
  return (
    <div className='content green-bg'>
      <div className='row'>
        <div className='recorder-box'>
          <Link to="/depoimento" className='button'>Gravar depoimento</Link>
          <div className='box-text'>
            Como serão os pagamentos do futuro? Divida a sua opinião com a gente em até 1 minuto.
          </div>        
        </div>
        <div className='recorder-box'>
          <Link to="/agradecemos" className='button'>Gravar palavras-chave</Link>
          <div className='box-text'>
            O que você pensa sobre os pagamentos do futuro? Compartilhe as palavras que vem a sua cabeça.
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';

export default function Gravador() {
  return (
    <div className='content primary-bg '>
      <div className='row'>
        <div className='recorder-box'>
          <Link to="/depoimento" className='button'>Gravar depoimento</Link>
          <p>Como serão os pagamentos do futuro? Divida a sua opinião com a gente em até 1 minuto.</p>
        </div>
        <div className='recorder-box'>
          <Link to="/agradecemos" className='button'>Gravar palavras-chave</Link>
          <p>O que você pensa sobre os pagamentos do futuro? Compartilhe as palavras que vem a sua cabeça.</p>
        </div>
      </div>
    </div>
  )
}

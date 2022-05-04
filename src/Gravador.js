import React from 'react'
import { Link } from 'react-router-dom';

export default function Gravador() {
  return (
    <div>
      <div>
        <div>
          <Link to="/agradecemos">Gravar depoimento</Link>
          <p>Como serão os pagamentos do futuro? Divida a sua opinião com a gente em até 1 minuto.</p>
        </div>
        <div>
          <Link to="/agradecemos">Gravar palavras-chave</Link>
          <p>O que você pensa sobre os pagamentos do futuro? Compartilhe as palavras que vem a sua cabeça.</p>
        </div>
      </div>
    </div>
  )
}

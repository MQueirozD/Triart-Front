import React from 'react'
import './Sobre.css';

function Sobre() {
  return (
    
    // <h2>cursos de artesanato e eventos culturais</h2>
    // <h2>CUIDAR DAS PESSOAS!
    // É dar acesso à arte, conhecimento, dignidade, alegria e a perspectiva de uma vida melhor, mais leve e consciente.</h2>
    // <h3>Venha para a Arttere
    // Arttere é um espaço gratuito criado para todos os profissionais envolvidos no amplo universo das artes, possibilitando que as pessoas exponham seus trabalhos e perfis livremente.
    
    // É também um centralizador de atividades culturais com agenda de eventos, informações sobre museus, galerias e fundações e oportunidades no mundo artístico como concursos, salões, exposições, leilões, entre outros.</h3>
  
    /* Inserir um campo para falar sobre o objetivo */
<body>
<section className='nossaMissao'>

<h1 className='h1textPlace'>Tribo Artesão - A Tribo da COMUNIDADE</h1>

  <div className='logoSobre'>
    <img src="https://i.imgur.com/UDBIW93.png" alt="Tribo Artesão" />
  </div>

<div className='TextLogo'>



  <h2 className='h2nossaMissao'>NOSSA MISSÃO:</h2>

  <div className='textlogo'>
  <h6>
    O E-commerce Tribo Arteão é uma organização sem fins lucrativos
    para o desenvolvimento cultural e artístico.

    A plataforma é um espaço gratuito criado para todos
    os profissionais envolvidos no amplo universo das artes, possibilitando
    que as pessoas exponham seus trabalhos e perfis livremente.

    É também um centralizador de atividades culturais, 
    informações sobre museus, galerias e fundações e oportunidades no mundo artístico como concursos, 
    salões, exposições, leilões, entre outros.

    Se você quer expor suas obras e trabalhos, divulgar sua galeria ou acompanhar o universo 
    das artes CADASTRE-SE e seja também parte nosso TIME.
    </h6>
  </div>
  </div>
  <div className='textPlace'>
  <h2 className='h2titleCarousel'>Conheça os espaços de arte gratuitos</h2>
  <h4 className='h6textPlace'>Acesse as informações de galerias de arte contemporânea, museus e fundações de arte</h4>
  </div>

  <main className='carousel-main'> 
<div className="container">
  <div className="carousel">
    {/* AMANHÃ INSERIR A TAG <A> PARA TODOS OS SPAN DE ACORDO COM O LINK DE CADA LOCAL DO CAROUSEL  */}
    <div className="carousel__face"><span> <a href="https://pinacoteca.org.br/">Pinacoteca</a></span></div>
    <div className="carousel__face"><span>Masp</span></div>
    <div className="carousel__face"><span>Red Bull Station</span></div>
    <div className="carousel__face"><span>Lasar Segal</span></div>
    <div className="carousel__face"><span>CCBB</span></div>
    <div className="carousel__face"><span>Sesc 24 de maio</span></div>
    <div className="carousel__face"><span>Farol Santander</span></div>
    <div className="carousel__face"><span>Espaço Porto Seguro</span></div>
    <div className="carousel__face"><span>Biblioteca Mário de Andrade</span></div>
  </div>
</div>
</main>

  </section>




</body>

 


  )
}

export default Sobre
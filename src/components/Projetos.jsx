import React from 'react';
import projeto1 from '../assets/projeto1.png';
import projeto2 from '../assets/projeto2.png';
import projeto3 from '../assets/projeto3.png';

const Projetos = () => (
  <section id="projetos" className="mb-xl">
    <h2 className="secondary-title mb-m">Projetos Recentes</h2>
    <div className="projetos-grid">
      <div className="projeto-item">
        <img src={projeto1} alt="Projeto 1" />
        <div className="projeto-info">
          <h3>Utopia</h3>
          <p>Este projeto é uma landing page dedicada ao álbum "Utopia" do rapper Travis Scott. A página inclui uma seção animada de boas-vindas, um reprodutor de música integrado e um navbar com links relevantes. O objetivo é criar uma página visualmente atraente e funcional para promover o álbum e a turnê do artista.</p>
        </div>
      </div>
      <div className="projeto-item">
        <img src={projeto2} alt="Projeto 2" />
        <div className="projeto-info">
          <h3>Pókedex</h3>
          <p>O código usa a PokeAPI para buscar e exibir informações de Pokémon em uma página HTML. Com um formulário e botões para navegação, ele atualiza a exibição com os dados recebidos da API. Funções assíncronas são usadas para buscar e renderizar as informações, e event listeners gerenciam a navegação entre Pokémon.</p>
        </div>
      </div>
      <div className="projeto-item">
        <img src={projeto3} alt="Projeto 3" />
        <div className="projeto-info">
          <h3>One Piece Film: Red</h3>
          <p>A landing page foi desenvolvida para promover o filme *One Piece Film: Red*, com foco em interatividade e responsividade. Utiliza HTML, CSS e JavaScript para criar uma apresentação visual atraente. O JavaScript implementa um modal que exibe um vídeo ao clicar em um botão e o fecha com outro botão, oferecendo uma navegação fluida e intuitiva.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Projetos;

import React from 'react';
import minhaFoto from '../assets/GuAraujo.jpg'; 

const SobreMim = () => (
  <section id="sobre" className="about">
    <div className="about__left">
      <h2 className="secondary-title">Sobre mim</h2>
      <p>
        Desenvolvedor Front-End com experiência intermediária nas tecnologias JavaScript, TypeScript, Node e React. Sou estudante de Análise e Desenvolvimento de Sistemas pela Universidade Nove de Julho. Além disso, sou apaixonado por criar soluções tecnológicas que resolvem problemas reais e que agregam valor aos usuários.
      </p>
    </div>
    <div className="about__right">
      <img src={minhaFoto} alt="Minha foto" className="minha-foto" />
    </div>
  </section>
);

export default SobreMim;


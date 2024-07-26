import React from 'react';
import Header from './components/Header';
import SobreMim from './components/SobreMim';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import RedesSociais from './components/RedesSociais';
import Footer from './components/Footer';
import './index.css';

const App = () => (
  <div className="max-width">
    <Header />
    <main>
      <section id="about">
        <SobreMim />
      </section>
      <section id="habilidades">
        <Habilidades />
      </section>
      <section id="projetos">
        <Projetos />
      </section>
      <section id="redes-sociais">
        <RedesSociais />
      </section>
    </main>
    <Footer />
  </div>
);

export default App;
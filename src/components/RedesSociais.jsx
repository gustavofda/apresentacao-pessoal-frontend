import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Biblioteca de ícones

const RedesSociais = () => (
  <section id="redes-sociais" className="redes-sociais mb-xl">
    <h2 className="secondary-title mb-m">Redes Sociais</h2>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/gustavofda" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <p>LinkedIn</p>
      </li>
      <li>
        <a href="https://github.com/gustavofda" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <p>GitHub</p>
      </li>
      <li>
        <a href="https://twitter.com/haoshuku" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <p>Twitter</p>
      </li>
    </ul>
  </section>
);

export default RedesSociais;
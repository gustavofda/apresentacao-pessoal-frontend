import React from 'react';
import { FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';
import { DiGit } from 'react-icons/di';
import typescriptIcon from '../assets/typescript.svg';

const Habilidades = () => (
  <section id="habilidades">
    <h2 className="habilidades-title">Habilidades</h2>
    <div className="habilidades-list">
      <div className="habilidades-item">
        <FaJsSquare />
        <span>JavaScript</span>
      </div>
      <div className="habilidades-item">
        <DiGit />
        <span>Git</span>
      </div>
      <div className="habilidades-item">
        <FaReact />
        <span>React</span>
      </div>
      <div className="habilidades-item">
        <FaGithub />
        <span>GitHub</span>
      </div>
      <div className="habilidades-item">
        <img 
          src={typescriptIcon} 
          alt="TypeScript" 
        />
        <span>TypeScript</span>
      </div>
    </div>
  </section>
);

export default Habilidades;
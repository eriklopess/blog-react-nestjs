import React from 'react';
import './style.css';

export default function index() {
  return (
    <div className="banner">
      <div className="banner--text--container">
        <div className="banner--text">
          <h1>Titulo</h1>
          <h2>Subtitulo</h2>
        </div>
      </div>
      <div className="banner--linear" />
    </div>
  );
}

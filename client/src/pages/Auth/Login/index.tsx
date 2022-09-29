import React from 'react';
import './style.css';

export default function index() {
  return (
    <div className="login">
      <form method="post" className="login--form">
        <label htmlFor="email" className="login--form-label">
          Email:
          <input type="text" autoComplete="off" />
        </label>
        <label htmlFor="password" className="login--form-label">
          Password:
          <input type="password" autoComplete="off" />
        </label>
        <button type="submit" className="login--form-submit">Entrar</button>
      </form>
    </div>
  );
}

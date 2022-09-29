import React from 'react';
import './style.css';

export default function index() {
  return (
    <div className="card">
      <div className="card--image" />
      <div className="card--container--text">
        <div className="card--title">
          <h2>Card Title</h2>
        </div>
        <div className="card--subtitle">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
        <div className="card--category">
          <p>Category</p>
        </div>
      </div>
    </div>
  );
}

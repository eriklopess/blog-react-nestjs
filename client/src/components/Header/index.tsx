import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default function index() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="header">
      <div className="header--logo" />
      <div className="header--search">
        <form action="POST" className="header--search--form" onSubmit={handleSubmit}>
          <label htmlFor="search" className="header--search--form--label">
            <input type="text" placeholder="Search" autoComplete="off" name="search" />
          </label>
          <button type="submit" name="submit" className="header--search--form--submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      <div className="header--user" />
    </div>
  );
}

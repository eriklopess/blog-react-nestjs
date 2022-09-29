import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import CardRow from '../../components/CardList';

export default function index() {
  return (
    <>
      <Header />
      <div className="home">
        <Banner />
        <CardRow />
      </div>
    </>
  );
}

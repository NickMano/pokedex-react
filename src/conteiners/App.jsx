import React from 'react';
import '../assets/styles/App.scss';
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";

const card = {link: '#', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', number: '001', name: 'Bulbasaur'}

const App = () => (
  <div>
    <Header />
    <Search />
    <Card {...card} />
    <Card {...card} />
    <Card {...card} />
  </div>
)

export default App;

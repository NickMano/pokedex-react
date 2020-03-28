import React from 'react';
import '../assets/styles/App.scss';
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import CardConteiner from "../components/CardConteiner";
import usePokemon from '../hooks/usePokemon';

const API = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'

const App = () => (
  <div>
    <Header />
    <Search />
    <CardConteiner>
      {usePokemon(API).map( card => <Card key={card.title} {...card}/>)}
    </CardConteiner>
  </div>
)

export default App;

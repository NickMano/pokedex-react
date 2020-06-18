import React from 'react';
import '../assets/styles/App.scss';
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import CardConteiner from "../components/CardConteiner";
import usePokemons from '../hooks/usePokemons';

const API = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'

const Home = () => (
  <>
    <Header />
    <Search />
    <CardConteiner>
      {usePokemons(API).map( card => <Card key={card.name} {...card}/>)}
    </CardConteiner>
  </>
)

export default Home;

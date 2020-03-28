import React from 'react';
import '../assets/styles/App.scss';
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import CardConteiner from "../components/CardConteiner";

let i = 0
const card = () => {
  i = i +1
  let n = '00' + i
  n = n.slice(-3)
  return{link: '#', imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${n}.png`, number: `${n}`, name: 'Bulbasaur'}
}

const App = () => (
  <div>
    <Header />
    <Search />
    <CardConteiner>
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
      {<Card {...card()} />}
    </CardConteiner>
  </div>
)

export default App;

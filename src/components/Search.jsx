import React from 'react'
import '../assets/styles/components/Search.scss'

const Search = () => (
    <section className="search">
        <h2 className="search__title">¿Que pokémon buscas?</h2>
        <input type="text" className="search__input" placeholder="Buscar..." />
    </section>
)

export default Search
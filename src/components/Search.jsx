import React from 'react'
import '../assets/styles/components/Search.scss'

const Search = () => (
    <section className="search">
        <h2 className="search__title">What pokémon are you looking for?</h2>
        <input type="text" className="search__input" placeholder="Search..." />
    </section>
)

export default Search
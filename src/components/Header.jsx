import React from "react"
import "../assets/styles/components/Header.scss";
import logo from '../assets/static/pokeball.png'

const Header = () => (
    <header className='header'>
        <img className='header__image' src={logo} alt='header' />
        <h1 className='header__title'>Pokédex</h1>
    </header>
)

export default Header
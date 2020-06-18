import React from "react"
import {Link} from "react-router-dom"
import "../assets/styles/components/Header.scss";
import logo from '../assets/static/pokeball.png'

const Header = props => {
    const { isCompact } = props
    const headerClass = isCompact ? 'header isCompact' : 'header'

    return(
        <header className={headerClass}>
            {isCompact ?
                <Link to='/' className='flex-center' style={{textDecoration: 'none', color: 'white'}}>
                    <img className='header__image' src={logo} alt='header' />
                    <h1 className='header__title' style={{cursor: 'pointer'}}>Pokédex</h1>
                </Link>
                :
                <>
                    <img className='header__image' src={logo} alt='header' />
                    <h1 className='header__title'>Pokédex</h1>
                </>
            }
        </header>
    )
}

export default Header
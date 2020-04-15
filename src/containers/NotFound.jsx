import React from "react"
import Header from "../components/Header";
import psyduck from '../assets/static/psyduck.png'
import '../assets/styles/components/NotFound.scss'

const NotFound = () => (
    <>
        <Header isCompact/>
        <div className='not-found'>
            <img src={psyduck} alt='psyduck' />
            <h1>Página no encontrada.</h1>
        </div>
    </>
)

export default NotFound
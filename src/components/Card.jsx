import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {setLastPokemon} from "../actions"
import useGetTypes from '../hooks/useGetTypes';
import '../assets/styles/components/Card.scss'

const Card = props => {
    const {imageUrl, number='---', name = '', types = []} = props

    const images = useGetTypes(types)

    const handleSetLastPokemon = () => {
        props.setLastPokemon(
            {imageUrl, number, name, types}
        )
    }

    return(
    <Link className="card" to={{pathname: `/pokemon/${name}`}} onClick={() => handleSetLastPokemon()}>
        <figure className="card__imageContainer">
            <img className="card__imageContainer--image" src={imageUrl} alt={name} />
        </figure>
        <div className="card__details">
            <h3 className="card__title">{name}</h3>
            <h4 className="card__number"># {number}</h4>
            {(images.length > 0) && <figure className="card__type-container">
                {images.map( type => <img key={type.name} className="card__type-container--image" src={type.img} alt={type.name} />)}    
            </figure>}
        </div>
    </Link>
)}

const mapDisptchToProps = {
    setLastPokemon,
}


export default connect(null, mapDisptchToProps)(Card)
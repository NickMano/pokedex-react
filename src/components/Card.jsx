import React from "react";
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
    <a className="card" href={link}>
        <figure className="card__imageContainer">
            <img className="card__imageContainer--image" src={imageUrl} alt={name} />
        </figure>
        <div className="card__details">
            <h3 className="card__title">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <h4 className="card__number"># {number}</h4>
            {(images.length > 0) &&<figure className="card__type-container">
                {images.map( type => <img className="card__type-container--image" src={type.img} alt={type.name} />)}    
            </figure>}
        </div>
    </a>
)}



export default Card
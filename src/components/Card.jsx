import React from "react";
import '../assets/styles/components/Card.scss'

const Card = ({link, imageUrl, number, name}) => {
    console.log({link})
    return(
    <a className="card" href={link}>
        <figure className="card__imageContainer">
            <img className="card__imageContainer--image" src={imageUrl} alt={name} />
        </figure>
        <div className="card__details">
            <h3 className="card__title">{name}</h3>
            <h4 className="card__number"># {number}</h4>
        </div>
    </a>
    )
}


export default Card
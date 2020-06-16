import React from "react"
import {connect} from "react-redux"
import Header from "../components/Header";
import useGetTypes from '../hooks/useGetTypes';
import '../assets/styles/components/PokemonDetails.scss'

const PokemonPage = ({pokemon}) => {
    const {imageUrl, number, name, types = []} = pokemon

    const images = useGetTypes(types)
    
    return(
    <>
        <Header isCompact/>
        <div style={{width: '100%', display: 'flex', justifyContent:'center', alignItems:'center'}} >
            <h1>#{number} - {name}&nbsp;</h1> 
            {(images.length > 0) &&
                images.map( type => <img className="pokemon-detail__image-type" src={type.img} alt={type.name}/>)   
            }
        </div>
        <div className='grid-container'>
            <div className='foto'>
                <img 
                    src={imageUrl} 
                    alt='pokemon'
                    style={{maxHeight:'96%', maxWidth:'96%', objectFit: 'contain'}}
                />
            </div>
            <div className='puntos'>
                <h2>Puntos de Base</h2>
                <h3 style={{margin:'10px 0'}}>PS: 106</h3>
                <h3 style={{margin:'10px 0'}}>Ataque: 110</h3>
                <h3 style={{margin:'10px 0'}}>Defensa: 90</h3>
                <h3 style={{margin:'10px 0'}}>Ataque especial: 154</h3>
                <h3 style={{margin:'10px 0'}}>Defensa especial: 90</h3>
                <h3 style={{margin:'10px 0'}}>Velocidad: 130</h3>
            </div>
            <div className='datos'>
                <div style={{width: '100%',
                 display:'flex',
                 justifyContent:'space-evenly'}}
                >
                    <h3 style={{width:'30%', textAlign:'center', fontWeight: 'bold'}}>Peso</h3>
                    <h3 style={{width:'30%', textAlign:'center', fontWeight: 'bold'}}>Altura</h3>
                    <h3 style={{width:'30%', textAlign:'center', fontWeight: 'bold'}}>Habilidad</h3>
                </div>
                <div style={{width: '100%',
                 display:'flex',
                 justifyContent:'space-evenly',
                 alignItems:'center'}}
                >
                    <h3 style={{width:'30%', textAlign:'center'}}>122 Kg</h3>
                    <h3 style={{width:'30%', textAlign:'center'}}>2 m</h3>
                    <h3 style={{width:'30%', textAlign:'center'}}>Presion</h3>
                </div>
            </div>
            <div className='tipo-debilidades'>
                <h3 style={{fontWeight: 'bold'}}>Debilidades</h3>
                <div style={{width: '100%',
                 display:'flex',
                 justifyContent:'space-evenly',
                 alignItems:'center',
                 flexWrap: 'wrap'}}
                >
                    <img className="card__type-container--image" src={require('../assets/static/ghost.png')} alt='psychic' style={{height:'36px'}}/>
                    <img className="card__type-container--image" src={require('../assets/static/dark.png')} alt='psychic' style={{height:'36px'}}/>
                    <img className="card__type-container--image" src={require('../assets/static/bug.png')} alt='psychic' style={{height:'36px'}}/>
                </div>
            </div>
        </div>
    </>
)}

const mapStateToProps = state => {
    return {
        pokemon: state.lastPokemon,
    }
}

export default connect(mapStateToProps, null)(PokemonPage)
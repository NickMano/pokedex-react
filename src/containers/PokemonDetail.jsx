import React from "react"
import Header from "../components/Header";
import useGetTypes from '../hooks/useGetTypes';
import usePokemon from '../hooks/usePokemon';
import '../assets/styles/components/PokemonDetail.scss'
import { toCapitalized } from "../Utills";
import NotFound from "./NotFound";

const PokemonDetail = props => {
    const pokemon = usePokemon(props.match.params.id)
    const {imageUrl, number, types = [], weight = '-', height = '-', ability = '-', stats, weaknesses = []} = pokemon
    const images = useGetTypes(types)

    if (pokemon.hasError) 
        return (<NotFound />)
    else
        return(
        <>
            <Header isCompact/>
            <div style={{width: '100%', display: 'flex', justifyContent:'center', alignItems:'center'}} >
                <h1>#{number} - {props.match.params.id}&nbsp;</h1> 
                {(images.length > 0) &&
                    images.map( type => <img key={type.name} className="pokemon-detail__image-type" src={type.img} alt={type.name}/>)   
                }
            </div>
            <div className='grid-container'>
                <div className='image-pokemon-container'>
                    <img 
                        src={imageUrl} 
                        alt={props.match.params.id}
                        style={{objectFit: 'contain', width: '100%'}}
                    />
                </div>
                <div className='stats'>
                    <h2>Stats</h2>
                    {stats 
                    ? stats.map( stat => <h3 key={stat.stat.name} style={{margin:'10px 0'}}>{toCapitalized(stat.stat.name)}: {stat.base_stat}</h3>)
                    : null}
                </div>
                <div className='datos'>
                    <div style={{width: '100%',
                    display:'flex',
                    justifyContent:'space-evenly'}}
                    >
                        <h3 className='width30-text-center--bold'>Weight</h3>
                        <h3 className='width30-text-center--bold'>Height</h3>
                        <h3 className='width30-text-center--bold'>Ability</h3>
                    </div>
                    <div style={{width: '100%',
                    display:'flex',
                    justifyContent:'space-evenly',
                    alignItems:'center'}}
                    >
                        <h3 className='width30-text-center'>{weight} Kg</h3>
                        <h3 className='width30-text-center'>{height} m</h3>
                        <h3 className='width30-text-center'>{ability}</h3>
                    </div>
                </div>
                <div className='tipo-debilidades'>
                    <h3 style={{fontWeight: 'bold'}}>Weaknesses</h3>
                    <div style={{width: '100%',
                    display:'flex',
                    justifyContent:'space-evenly',
                    alignItems:'center',
                    flexWrap: 'wrap'}}
                    >
                        {weaknesses.map( weakness => <img key={weakness} className="card__type-container--image" src={require(`../assets/static/${weakness}.png`)} alt={weakness} style={{height:'36px'}}/>)}
                    </div>
                </div>
            </div>
        </>
)}

export default PokemonDetail
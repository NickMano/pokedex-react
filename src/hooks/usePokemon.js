import {useEffect, useState} from 'react'
import { toCapitalized } from '../Utills'

const API = 'https://pokeapi.co/api/v2/pokemon/'

const usePokemon = (pokemonName) => {
    
    const [info, setInfo] = useState([])
    useEffect( () => {
        getInfo(API + pokemonName.toLowerCase(), pokemonName)
        .then(data => {
            setInfo(data)
        })
    }, [pokemonName])
    return info
}

const getInfo = async (endpoint) => {
    let pokemon = []
    try{
        const response = await fetch(endpoint)
        const pkm = await response.json()
            
        const number = ('00' + pkm.id).slice(-3)
        const types = pkm.types.map( type => type.type.name)

        pokemon = { 
            imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`, 
            number: number, 
            types: types,
            weight: (pkm.weight)/10.0,
            height: (pkm.height)/10.0,
            ability: toCapitalized(pkm.abilities[0].ability.name),
            stats: pkm.stats,
        }
            
    } catch (error) {
        console.log(error)
    } 
    return pokemon
    
}

export default usePokemon
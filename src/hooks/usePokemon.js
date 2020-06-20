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
        const types = pkm.types.map( type => type.type.name )
        const typesInfo = await getTypesInfo(pkm.types)
        const weaknesses = getWeaknesses(typesInfo)

        pokemon = { 
            imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`, 
            number: number, 
            types: types,
            weight: (pkm.weight)/10.0,
            height: (pkm.height)/10.0,
            ability: toCapitalized(pkm.abilities[0].ability.name),
            stats: pkm.stats,
            weaknesses: weaknesses
        }
            
    } catch (error) {
        pokemon = { hasError: true}
        console.log(error)
    } 
    return pokemon
    
}

const getTypesInfo = async (types) => {
    let info = types.map (
        async type => {
            let response = await fetch(type.type.url)
            let data = await response.json()
            return data.damage_relations
        }
    )
    
    return await Promise.all(info)
}

const getWeaknesses = info => {
    const weaknessesPerType = info.map( typeInfo => typeInfo.double_damage_from).flat().map(weakness => weakness.name)
    const resistencePerType = info.map( typeInfo => [...typeInfo.half_damage_from.map(resistence => resistence.name), ...typeInfo.no_damage_from.map(resistence => resistence.name)]).flat()
    const weakness = weaknessesPerType.filter( item => !resistencePerType.includes(item) ) 

    return [...new Set(weakness)]
}

export default usePokemon
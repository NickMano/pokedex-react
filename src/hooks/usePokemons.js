import {useEffect, useState} from 'react'
import { toCapitalized } from '../Utills'

const usePokemons = (API) => {
    
    const [cards, setCards] = useState([])
    useEffect( () => {
        getPkm(API)
        .then(data => {
            setCards(data)
        })
    }, [API])
    return cards
}

const getPkm = async (API) => {
    let pokemons= []
    try{
        const response = await fetch(API)
        const data = await response.json()

        pokemons = await data.results.map( async pkms => {
            try {let response = await fetch(pkms.url)
            let pkm = await response.json()
            
            let number = '00' + pkm.id
            number = number.slice(-3)

            let types = pkm.types.map( type => type.type.name)

            return({
                imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`,
                number: number, 
                name: toCapitalized(pkm.name), 
                types: types
                })
            } catch (error) {
                console.log(error)
            }
        })

        pokemons = await Promise.all(pokemons)
        return pokemons
    } catch (error) {
        console.log(error)
    } finally {
        return pokemons
    }
    
}

export default usePokemons
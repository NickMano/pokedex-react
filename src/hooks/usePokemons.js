import {useEffect, useState} from 'react'
import { toCapitalized, getData } from '../Utills'

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
        const data = await getData(API)

        pokemons = await data.results.map( async pkms => {
            try {let pkm = await getData(pkms.url)
            
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
import {useEffect, useState} from 'react'

const usePokemon = (API) => {
    
    const [cards, setCards] = useState([])
    useEffect( () => {
        getPkm(API)
        .then(data => {
            console.log('pokemons: ')
            console.log(data)
            setCards(data)
        })
    }, [])
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
            
            let n = '00' + pkm.id
            n = n.slice(-3)
            return({link: '#', imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${n}.png`, number: n, name: pkm.name.charAt(0).toUpperCase() + pkm.name.slice(1)})
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

export default usePokemon
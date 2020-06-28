const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_POKEMONS':
            return {
                ...state,
                pokemons: state.pokemons + action.payload
            }
        case 'SET_LAST_POKEMON':
            return {
                ...state,
                lastPokemon: action.payload
            }
        default: return state
    }
}

export default reducer
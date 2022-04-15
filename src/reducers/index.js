const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_DELETED':
            const deleteHero = state.heroes.filter(data => data.id != action.payload)
            return {
                ...state,
                heroes: deleteHero
            }
        case 'HEROES_CREATE':
            const newCreateList = [...state.heroes, action.payload];
            return {
                ...state,
                heroes: newCreateList
            }
        case 'FILTERED':
            switch (action.payload) {
                case 'all':
                    return state
                case 'fire':
                    const heroFire = state.heroes.filter(data => data.element === 'fire')
                    return {
                        ...state,
                        heroes: heroFire
                    }
                case 'water':
                    const heroWater = state.heroes.filter(data => data.element === 'water')
                    return {
                        ...state,
                        heroes: heroWater
                    }
                case 'wind':
                    const heroWind = state.heroes.filter(data => data.element === 'wind')
                    return {
                        ...state,
                        heroes: heroWind
                    }
                case 'earth':
                    const heroEarth = state.heroes.filter(data => data.element === 'earth')
                    return {
                        ...state,
                        heroes: heroEarth
                    }
            }
        default: return state
    }
}

export default reducer;
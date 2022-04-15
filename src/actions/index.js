export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroDelete = (id) => {
    return {
        type: "HEROES_DELETED",
        payload: id
    }
}

export const heroCreate = (newHero) => {
    return {
        type: "HEROES_CREATE",
        payload: newHero
    }
}

export const filterHeroes = (id) => {
    return {
        type: 'FILTERED',
        payload: id
    }
}
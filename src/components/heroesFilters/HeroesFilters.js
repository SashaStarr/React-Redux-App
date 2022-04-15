import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterHeroes, heroesFetched, heroesFetchingError, heroesFetching } from '../../actions';
import { useHttp } from "../../hooks/http.hook";


const HeroesFilters = () => {

    const [filtr, setFiltr] = useState('all');

    const dispatch = useDispatch();

    const { request } = useHttp();

    useEffect(() => {
        dispatch(filterHeroes(filtr))
    }, [filtr])


    const onFilterHero = async (e) => {
        dispatch(heroesFetching());
        await request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
        setFiltr(e.target.value)

    }

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Фільтр</p>
                <div className="btn-group">
                    <button className="btn btn-outline-dark active" value='all' onClick={(e) => onFilterHero(e)}>Все</button>
                    <button className="btn btn-danger" value='fire' onClick={(e) => onFilterHero(e)}>Вогонь</button>
                    <button className="btn btn-primary" value='water' onClick={(e) => onFilterHero(e)}>Вода</button>
                    <button className="btn btn-success" value='wind' onClick={(e) => onFilterHero(e)}>Вітер</button>
                    <button className="btn btn-secondary" value='earth' onClick={(e) => onFilterHero(e)}>Земля</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;
import { useHttp } from '../../hooks/http.hook';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { heroCreate } from '../../actions';

const HeroesAddForm = () => {

    const [heroName, setNameNewHero] = useState('');
    const [heroDescr, setHeroDescr] = useState('');
    const [heroElement, setHeroElement] = useState('');

    const dispatch = useDispatch();
    const { request } = useHttp();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const newHero = {
            id: uuidv4(),
            name: heroName,
            description: heroDescr,
            element: heroElement
        }

        request(`http://localhost:3001/heroes`, "POST", JSON.stringify(newHero))
            .then(data => console.log(data, " post"))
            .then(dispatch(heroCreate(newHero)))
            .catch(err => console.log(err))
        setNameNewHero('');
        setHeroDescr('');
        setHeroElement('');
    }

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Ім'я нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={heroName}
                    placeholder="Как меня зовут?" onChange={(e) => setNameNewHero(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Опис</label>
                <textarea
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    placeholder="Что я умею?"
                    value={heroDescr}
                    style={{ "height": '130px' }} onChange={(e) => setHeroDescr(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Вибрати елемент героя</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    value={heroElement}
                    name="element" onChange={(e) => setHeroElement(e.target.value)}>
                    <option >Я володію елементом...</option>
                    <option value="fire">Вогонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Вітер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Створити</button>
        </form>
    )
}

export default HeroesAddForm;
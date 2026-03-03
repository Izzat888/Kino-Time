import React from 'react'
import data from '../../src/data'
import "./Kino.css"

const Kino = ({ search }) => {

    const filteredData = data.filter(el =>
        el.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className='kino'>
            <div className='container'>
                <h2 className='kino__title1'>🎬 Смотрите мультфильм и получайте удовольствие!</h2>
                <ul className='kino__list'>
                    {filteredData.map(el => (
                        <li key={el.id} className='kino__item'>
                            <img className='kino__avatar' src={el.avatar} alt={el.title} />
                            <h3 className='kino__title'>{el.title}</h3>
                            <p className='kino__text'>{el.text}</p>
                            <i className='kino__text2'>{el.text2}</i>
                            <a className='kino__link' href={el.url} target="_blank">Смотреть</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Kino
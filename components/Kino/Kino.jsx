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
                <ul className='kino__list'>
                    {filteredData.map(el => (
                        <li key={el.id} className='kino__item'>
                            <img className='kino__avatar' width={300} height={150} src={el.avatar} alt={el.title} />
                            <h3 className='kino__title'>{el.title}</h3>
                            <a className='kino__link' href={el.url} target="_blank">Смотреть</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Kino
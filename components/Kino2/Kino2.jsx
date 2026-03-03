import React from 'react'
import kino from "../../src/kino"
import "./Kino2.css"
const Kino2 = ({ search }) => {

    const filteredData = kino.filter(el =>
        el.title.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className='kino2'>
        <div className='container'>
            <h2 className='kino2__title1'>🍿 Приятного просмотра и отличного настроения!</h2>
            <ul className='kino2__list'>
                {filteredData.map(el => (
                    <li key={el.id} className='kino2__item'>
                        <img className='kino2__avatar' src={el.avatar} alt={el.title} />
                        <h3 className='kino2__title'>{el.title}</h3>
                        <p className='kino2__text'>{el.text}</p>
                        <i className='kino2__text2'>{el.text2}</i>
                        <a className='kino2__link' href={el.url} target='_blank'>Смотреть</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Kino2
import React from 'react'

import sport from "../../src/sport"
import "./Sport.css"
const Sport = ({ search }) => {

    const filteredData = sport.filter(el => 
        el.title.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className='sport'>
        <div className='container'>
            <h2 className='sport__title1'>🎬 Смотрите кино и наслаждайтесь!</h2>
            <ul className='sport__list'>
                {filteredData.map(el => (
                    <li className='sport__item' key={el.id}>
                        <img className='sport__avatar' src={el.avatar} alt={el.title} />
                        <h3 className='sport__title'>{el.title}</h3>
                        <p className='sport__text'>{el.text}</p>
                        <i className='sport__text2'>{el.text2}</i>
                        <a className='sport__link' href={el.url} target='_blank'>Смотреть</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Sport
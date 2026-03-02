import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__container'>
                    <h1 className='header__title'>Мир кино начинается здесь</h1>
                    <p className='header__text'>Самые новые и популярные фильмы — всё на одной платформе</p>
                </div>
            </div>
        </header>
    )
}

export default Header
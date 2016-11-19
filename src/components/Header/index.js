import React from 'react'
import './styles.scss'

export default function(){
    return (
        <header>
            <div className="container">
                <a href="#" className="logo">
                    <img src={require('../../img/logo.png')} alt="logo"/>
                </a>
                <h1 className="header__title">
                    <span>3</span>
                    easy steps to clean your mac!
                </h1>
            </div>
        </header>
    )
}

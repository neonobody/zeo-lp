import React from 'react'
import './styles.scss'

export default function(){
    return (
        <section className="trust">
            <ul>
                <li><img src={require('../../img/cnn.png')} alt=""/></li>
                <li><img src={require('../../img/dezzain.png')} alt=""/></li>
                <li><img src={require('../../img/forbes.png')} alt=""/></li>
                <li><img src={require('../../img/machmachines.png')} alt=""/></li>
            </ul>
        </section>
    )
}

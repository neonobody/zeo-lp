import React, { Component } from 'react'
import Item from '../../components/Tool'
import './styles.scss'

export default class Tools extends Component {
  render() {
    return (
        <section className="tools">
            <h2>What we have to keep your Mac <span>clean and safe</span></h2>
            <div className="tools__container">
                <ul>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </ul>
                <div className="tools__current">
                    <div className="tools__current__title">
                        <div className="tools__current__img"></div>
                        <h3 className="tools__current__name"></h3>
                    </div>
                    <div className="tools__current__content">
                        <p></p>
                        <button className="light"></button>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

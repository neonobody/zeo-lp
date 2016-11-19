import React, { Component } from 'react'
import Item from '../../components/Review'
import './styles.scss'

export default class Reviews extends Component {
    render() {
        return (
            <section className="reviews">
                <h2>Checkout Some Reviews from our Users</h2>
                <ul>
                    <Item/>
                    <Item/>
                    <Item/>
                </ul>
            </section>
        )
    }
}

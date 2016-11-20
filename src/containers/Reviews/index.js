import React, { Component } from 'react'
import './styles.scss'

export default class Reviews extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            reviews: [
                {
                    name: "Michael T",
                    mark: 5,
                    review: ["“I just renewed my subscription with Mc. Keeper.","I like it, I feel my computer is well protected. ”"],
                    location: "Oxfordshire, United Kingdom,",
                    date: "12 May 2016"

                },{
                    name: "Michael T",
                    mark: 5,
                    review: ["“Easy to order. I had to purchase a few add-ons above and beyond what I expected, but overall, I'm very satisfied with everything.”"],
                    location: "Oxfordshire, United Kingdom,",
                    date: "12 May 2016"
                },
                {
                    name: "Michael T",
                    mark: 5,
                    review: ["“I have used Mackeeper before and I liked it and decided to come back to it.”"],
                    location: "Oxfordshire, United Kingdom,",
                    date: "12 May 2016"
                }
            ]
        };
    }
    render() {
        var markCount = '';
        for (let i = 0; i< this.props.mark; i++){
            markCount += <span/>
        }
        return (
            <section className="reviews">
                <div className="container">
                    <h2>Checkout Some Reviews from our Users</h2>
                    <ul>
                        {this.state.reviews.map(function(item, number){
                            return (<li key={number} className="review">
                                <div className="review__content">
                                    <div className="review__mark">
                                        {[...Array(item.mark)].map((x, i) =>
                                            <span className="icon-icon-star" key={i} />
                                        )}
                                    </div>
                                    {item.review.map((x, i) =>
                                        <p key={x}>{item.review[i]}</p>
                                    )}
                                </div>
                                <div className="review__info">
                                    <p className="review__info__name">{item.name}</p>
                                    <p className="review__info__location">{item.location}</p>
                                    <p className="review__info__date">{item.date}</p>
                                </div>
                            </li>)
                        }, this)}
                    </ul>
                </div>
            </section>
        )
    }
}

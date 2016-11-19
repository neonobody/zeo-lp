import React from 'react'
import './styles.scss'

export default function(){
    return (
        <section className="guide">
            <div className="container">
                <div className="guide__info">
                    <ul className="guide__info__steps">
                        <li>
                            <p><span className="icon icon-icon-1"></span>Step 1:</p><span>Click <a href="#" className="link">“Download now”</a></span>
                        </li>
                        <li>
                            <p><span className="icon icon-icon-2"></span>Step 2:</p><span> Click <strong>”Run”</strong> or <strong>“Save”</strong></span>
                        </li>
                        <li>
                            <p><span className="icon icon-icon-3"></span>Step 3:</p><span>Scan your Mac</span>
                        </li>
                    </ul>
                    <div className="download-group">
                        <a className="btn">Download now</a>
                        <a>or Click here to download</a>
                    </div>
                </div>
                <div className="guide__illustration">
                    <img src={require('../../img/guide.jpg')} alt=""/>
                    <div className="guide__illustration__info">
                        <img src={require('../../img/downloads-this-week.png')} alt="downloads this week"/>
                        <img src={require('../../img/shopper-approved.png')} alt="shopper approved"/></div>
                </div>
            </div>
        </section>
    )
}

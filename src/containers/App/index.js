import React, { Component } from 'react'
import './styles.scss'
import Header from '../../components/Header'
import Guide from '../../components/Guide'
import Trust from '../../components/Trust'
import Tools from '../../containers/Tools'
import Reviews from '../../containers/Reviews'
import Download from '../../components/Download'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Guide/>
          <Trust/>
          <Tools/>
          <Reviews/>
          <Download/>
          <Nav/>
          <Footer/>
        </div>
    )
  }
}

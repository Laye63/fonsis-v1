import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

import Menu from './Header.js'
import Contact from './Contact.js'
import Apropos from './About.js'
import Footer from './footer.js'
import Accueil from './HomePage.js'
import Equipe from './Team.js'
import Gouv from './Gouvernance'













class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home}>
        <IndexRoute component={Accueil} />
        <Route path='/apropos' component={Apropos} />
        <Route path='/equipe' component={Equipe}/>
        <Route path='/gouvernance' component={Gouv}/>
            <Route path='/contact' component={Contact}>
            <Route path='instagram' component={Instagram} />
            <Route path='/query' component={Query} />

          </Route>




          <Route path='*' component={NotFound} />
        </Route>




      </Router>
    )
  }
}

const Home = (props) => <div>


  <Menu/>
{props.children}



<div>
  <Footer/>
</div>
</div>

const LogoFons = () =>
(
  <div>
    <img src={LogoFons}/>
  </div>
)


const Query = (props) => (
  <h2>{props.location.query.message}</h2>
)

const Title = () => (
  <h1>Hello from Title Component</h1>
)

const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)










const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>


const NotFound = () => <h1>404.. This page is not found!</h1>



export default App

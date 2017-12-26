import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import logo from './assets/images/art/fonsis.png'


const Menu = () => (

  <div>
    <div className="navbar-header">
      <ul class="info pull-left">
        <li><a href="#"><i class="icon-mail-1 contact"></i> info@fonsi.org</a></li>
        <li><i class="icon-mobile contact"></i> +221 33 889 33 77</li>
        <li><a href="#"> Nos offres d'emploi</a></li>
        <li><a href="#">Médias</a></li>
        <li><a href="#">Espace Carrière</a></li>
        <li><IndexLink activeClassName='active' to='/contact'>Nous contacter</IndexLink></li>


      </ul>


      <ul class="social pull-right">
        <a href="#" class="btn">Soumettre votre projet</a>

							<li><a href="#"><i class="icon-s-facebook"></i></a></li>
							<li><a href="#"><i class="icon-s-gplus"></i></a></li>
							<li><a href="#"><i class="icon-s-twitter"></i></a></li>
							<li><a href="#"><i class="icon-s-pinterest"></i></a></li>
							<li><a href="#"><i class="icon-s-behance"></i></a></li>
							<li><a href="#"><i class="icon-s-dribbble"></i></a></li>

						</ul>






  </div>
<Navbar>
<a class="navbar-brand" href="./"><img src={logo} class="logo" alt=""/></a>

        <Nav>


        <NavDropdown title="Qui somme nous?">

          <MenuItem><Link to='/mot-du-directeur'>Mot du Directeur</Link></MenuItem>
          <MenuItem><Link to='/apropos'>Presentation</Link>&nbsp;</MenuItem>
          <MenuItem><Link to='/'>Notre mission</Link></MenuItem>
          <MenuItem><Link to='/'>Notre métier</Link></MenuItem>
          <MenuItem><Link to='/gouvernance'>Gouvernance</Link></MenuItem>
          <MenuItem><Link to='/equipe'>Notre Equipe</Link>&nbsp;</MenuItem>


          </NavDropdown>
          <NavDropdown title="Vous avez un projet?" className="second-drop">

                <MenuItem><Link to='/votre-projet' >Votre projet</Link></MenuItem>
                <MenuItem><Link to='/soumettre-votre-projet' >Soumettre un projet</Link></MenuItem>
                <MenuItem><Link to='/faq' >FAQ</Link></MenuItem>

          </NavDropdown>
          <NavDropdown title="Vous êtes investisseur?" className="third-drop">
              <MenuItem><Link to='/investir'>Investir avec nous </Link></MenuItem>
              <MenuItem><Link to='/investir-en-nous'>Investisseurs</Link></MenuItem>
              <MenuItem><Link to='/formulaire'>Formulaire</Link></MenuItem>
          </NavDropdown>
          <NavItem><i class="icon-menu"></i></NavItem>





        </Nav>
    </Navbar>


  </div>





)
export default Menu

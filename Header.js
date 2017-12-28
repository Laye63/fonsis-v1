import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { navbar, nav, navitem, menuitem, Dropdown } from 'react-bootstrap';
import logo from './assets/images/art/fonsis.png'
import dg from './assets/images/art/kane.JPG'
import parentus from './assets/images/art/parentus.jpg'
import energy from './assets/images/art/energy.jpg'
import agriculture from './assets/images/art/agriculture.jpg'
import polimed from './assets/images/art/polimed.jpg'
import boad from './assets/images/art/boad.jpg'
import maroc from './assets/images/art/maroc.jpg'


const Menu = () => (

  <div>
    <header>
      <div class="navbar">

        <div class="navbar-header">
          <div class="container">

            <ul class="info pull-left">
              <li><Link to="#"><i class="icon-mail-1 contact"></i> info@fonsi.org</Link></li>
              <li><Link to="#"><i class="icon-s-facebook"></i></Link></li>
              <li><Link to="#"><i class="icon-s-linkedin"></i></Link></li>
              <li><Link to="#"><i class="icon-s-twitter"></i></Link></li>
              <li><i class="icon-phone-1"></i> +221 33 889 33 77</li>



            </ul>

            <ul class="info pull-right">
              <li><Link to="#"> Nos offres d'emploi</Link></li>
              <li><Link to="#">Médias</Link></li>
              <li><Link to="#">Espace Carrière</Link></li>
              <li><IndexLink activeclass='active' to='/contact'>Nous contacter</IndexLink></li>
            </ul>
            <Link class="navbar-brand" to='/'><img src={logo} class="logo" alt=""/></Link>
            <Link class="navbar-toggle btn responsive-menu pull-right" data-toggle="collapse" data-target=".navbar-collapse"><i class='icon-menu-1'></i></Link>

            </div>
            </div>
            <div class="yamm">
            <div class="navbar-collapse collapse">
            <div class="container">



              <Link to='/' class="navbar-brand" ><img src={logo} class="logo" alt=""/></Link>



              <ul class="nav navbar-nav">
                <Link to="" class="btn">Soumettre votre projet</Link>
                <li class="dropdown yamm-fullwidth">
                  <Link to="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu"></i></Link>

                  <ul class="dropdown-menu yamm-dropdown-menu">
                    <li>
                      <div class="yamm-content row">

                        <div class="col-sm-3 inner">
                          <h4>Mot du Directeur</h4>
                          <figure>
                            <div class="icon-overlay icn-link">
                              <Link to="portfolio-post.html"><img src={dg} alt=""/></Link>
                            </div>
                            <figcaption>
                              <p>Consed quodips ameniat empernam que apid cust quas molor eatis numa estio.</p>
                              <Link to="portfolio-post.html" class="btn">Lire la suite</Link>
                            </figcaption>
                          </figure>
                        </div>

                        <div class="col-sm-3 inner">
                          <h4>Qui sommes-nous</h4>

                          <ul class="circled">
                            <li><Link activeclass='active' to='/apropos'>Présentation</Link></li>
                            <li><Link to="portfolio5.html">Notre mission</Link></li>
                            <li><Link activeclass='active' to='/equipe'>Notre métier</Link></li>
                            <li><Link activeclass='active' to='/gouvernance'>Gouvernance</Link></li>
                            <li><Link activeclass='active' to='/equipe'>Notre équipe</Link></li>
                          </ul>

                          <h4>Vous avez un projet</h4>
                          <ul class="circled">
                              <li><Link to="blog-post.html">Votre projet</Link></li>
                            <li><Link to="sidenav.html">Soumettre votre projet</Link></li>
                            <li><Link to="about2.html">FAQ</Link></li>

                          </ul>

                          <h4>Vous êtes investisseurs</h4>
                          <ul class="circled">
                            <li><Link to="pricing.html">Investir avec nous</Link></li>
                            <li><Link to="contact.html">Investisseurs partenaires</Link></li>
                            <li><Link to="contact.html">Formulaire de contact</Link></li>
                          </ul>

                        </div>

                        <div class="col-sm-3 inner">
                          <h4>Activités récentes</h4>

                          <div class="row thumbs gap-xs">

                            <div class="col-xs-6 thumb">
                              <figure class="icon-overlay icn-link">
                                <Link to="portfolio-post.html"><img src={parentus} alt=""/></Link>
                              </figure>
                            </div>
                            <div class="col-xs-6 thumb">
                              <figure class="icon-overlay icn-link">
                                <Link to="portfolio-post.html"><img src={agriculture} alt=""/></Link>
                              </figure>
                            </div>


                            <div class="col-xs-6 thumb">
                              <figure class="icon-overlay icn-link">
                                <Link to="portfolio-post.html"><img src={maroc} alt=""/></Link>
                              </figure>
                            </div>

                            <div class="col-xs-6 thumb">
                              <figure class="icon-overlay icn-link">
                                <Link to="portfolio-post.html"><img src={boad} alt=""/></Link>
                              </figure>
                            </div>


                            <div class="col-xs-6 thumb">
                              <figure class="icon-overlay icn-link">
                                <Link to="portfolio-post.html"><img src={energy} alt=""/></Link>
                              </figure>
                            </div>


                          </div>
                        </div>

                        <div class="col-sm-3 inner">
                          <h4>A propos</h4>
                          <p>Voluptat ibusaped molorporro consequ idustibus. Reressi morum ut dolessiti tem nihicid ernatum, coria volore non pro officat ut autem accaborem conet. Omnis peribus qui dolent praeperrum coria.</p>
                          <p>Equam conesti occum dolorest, quae venderes quistius, comnitatur sae dinam nonseculpa cum fugit is verciam.</p>
                          <Link to="about.html" class="btn">Lire la suite</Link>
                        </div>

                      </div>
                    </li>
                  </ul>
                </li>
              </ul>



            </div>
          </div>
        </div>
      </div>
    </header>



  </div>





)
export default Menu

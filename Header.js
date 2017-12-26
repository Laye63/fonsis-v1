import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import logo from './assets/images/art/fonsis.png'
import dg from './assets/images/art/kane.JPG'


const Menu = () => (

  <div>
    <header>
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
        <li><a href="#"><i class="icon-s-facebook"></i></a></li>
							<li><a href="#"><i class="icon-s-gplus"></i></a></li>
							<li><a href="#"><i class="icon-s-twitter"></i></a></li>
							<li><a href="#"><i class="icon-s-pinterest"></i></a></li>
							<li><a href="#"><i class="icon-s-behance"></i></a></li>
							<li><a href="#"><i class="icon-s-dribbble"></i></a></li>

						</ul>






  </div>

  <div class="yamm">
    <div class="affix-wrapper">
  					<div class="navbar">
  						<div class="container">
                  <a class="navbar-brand" href="./"><img src={logo} class="logo" alt=""/></a>
                  <a href="#" class="btn">Soumettre votre projet</a>
<ul class="nav navbar-nav">

                  <li class="dropdown yamm-fullwidth">
  									<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-menu"></i></a>

  									<ul class="dropdown-menu yamm-dropdown-menu">
  										<li>
  											<div class="yamm-content row">

  												<div class="col-sm-3 inner">
  													<h4>Mot du Directeur</h4>
  													<figure>
  														<div class="icon-overlay icn-link">
  															<a href="portfolio-post.html"><img src={dg} alt=""/></a>
  														</div>
  														<figcaption>
  															<p>Consed quodips ameniat empernam que apid cust quas molor eatis numa estio.</p>
  															<a href="portfolio-post.html" class="btn">Lire la suite</a>
  														</figcaption>
  													</figure>
  												</div>

  												<div class="col-sm-3 inner">
                            <ul>
  										       <h4>Qui sommes-nous</h4>
                              <ul class="circled">
  														<li><a href="portfolio2.html">Presentation</a></li>
  														<li><a href="portfolio5.html">Notre Métier</a></li>
                              <li><a href="portfolio5.html">Notre Mission</a></li>
  														<li><a href="portfolio-post5.html">Notre Equipe</a></li>
                              <li><a href="blog5.html">Gouvernance</a></li>
                              </ul>
                              <h4>Vous avez un projet</h4>
                                <ul class="circled">
    														<li><a href="blog7.html">Votre projet</a></li>
    														<li><a href="blog-post.html">Soumettre votre projet</a></li>
    														<li><a href="sidenav.html">FAQ</a></li>
                                </ul>
                                <h4>Vous êtes Investisseurs</h4>
                                <ul class="circled">
    														<li><a href="blog7.html">Investisser avec nous</a></li>
    														<li><a href="blog-post.html">Investisseurs partenaires</a></li>
    														<li><a href="sidenav.html">Formulaire de contact</a></li>
                                </ul>
  													</ul>
  												</div>

  												<div class="col-sm-3 inner">
  													<h4>Activités récentes</h4>

  													<div class="row thumbs gap-xs">

  														<div class="col-xs-6 thumb">
  															<figure class="icon-overlay icn-link">
  																<a href="portfolio-post.html"><img src="assets/images/art/work02.jpg" alt=""/></a>
  															</figure>
  														</div>

  														<div class="col-xs-6 thumb">
  															<figure class="icon-overlay icn-link">
  																<a href="portfolio-post.html"><img src="assets/images/art/work03.jpg" alt=""/></a>
  															</figure>
  														</div>

  														<div class="col-xs-6 thumb">
  															<figure class="icon-overlay icn-link">
  																<a href="portfolio-post.html"><img src="assets/images/art/work04.jpg" alt=""/></a>
  															</figure>
  														</div>

  														<div class="col-xs-6 thumb">
  															<figure class="icon-overlay icn-link">
  																<a href="portfolio-post.html"><img src="assets/images/art/work05.jpg" alt=""/></a>
  															</figure>
  														</div>

  														<div class="col-xs-6 thumb">
  															<figure class="icon-overlay icn-link">
  																<a href="portfolio-post.html"><img src="assets/images/art/work06.jpg" alt=""/></a>
  															</figure>
  														</div>

  														<div class="col-xs-6 thumb">
  															<figure class="icon-overlay icn-link">
  																<a href="portfolio-post.html"><img src="assets/images/art/work07.jpg" alt=""/></a>
  															</figure>
  														</div>

  													</div>
  												</div>

  												<div class="col-sm-3 inner">
  													<h4>A propos</h4>
  													<p>Voluptat ibusaped molorporro consequ idustibus. Reressi morum ut dolessiti tem nihicid ernatum, coria volore non pro officat ut autem accaborem conet. Omnis peribus qui dolent praeperrum coria.</p>
  													<p>Equam conesti occum dolorest, quae venderes quistius, comnitatur sae dinam nonseculpa cum fugit is verciam.</p>
  													<Link to="/apropos" class="btn">Lire la suite</Link>
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

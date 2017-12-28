import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'


const Equipe = (props) => (
	<div>
    <section id="team" class="light-bg">
    				<div class="container inner-top inner-bottom-sm">

    					<div class="row">
    						<div class="col-md-8 col-sm-10 center-block text-center">
    							<header>
    								<h1>NOTRE EQUIPE</h1>
    								<p>Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor.</p>
    							</header>
    						</div>
    					</div>

    					<div class="row inner-top-sm text-center">

    						<div class="col-sm-4 inner-bottom-sm inner-left inner-right">
    							<figure class="member">

    								<div class="icon-overlay icn-link">
    									<a href="#"><img src="assets/images/art/human03.jpg" class="img-circle"/></a>

    								</div>

    								<figcaption>

    									<h2>
    										Ibrahima Kane
    										<span>Directeur Général</span>
    									</h2>

                      <Link to='/facebook'>Test lien</Link>&nbsp;
                      <blockquote>Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem rest non restibusaes es modis.</blockquote>

    									<ul class="social">
    										<li><a href="#"><i class="icon-s-facebook"></i></a></li>
    										<li><a href="#"><i class="icon-s-gplus"></i></a></li>
    										<li><a href="#"><i class="icon-s-twitter"></i></a></li>
    									</ul>

    								</figcaption>

    							</figure>
    						</div>

    						<div class="col-sm-4 inner-bottom-sm inner-left inner-right">
    							<figure class="member">

    								<div class="icon-overlay icn-link">
    									<a href="#"><img src="assets/images/art/human01.jpg" class="img-circle"/></a>
    								</div>

    								<figcaption>

    									<h2>
    										Serigne Dame Diakhoumpa,
    										<span>Directeur financier et Comptable</span>
    									</h2>

    									<blockquote>Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem rest non restibusaes es modis.</blockquote>

    									<ul class="social">
    										<li><a href="#"><i class="icon-s-facebook"></i></a></li>
    										
    										<li><a href="#"><i class="icon-s-twitter"></i></a></li>
    									</ul>

    								</figcaption>

    							</figure>
    						</div>

    						<div class="col-sm-4 inner-bottom-sm inner-left inner-right">
    							<figure class="member">

    								<div class="icon-overlay icn-link">
    									<a href="#"><img src="assets/images/art/human05.jpg" class="img-circle"/></a>
    								</div>

    								<figcaption>

    									<h2>
    										Papa Demba Diallo
    										<span>Directeur Exécutif en charge des TIC et Services</span>
    									</h2>

    									<blockquote>Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem rest non restibusaes es modis.</blockquote>

    									<ul class="social">
    										<li><a href="#"><i class="icon-s-facebook"></i></a></li>
    										<li><a href="#"><i class="icon-s-gplus"></i></a></li>
    										<li><a href="#"><i class="icon-s-twitter"></i></a></li>
    									</ul>

    								</figcaption>

    							</figure>
    						</div>

    					</div>

    					<div class="row text-center">

    						<div class="col-sm-4 inner-bottom-sm inner-left inner-right">
    							<figure class="member">

    								<div class="icon-overlay icn-link">
    									<a href="#"><img src="assets/images/art/human06.jpg" class="img-circle"/></a>
    								</div>

    								<figcaption>

    									<h2>
    										Amy Williams
    										<span>Senior Designer</span>
    									</h2>

    									<blockquote>Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem rest non restibusaes es modis.</blockquote>

    									<ul class="social">
    										<li><a href="#"><i class="icon-s-facebook"></i></a></li>
    										<li><a href="#"><i class="icon-s-gplus"></i></a></li>
    										<li><a href="#"><i class="icon-s-twitter"></i></a></li>
    									</ul>

    								</figcaption>

    							</figure>
    						</div>

    						<div class="col-sm-4 inner-bottom-sm inner-left inner-right">
    							<figure class="member">

    								<div class="icon-overlay icn-link">
    									<a href="#"><img src="assets/images/art/human04.jpg" class="img-circle"/></a>
    								</div>

    								<figcaption>

    									<h2>
    										Mamadou MBAYE
    										<span>Polytechnicien, ingénieur de l'Ecole Nationale de la Statistique et de l'Administration Economique</span>
    									</h2>

    									<blockquote>Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem rest non restibusaes es modis.</blockquote>

    									<ul class="social">
    										<li><a href="#"><i class="icon-s-facebook"></i></a></li>
    										<li><a href="#"><i class="icon-s-gplus"></i></a></li>
    										<li><a href="#"><i class="icon-s-twitter"></i></a></li>
    									</ul>

    								</figcaption>

    							</figure>
    						</div>

    						<div class="col-sm-4 inner-bottom-sm inner-left inner-right">
    							<figure class="member">

    								<div class="icon-overlay icn-link">
    									<a href="#"><img src="assets/images/art/human02.jpg" class="img-circle"/></a>
    								</div>

    								<figcaption>

    									<h2>
    										Jennifer Fox
    										<span>Project Manager</span>
    									</h2>

    									<blockquote>Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem rest non restibusaes es modis.</blockquote>

    									<ul class="social">
    										<li><a href="#"><i class="icon-s-facebook"></i></a></li>
    										<li><a href="#"><i class="icon-s-gplus"></i></a></li>
    										<li><a href="#"><i class="icon-s-twitter"></i></a></li>
    									</ul>

    								</figcaption>

    							</figure>
    						</div>

    					</div>

    				</div>
    			</section>


	</div>

)


export default Equipe

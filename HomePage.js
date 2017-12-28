import React from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router'
import Contact from './Contact.js'
import slider01 from './assets/images/art/slider01.jpg'
import slider02 from './assets/images/art/slider02.jpg'
import slider03 from './assets/images/art/reef.jpg'
import slider06 from './assets/images/art/biov2.jpg'
import slider07 from './assets/images/art/energyv2.jpg'
import slider08 from './assets/images/art/santev2.jpg'
import slider04 from './assets/images/art/slider04.jpg'
import photograph02 from './assets/images/art/photograph02.jpg'
import fmo from './assets/images/art/fmo.png'
import ifc from './assets/images/art/ifc.jpg'
import Oiko from './assets/images/art/Oiko.png'
import ecp from './assets/images/art/ecp.png'
import proparco from './assets/images/art/proparco.jpeg'
import abraaj from './assets/images/art/abraaj.jpeg'
import aventura from './assets/images/art/aventura.jpeg'
import africinvest from './assets/images/art/africinvest.jpg'
import cauris from './assets/images/art/cauris.jpg'
import afig from './assets/images/art/afig.png'
import etimos from './assets/images/art/etimos.jpg'
import parentus from './assets/images/art/parentus.jpg'
import energy from './assets/images/art/energy.jpg'
import agriculture from './assets/images/art/agriculture.jpg'
import boad from './assets/images/art/boad.jpg'
import polimed from './assets/images/art/polimed.jpg'
import pse from './assets/images/art/pse.jpg'
import maroc from './assets/images/art/maroc.jpg'
import capiteranga from './assets/images/art/capiteranga.jpg'
import mekhe from './assets/images/art/mekhe.jpg'
import sante from './assets/images/art/sante.jpg'
import fonsis from './assets/images/art/fonsis.jpg'



var styles01 = {backgroundImage: 'url(' + require('./assets/images/art/slider01.jpg') + ')'};
var styles02 = {backgroundImage: 'url(' + require('./assets/images/art/slider02.jpg') + ')'};
var styles03 = {backgroundImage: 'url(' + require('./assets/images/art/reef.jpg') + ')'};
var styles06 = {backgroundImage: 'url(' + require('./assets/images/art/biov2.jpg') + ')'};
var styles07 = {backgroundImage: 'url(' + require('./assets/images/art/energyv2.jpg') + ')'};
var styles08 = {backgroundImage: 'url(' + require('./assets/images/art/santev2.jpg') + ')'};
var styles04 = {backgroundImage: 'url(' + require('./assets/images/art/slider04.jpg') + ')'};
var styles05 = {backgroundImage: 'url(' + require('./assets/images/art/slider04.jpg') + ')'};





const Accueil = () => (
  <div>

    <section id="hero">
    				<div id="owl-main" class="owl-carousel height-lg owl-inner-nav owl-ui-lg">

    					<div class="item" style={styles06}>
    						<div class="container">
    							<div class="caption vertical-center text-center">

    								<h1 class="fadeInDown-1 light-color">BIOSOY</h1>
    								<p class="fadeInDown-2 medium-color">Le FONSIS inaugure un projet de 5 milliards.</p>
    								<div class="fadeInDown-3">
    									<Link to="#" class="btn btn-large">Lire la suite</Link>
    								</div>

    							</div>
    						</div>
    					</div>
              <div class="item" style={styles07}>
            <div class="container">
              <div class="caption vertical-center text-right">

                <h1 class="fadeInLeft-1 light-color">ENERGIE</h1>
                <p class="fadeInLeft-2 light-color">REEN is designed to showcase your talent and put your work in the forefront. <br/>Professionally use of typography and layout that fits your content.</p>
                <div class="fadeInLeft-3">
                  <Link to="#" class="btn btn-large">Lire la suite</Link>
                </div>

              </div>
            </div>
          </div>
          <div className="item" style={styles08}>
        <div className="container">
          <div className="caption vertical-center text-right">

            <h1 class="fadeInLeft-1 light-color">SANTÉ</h1>
            <p class="fadeInLeft-2 light-color">REEN is designed to showcase your talent and put your work in the forefront. <br/>Professionally use of typography and layout that fits your content.</p>
            <div class="fadeInLeft-3">
              <Link to="#" className="btn btn-large">Lire la suite</Link>
            </div>

          </div>
        </div>
      </div>

          <div class="item" style={styles03}>
						<div class="container">
							<div class="caption vertical-center text-left">

								<h1 class="fadeInRight-1 dark-bg light-color"><span>Investir avec nous</span></h1>

								<div class="fadeInRight-3">
									<Link to="#" class="btn btn-large">Lire la suite</Link>
								</div>

							</div>
						</div>
					</div>
              </div>

      </section>
      <section id="selected-works" class="light-bg">
      				<div class="container inner">

      					<div class="row">
      						<div class="col-md-8 col-sm-9 center-block text-center">
      							<header>
      								<h1>NOS REALISATIONS</h1>
      								<p>Magnis modipsae voloratati andigen daepeditem quiate re porem que aut labor. Laceaque eictemperum quiae sitiorem rest non restibusaes.</p>
      							</header>
      						</div>
      					</div>

      					<div class="row inner-top-sm">
      						<div class="col-sm-12 portfolio">

      							<ul class="filter text-center">
      								<li><Link to="#" data-filter="*" class="active">All</Link></li>
      								<li><Link to="#" data-filter=".identity">Energie</Link></li>
      								<li><Link to="#" data-filter=".interactive">Agro-Industrie</Link></li>
      								<li><Link to="#" data-filter=".print">Investissement</Link></li>
      								<li><Link to="#" data-filter=".photography">Santé</Link></li>
      							</ul>

      							<ul class="isotope items col-3">

      								<li class="item thumb photography">
      									<Link to="portfolio-post.html">
      										<figure>
      											<figcaption class="text-overlay">
      												<div class="info">
      													<h4>POLIMED</h4>
      													<p>Santé</p>
      												</div>
      											</figcaption>
      											<img src="assets/images/art/work06.jpg" alt=""/>
      										</figure>
      									</Link>
      								</li>

      								<li class="item thumb identity">
      									<Link to="portfolio-post.html">
      										<figure>
      											<figcaption class="text-overlay">
      												<div class="info">
      													<h4>SAED</h4>
      													<p>Agriculture</p>
      												</div>
      											</figcaption>
      											<img src="assets/images/art/work06.jpg" alt=""/>
      										</figure>
      									</Link>
      								</li>

      								<li class="item thumb print">
      									<Link to="portfolio-post.html">
      										<figure>
      											<figcaption class="text-overlay">
      												<div class="info">
      													<h4>BIOSOY</h4>
      													<p>Agro-Industrie</p>
      												</div>
      											</figcaption>
      											<img src="assets/images/art/work06.jpg" alt=""/>
      										</figure>
      									</Link>
      								</li>

      								<li class="item thumb identity">
      									<Link to="portfolio-post.html">
      										<figure>
      											<figcaption class="text-overlay">
      												<div class="info">
      													<h4>PARENTERUS</h4>
      													<p>Investissement</p>
      												</div>
      											</figcaption>
      											<img src="assets/images/art/work06.jpg" alt=""/>
      										</figure>
      									</Link>
      								</li>

      								<li class="item thumb print">
      									<Link to="portfolio-post.html">
      										<figure>
      											<figcaption class="text-overlay">
      												<div class="info">
      													<h4>Teranga Capital</h4>
      													<p>Investissement</p>
      												</div>
      											</figcaption>
      											<img src="assets/images/art/work06.jpg" alt=""/>
      										</figure>
      									</Link>
      								</li>

      								<li class="item thumb interactive">
      									<Link to="portfolio-post.html">
      										<figure>
      											<figcaption class="text-overlay">
      												<div class="info">
      													<h4>Teranga Capital</h4>
      													<p>Investissement</p>
      												</div>
      											</figcaption>
      											<img src="assets/images/art/work06.jpg" alt=""/>
      										</figure>
      									</Link>
      								</li>

      								<li class="item thumb identity">
      									<Link to="portfolio-post.html">
      										<figure>
      											<figcaption class="text-overlay">
      												<div class="info">
      													<h4>Energies Renouvelables</h4>
      													<p>Energie</p>
      												</div>
      											</figcaption>
      											<img src="assets/images/art/work06.jpg" alt=""/>
      										</figure>
      									</Link>
      								</li>

      								<li class="item thumb print">
      									<Link to="portfolio-post.html">
      										<figure>
      											<figcaption class="text-overlay">
      												<div class="info">
      													<h4>PME</h4>
      													<p>Investissement</p>
      												</div>
      											</figcaption>
      											<img src="assets/images/art/work06.jpg" alt=""/>
      										</figure>
      									</Link>
      								</li>

      								<li class="item thumb identity print">
      									<Link to="portfolio-post.html">
      										<figure>
      											<figcaption class="text-overlay">
      												<div class="info">
      													<h4>Senergy</h4>
      													<p>Energie</p>
      												</div>
      											</figcaption>
      											<img src="assets/images/art/work06.jpg" alt=""/>
      										</figure>
      									</Link>
      								</li>

      							</ul>

      						</div>
      					</div>

      				</div>
      			</section>
            <section id="carousels" class="light-bg">
            <div class="container inner">

            <div class="row">
          <div class="col-md-8 col-sm-9 center-block text-center">
            <header>
              <h1>ILS NOUS FONT CONFIANCE</h1>
              <p>Medium carousel UI elements with outer navigation and pagination. <br/>All carousels are fully responsive, draggable and touchable!</p>
            </header>
          </div>
        </div>
        </div>

        <div class="row">
          <div class="col-sm-12 inner-top-md">
            <div id="owl-videos" class="owl-carousel owl-outer-nav owl-ui-md owl-item-gap">

              <div class="item">
                <figure>

                  <div class="icon-overlay icn-link">
                    <Link to="slider-carousel.html"><img src={Oiko} alt=""/></Link>
                  </div>

                  <figcaption class="bordered no-top-border">
                    <div class="info">
                      <h4><Link to="slider-carousel.html">Dashboard</Link></h4>
                      <p>Interactive</p>
                    </div>
                  </figcaption>

                </figure>
              </div>
              <div class="item">
                <figure>

                  <div class="icon-overlay icn-link">
                    <Link to="slider-carousel.html"><img src={afig} alt=""/></Link>
                  </div>

                  <figcaption class="bordered no-top-border">
                    <div class="info">
                      <h4><Link to="slider-carousel.html">Dashboard</Link></h4>
                      <p>Interactive</p>
                    </div>
                  </figcaption>

                </figure>
              </div>
              <div class="item">
                <figure>

                  <div class="icon-overlay icn-link">
                    <a href="slider-carousel.html"><img src={aventura} alt=""/></a>
                  </div>

                  <figcaption class="bordered no-top-border">
                    <div class="info">
                      <h4><Link to="slider-carousel.html">Dashboard</Link></h4>
                      <p>Interactive</p>
                    </div>
                  </figcaption>

                </figure>
              </div>
              <div class="item">
                <figure>

                  <div class="icon-overlay icn-link">
                    <Link to="slider-carousel.html"><img src={cauris} alt=""/></Link>
                  </div>

                  <figcaption class="bordered no-top-border">
                    <div class="info">
                      <h4><Link to="slider-carousel.html">Dashboard</Link></h4>
                      <p>Interactive</p>
                    </div>
                  </figcaption>

                </figure>
              </div>
              <div class="item">
                <figure>

                  <div class="icon-overlay icn-link">
                    <Link to="slider-carousel.html"><img src={ifc} alt=""/></Link>
                  </div>

                  <figcaption class="bordered no-top-border">
                    <div class="info">
                      <h4><Link to="slider-carousel.html">Dashboard</Link></h4>
                      <p>Interactive</p>
                    </div>
                  </figcaption>

                </figure>
              </div>
              <div class="item">
                <figure>

                  <div class="icon-overlay icn-link">
                    <Link to="slider-carousel.html"><img src={africinvest} alt=""/></Link>
                  </div>

                  <figcaption class="bordered no-top-border">
                    <div class="info">
                      <h4><Link to="slider-carousel.html">Dashboard</Link></h4>
                      <p>Interactive</p>
                    </div>
                  </figcaption>

                </figure>
              </div>
              <div class="item">
                <figure>

                  <div class="icon-overlay icn-link">
                    <Link to="slider-carousel.html"><img src={abraaj} alt=""/></Link>
                  </div>

                  <figcaption class="bordered no-top-border">
                    <div class="info">
                      <h4><Link to="slider-carousel.html">Dashboard</Link></h4>
                      <p>Interactive</p>
                    </div>
                  </figcaption>

                </figure>
              </div>

              </div>



        </div>
        </div>
  </section>

</div>







)





export default Accueil

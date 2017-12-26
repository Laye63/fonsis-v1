import React, { Component } from 'react'
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
import logo from './assets/images/art/fons.png'


const Footer = () =>
<div>
  <footer className="dark-bg">
          <div class="container inner">
            <div class="row">

              <div class="col-md-3 col-sm-6 inner">
                <a href="index.html"><img src={logo} className="gotype" alt=""/></a>
                <h4>FONSIS</h4>
                <p>Magnis modipsae voloratati andigen daepeditem quiate re porem que aut labor. Laceaque eictemperum quiae sitiorem rest non restibusaes maio es dem tumquam.</p>
                <a href="about.html" class="txt-btn">Lire la suite</a>
              </div>

              <div class="col-md-3 col-sm-6 inner">
                <h4>Activités recentes</h4>

                <div class="row thumbs gap-xs">

                  <div class="col-xs-6 thumb">
                    <figure class="icon-overlay icn-link">
                      <a href="portfolio-post.html"><img src={sante} className="sant" alt=""/></a>
                    </figure>
                  </div>

                  <div class="col-xs-6 thumb">
                    <figure class="icon-overlay icn-link">
                      <a href="portfolio-post.html"><img src={energy} className="ener" alt=""/></a>
                    </figure>
                  </div>



                </div>
              </div>


              <div class="col-md-3 col-sm-6 inner">
                <h4>Nous contacter</h4>
                <ul class="contacts">
                  <li><i class="icon-location contact"></i> Immeuble SNR  Rue de Thann X Dagorne, 5ème étage Dakar (SENEGAL).| B.P :50882 Dakar RP, Sénégal</li>
                  <li><i class="icon-mobile contact"></i> +221 33 889 33 77  </li>
                  <li><a href="#"><i class="icon-mail-1 contact"></i> contact@fonsis.org</a></li>
                </ul>
              </div>

              <div class="col-md-3 col-sm-6 inner">
                <h4>Free updates</h4>
                <p>Conecus iure posae volor remped modis aut lor volor accabora incim resto explabo.</p>
                <form id="newsletter" class="form-inline newsletter" role="form">
                  <label class="sr-only" for="exampleInputEmail">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail" placeholder="Enter your email address"/>
                  <button type="submit" class="btn btn-default btn-submit">Subscribe</button>
                </form>
              </div>

            </div>
          </div>

          <div class="footer-bottom">
            <div class="container inner">
              <p class="pull-left">© 2017 FONSIS. All rights reserved.</p>
              <ul class="footer-menu pull-right">
                <li><a href="http://localhost:3000/accueil">Home</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </footer>

</div>


export default Footer

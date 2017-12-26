import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'


const Contact = (props) => <div>

  <br />
	<section id="contact-form">
	<div class="container inner">

		<div class="row">
			<div class="col-md-8 col-sm-9 center-block text-center">
				<header>
					<h1>Get in touch</h1>
					<p>Do you want to know more? We’d love to hear from you!</p>
				</header>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12">
				<div class="row">

					<div class="col-sm-6 outer-top-md inner-right-sm">

						<h2>Leave a Message</h2>

						<form id="contactform" class="forms" action="contact.php" method="post">

							<div class="row">
								<div class="col-sm-6">
									<input type="text" name="name" class="form-control" placeholder="Name (Required)"/>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-6">
									<input type="email" name="email" class="form-control" placeholder="Email (Required)"/>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-6">
									<input type="text" name="subject" class="form-control" placeholder="Subject"/>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-12">
									<textarea name="message" class="form-control" placeholder="Enter your message ..."></textarea>
								</div>
							</div>

							<button type="submit" class="btn btn-default btn-submit">Submit message</button>

						</form>

						<div id="response"></div>

					</div>

					<div class="col-sm-6 outer-top-md inner-left-sm border-left">

						<h2>Contacts</h2>
						<p>Magnis modipsae voloratati andigen daepeditem quiate re aut labor. Laceaque eictemperum quiae sitiorem rest non restibusaes.</p>

						<h3>FONSIS</h3>
						<ul class="contacts">
							<li><i class="icon-location contact"></i> Rue de Thann X Dagorne, 5ème étage Dakar (SENEGAL).</li>
							<li><i class="icon-mobile contact"></i> +221 33 889 33 77 | B.P: 50882 Dakar RP, Sénégal </li>
							<li><a href="mailto:info@reen.com"><i class="icon-mail-1 contact"></i> contact@fonsis.org</a></li>
						</ul>


						<div class="social-network">
							<h3>Social</h3>
							<ul class="social">
								<li><a href="#"><i class="icon-s-facebook"></i></a></li>
								<li><a href="#"><i class="icon-s-gplus"></i></a></li>
								<li><a href="#"><i class="icon-s-twitter"></i></a></li>
								<li><a href="#"><i class="icon-s-pinterest"></i></a></li>
								<li><a href="#"><i class="icon-s-behance"></i></a></li>
								<li><a href="#"><i class="icon-s-dribbble"></i></a></li>
							</ul>
						</div>

					</div>

				</div>
			</div>
		</div>

	</div>
</section>
<section id="map" class="height-sm"></section>



  <Link to='/contact'>Twitter Feed</Link>&nbsp;
  <Link to='/contact/instagram'>Instagram Feed</Link>

  {props.children}
</div>
export default Contact

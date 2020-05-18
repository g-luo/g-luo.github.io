import {LitElement, html} from 'lit-element';

// Static navbar on the left side of every page
export class Navbar extends HTMLElement { 
	render() {
    	return html`
      	<div class="column is-one-quarter fixed-column">
  			<img src="./assets/profile.jpeg">
  			<div class="content">
  				<div class="has-text-weight-bold is-size-3">
  					Grace Luo
  				</div>
  				<div class="is-size-6">
  					EECS @ UC Berkeley <br>
  					more info
  				</div>
  			</div>
  			<aside class="menu menu-padding">
  				<ul class="menu-list is-size-5 has-text-weight-medium is-italic">
    				<li><a href="#about">About</a></li>
    				<li><a>Resume</a></li>
    				<li><a href="#extra">Extra</a></li>
  				</ul>
  			</aside>
  			<div class="social-media">
				<a href="mailto:graceluo@berkeley.edu" target="_blank" class="button is-white"><i class="fa fa-envelope" aria-hidden="true"></i></a>
				<a href="https://github.com/g-luo" target="_blank" class="button is-white"><i class="fa fa-github" aria-hidden="true"></i></a>
				<a href="https://www.linkedin.com/in/g-luo/" target="_blank" class="button is-white"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
			</div>
			<div class="is-size-7">
  				© Grace Luo 2020. All rights reserved.
  			</div>
		</div>
    `	;
  	}
} 

customElements.define('sidebar', Navbar);
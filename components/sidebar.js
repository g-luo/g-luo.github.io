import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element/lit-element.js?module';

// Static navbar on the left side of every page
export class Sidebar extends LitElement { 
	render() {
    	return html`
        <link rel="stylesheet" href="./css/bulma.css">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <div>
          <figure class="image is-square">
    			 <img src="./assets/profile.jpeg">
          </figure>
    			<div class="content">
    				<div class="has-text-weight-bold is-size-3">
    					Grace Luo
    				</div>
    				<div class="is-size-6">
    					EECS @ UC Berkeley <br>
    					<i>ASUC CTO, Berkeleytime PM</i>
    				</div>
    			</div>
    			<aside class="menu">
    				<ul class="menu-list is-size-5 has-text-weight-medium is-italic">
      				<li><a href="index.html">About</a></li>
      				<li><a href="extra.html">Extra</a></li>
              <li><a href="assets/Grace_Luo_Resume.pdf" target="_blank">Resume</a></li>
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

customElements.define('side-bar', Sidebar);
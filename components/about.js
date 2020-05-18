import {LitElement, html} from '../node_modules/lit-element';

// Static navbar on the left side of every page
export class About extends LitElement { 
	render() {
    	return html`
        <link rel="stylesheet" href="./css/bulma.css">
        <section class="section">
          <div class="has-text-weight-medium is-size-3" id="about">About</div>
            <div class="content is-size-6">
              <article class="message is-dark">
                 <div class="message-body">
                    Hi, I'm Grace!
                    
                    <br><br>For the past two years, I've been working on <a href="https://www.berkeleytime.com/landing" target="_blank">Berkeleytime</a>, a course discovery tool with over 26k monthly users. UC Berkeley is a large public school, and we work hard to make our site accessible with a public API, extensive user research, and a simple UI.
                    <br><br>
                    As <a href="https://asuc.org/appointed-officials/" target="_blank">Chief Technology Officer</a>, I work on securing funding pipelines, sourcing new projects, and managing existing pro bono tech for Berkeley students.
                    <br><br>
                    Last summer, I worked on an AI + healthcare demo at <a href="https://www.intel.com/content/www/us/en/healthcare-it/transforming-healthcare.html" target="_blank">Intel</a> and this summer I will be interning at <a href="https://www.google.com/" target="_blank">Google</a>.
                    <br><br>
                    <i>*EECS = Electrical Engineering & Computer Science</i>
                  </div>
                </article>
            </div>
            <object width="300" height="200" style="float:right;" type="image/svg+xml" data="../assets/multi_koi.svg"></object>
        </section>
    `	;
  	}
} 

customElements.define('about-me', About);
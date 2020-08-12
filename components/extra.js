import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';

export class Extra extends LitElement { 
	render() {
    	return html`
        <link rel="stylesheet" href="../css/bulma.css">
        <section class="section" id="extra">
          <div class="has-text-weight-medium is-size-3">Extra</div>
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <div class="card tile is-child">
                  <div class="card-image">
                    <img src="../assets/extra/deca.png">
                  </div>
                  <div class="card-content">
                    I'm ranked 1st Internationally in 
                    <a href="https://www.decadirect.org/content/uploads/2018/05/Auto-Services.pdf" target="_blank">
                      Automotive Services Marketing. 
                    </a>
                  </div>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="card tile is-child">
                  <div class="card-image">
                    <img src="../assets/extra/ddr.png">
                  </div>
                  <div class="card-content">
                    I organized a
                    <a href="https://www.facebook.com/events/503957350183653/permalink/509203489659039/" target="_blank">
                        Dance Dance Revolution event
                    </a> 
                    and 
                    <a href="https://www.facebook.com/events/2331334813564763/" target="_blank">
                      Plushie Making Event
                    </a> 
                    with HKN.
                  </div>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-parent">
                <div class="card tile is-child">
                  <div class="card-image">
                    <div class="columns">
                      <div class="column is-one-third">
                      <img src="../assets/extra/homopolar.gif">
                      </div>
                      <div class="column">
                      <img src="../assets/extra/materials.jpg">
                      </div>
                    </div>
                  </div>
                  <div class="card-content">
                    I created
                    <a href="https://elestoque.org/tag/grace-luo/" target="_blank">
                      a nerdy homopolar motor lab and more
                    </a>
                    for Science National Honor Society. 
                    <a href="https://drive.google.com/drive/folders/0B4oq0_kA7v_1MzBiNHVPMlJnWjQ?usp=sharing" target="_blank">
                      Try the labs yourself!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img src="../assets/extra/graphics.png">
            <article class="message is-size-6 is-dark">
             <div class="message-body">
                This is a static site built using <a href="https://bulma.io/" target="_blank">Bulma</a> for CSS styling and <a href="https://lit-element.polymer-project.org/" target="_blank">Google Polymer's LitElement</a> for component management. I custom designed this site, with some inspiration from <a href="https://www.bestdressedstore.com/" target="_blank">bestdressed</a> for the typography.
                <br><br>
                I actually spent a little too long on the koi fish animation (normally I would use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes" target="_blank">CSS Keyframes</a>). Apparently if you embed an image with svg's  <a href="https://github.com/w3c/webcomponents/issues/772" target="_blank">&lt;use /&gt;</a> command, you create a spooky "shadow DOM" that doesn't listen to your CSS. I ended up just using <a href="https://www.w3.org/TR/SVG11/animate.html#AnimateTransformElement" target="_blank"> &lt;animateTransform /&gt; </a> instead.
                <br><br>
                For dynamic sites like Berkeleytime, I use libraries like <a href="https://reactjs.org/" target="_blank">ReactJS</a> lifecycle management, <a href="https://redux.js.org/" target="_blank">Redux</a> state management, and <a href="https://recharts.org/en-US/" target="_blank">Recharts</a> data visualization.
              </div>
            </article>
        </section>
    `	;
  	}
} 

customElements.define('extra-content', Extra);
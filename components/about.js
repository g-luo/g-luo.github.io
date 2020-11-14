import { LitElement, html } from "../node_modules/@polymer/lit-element/lit-element.js";
export class About extends LitElement {
  render() {
    return html`
        <link rel="stylesheet" href="../css/bulma.css">
        <section class="section">
          <div class="has-text-weight-medium is-size-3" id="about">About</div>
            <div class="content is-size-6">
              <article class="message is-dark">
                 <div class="message-body">
                    Hi, I'm Grace!
                    <br><br> Currently I'm working on multimodal vision and language research 
                    (ie models that can understand both image and text).
                    <br><br>For the past two years, I've also been working on <a href="https://www.berkeleytime.com/landing" target="_blank">Berkeleytime</a>, a course discovery tool with over 26k monthly users. UC Berkeley is a large public school, and we work hard to make our site accessible with a public API, extensive user research, and a simple UI.
                    <br><br>
                    As <a href="https://asuc.org/appointed-officials/" target="_blank">Chief Technology Officer</a>, I work on securing funding pipelines, sourcing new projects, and managing existing pro bono tech for Berkeley students.
                    <br><br>
                    <i>*EECS = Electrical Engineering & Computer Science</i>
                  </div>
                </article>
            </div>
        </section>
    `;
  }

}
customElements.define('about-me', About);
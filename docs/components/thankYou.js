class ThankYou extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="header-page">
          <h3>Thank you for participating in</h3>
          <h2>On Memory Neurotechnologies</h2>
          <h3>We hope you enjoyed the article.</h3>
          <br/>
          <h4>For more information on the Neural Modeling and Interface Lab, see <a href="https://slab.usc.edu" target="_blank">here</a>.</h4>
          <br/>
          <h4>Wondering who built the article? Click below to see the team!</h4>
        </div>
    `;
  }
}

customElements.define("thank-you", ThankYou);

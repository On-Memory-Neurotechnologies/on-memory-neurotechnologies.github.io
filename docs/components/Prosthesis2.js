class Prosthesis2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="grid">
          <p class="paragraph-right">
          In the year 2035, memory prostheses like the one Pat will receive might be commonplace. Right now,
          scientists are working to make that future a reality.
          <br /><br />
          Our research team at the University of Southern California has developed a proof-of-concept system
          to deliver precise spatio-temporal patterns of stimulation to hippocampal neurons in human epilepsy
          patients to significantly improve short-term and long-term retention of visual information.
          <br /><br />
          This work moves the field closer to development of neural prostheses capable of restoring memory in
          dementia.
          </p>
      </div>
      `;
  }
}

customElements.define("the-prosthesis-2", Prosthesis2);

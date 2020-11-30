class vignette2Question2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              What information would you want displayed about the function of the implant?
            </p>
            <br />
            <textarea name="open-response" id="v2q2"></textarea>
          </div>
        </div>
      `;
  }
}

customElements.define("v2-q2", vignette2Question2);

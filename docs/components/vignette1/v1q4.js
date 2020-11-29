class vignette1Question4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              To what extent would the implant have to improve memory?
            </p>

            <form class="paragraph-middle">
              <input type="range" id="slider" name="slider" min="0" max="10">
            </form>
        </div>
      `;
  }
}

customElements.define("v1-q4", vignette1Question4);

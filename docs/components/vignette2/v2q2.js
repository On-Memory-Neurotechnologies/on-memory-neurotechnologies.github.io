class vignette2Question2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              What information would you want displayed about the function of the implant?
            </p>

            <form class="paragraph-middle">	
              <input type="text" name="paragraph" id="v2q2" />
            </form>
        </div>
      `;
  }
}

customElements.define("v2-q2", vignette2Question2);

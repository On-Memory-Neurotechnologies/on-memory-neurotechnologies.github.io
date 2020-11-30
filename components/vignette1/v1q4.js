class vignette1Question4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p class="paragraph-middle">
              <strong>To what extent</strong> would the implant have to improve memory?
            </p>

            <br />

            <form class="paragraph-middle">
              <div class="slider">
                <p><strong>no new memories</strong><p/>
                <input type="range" id="slider" name="slider" min="0" max="100">
                <p>
                    <strong>perfect memory
                  </strong>
                </p>
              </div>
              <p>remember things like<br/><strong>when you were younger</strong></p>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v1-q4", vignette1Question4);

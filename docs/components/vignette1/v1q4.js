class vignette1Question4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p class="paragraph-middle">
              To what extent would the implant have to improve memory?
            </p>

            <br />

            <form class="paragraph-middle">
              <div class="slider">
                <p>no new memories<p/>
                <input type="range" id="slider" name="slider" min="0" max="100">
                <p>
                  <span title="def. marked by or involving extraordinarily accurate and vivid recall especially of visual images">
                    <strong>[eidetic]</strong>
                  </span>
                  memory
                </p>
              </div>
              <p>remember things like<br/>when you were younger</p>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v1-q4", vignette1Question4);

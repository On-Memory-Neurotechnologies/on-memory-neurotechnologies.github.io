class vignette6Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Are you more concerned with the prospect of losing your identity through Alzheimer’s disease or
              losing agency through implantation?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice1" id="choice1-v6q1" checked>
              <label for="choice1-v6q1">
                Loss of identity is more concerning
              </label>
              <input type="radio" name="choice1" id="choice2-v6q1" checked>
              <label for="choice2-v6q1">
                Loss of agency is more concerning
              </label>
            </form>
        </div>
      `;
  }
}

customElements.define("v6-q1", vignette6Question1);

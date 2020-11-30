class vignette6Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              Are you more concerned with the prospect of losing your identity through Alzheimer’s disease or
              losing agency through implantation?
            </p>
            <br />
            <form class="yes-or-no" id="multiple-choice-vert">
              <button id="choice1-v6q1" type='button' checked>
                Loss of identity is more concerning
              </button>
              <button id="choice2-v6q1" type='button'>
                Loss of agency is more concerning
              </button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v6-q1", vignette6Question1);

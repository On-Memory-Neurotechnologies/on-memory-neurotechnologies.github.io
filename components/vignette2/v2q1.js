class vignette2Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
            If you or a loved one received treatment with memory neurotechnology, <strong>would you want to see an
            interface</strong> such as what Anne uses or would you prefer for it to be “out of sight, out of mind?”
            </p>
            <br />
            <form class="yes-or-no" id="multiple-choice-vert">
              <button id="yes-v2q1" type='button' checked>Yes, I would want to see an interface</button>
              <button id="no-v2q1" type='button'>No, I would not want to see an interface</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v2-q1", vignette2Question1);

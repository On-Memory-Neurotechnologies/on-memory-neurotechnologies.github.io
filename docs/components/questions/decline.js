class decline extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
            Have you personally experienced any level of  <strong>cognitive decline</strong>?
            </p>

            <br />

            <form class="yes-or-no">
              <button id="yes-decline" type='button' checked>Yes</button>
              <button id="no-decline" type='button'>No</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("decline-question", decline);

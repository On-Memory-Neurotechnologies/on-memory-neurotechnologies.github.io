class support extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
            Do you <strong>support Pat's decision</strong> to be implanted with a memory prosthesis?
            </p>

            <br />

            <form class="yes-or-no">
              <button id="yes-support" type='button' checked>Yes</button>
              <button id="no-support" type='button'>No</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("support-question1", support);

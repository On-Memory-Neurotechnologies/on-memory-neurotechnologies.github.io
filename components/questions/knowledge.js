class knowledge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
            Do you have any <strong>prior knowledge</strong> of brain stimulation devices?
            </p>

            <br />

            <form class="yes-or-no">
              <button id="yes-knowledge" type='button' checked>Yes</button>
              <button id="no-knowledge" type='button'>No</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("prior-knowledge", knowledge);

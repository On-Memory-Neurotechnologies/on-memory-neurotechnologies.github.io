class values extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <form>
              <label for="what-values">
                What <strong>values</strong> are important when considering implantation of a device?
              </label>
              <textarea name="what-values" id="what-values"></textarea>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("values-question", values);

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
            <form>
              <label for="how-decline">
                If yes, how does cognitive decline <strong>present in your life</strong>
              </label>
              <textarea name="how-decline" id="how-decline"></textarea>
            </form>
            <form>
              <label for="stage-decline">
                If yes, <strong>what stage</strong> of cognitive decline best represents your symptoms? 
              </label>
              <textarea name="stage-decline" id="stage-decline"></textarea>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("decline-question", decline);

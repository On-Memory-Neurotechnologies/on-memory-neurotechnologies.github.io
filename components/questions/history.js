class history extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
            Do you have a <strong>family history</strong> of AD?
            </p>

            <br />

            <form class="yes-or-no">
              <button id="yes-history" type='button' checked>Yes</button>
              <button id="no-history" type='button'>No</button>
            </form>
            <br/>
            <form>
              <label for="who-history">
                If yes, <strong>who in your family</strong> has had Alzheimer’s disease? 
              </label>
              <textarea name="who-history" id="who-history"></textarea>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("history-question", history);

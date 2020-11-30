class vignette4Question2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              Do you have concerns with using memory neurotechnologies as treatment to fulfill Dolly’s desire to
              provide childcare?
            </p>
            <br />
            <form class="yes-or-no">
              <button id="yes-v4q2" type='button' checked>Yes</button>
              <button id="no-v4q2" type='button'>No</button>
            </form>
            <br />
            <form>
              <label for="desc-v4q2">If yes, what concerns do you have?</label><br />
              <textarea name="description" id="desc-v4q1"></textarea>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v4-q2", vignette4Question2);

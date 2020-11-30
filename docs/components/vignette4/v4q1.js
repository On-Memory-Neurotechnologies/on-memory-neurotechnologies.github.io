class vignette4Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              Do you have <strong>concerns</strong> with Shannon’s input to Dolly’s decision for treatment with memory
              neurotechnology as a treatment for memory problems?
            </p>
            <br />
            <form class="yes-or-no">
              <button id="yes-v4q1" type='button' checked>Yes</button>
              <button id="no-v4q1" type='button'>No</button>
            </form>
            <br />
            <form>
              <label for="desc-v4q1">If yes, what concerns do you have?</label><br />
              <textarea name="description" id="desc-v4q1"></textarea>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v4-q1", vignette4Question1);

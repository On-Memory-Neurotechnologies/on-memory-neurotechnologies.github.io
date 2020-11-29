class vignette4Question2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Do you have concerns with using memory neurotechnologies as treatment to fulfill Dolly’s desire to
              provide childcare?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="yes-v4q2" checked>
              <label for="yes-v4q2">Yes</label>
              <input type="radio" name="choice" id="no-v4q2">
              <label for="no-v4q2">No</label>
              <input type="text" name="description" id="desc-v4q2">
              // <label for="desc-v4q2">If yes, what concerns do you have</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v4-q2", vignette4Question2);

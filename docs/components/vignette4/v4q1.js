class vignette4Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Do you have concerns with Shannon’s input to Dolly’s decision for treatment with memory
              neurotechnology as a treatment for memory problems?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="yes-v4q1" checked>
              <label for="yes-v4q1">Yes</label>
              <input type="radio" name="choice" id="no-v4q1">
              <label for="no-v4q1">No</label>
              <input type="text" name="description" id="desc-v4q1">
              <label for="desc-v4q1">If yes, what is it?</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v4-q1", vignette4Question1);

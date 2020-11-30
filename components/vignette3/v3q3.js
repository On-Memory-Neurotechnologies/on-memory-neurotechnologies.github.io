class vignette3Question3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              If your family decided that they wanted to reintroduce memories to a loved one with Alzheimer’s
              disease, would you want to introduce the memories yourselves or would you want a professional to do
              it?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="choice1-v3q3" checked>
              <label for="choice1-v3q3">Reintroduce the memories yourself</label>
              <input type="radio" name="choice" id="choice2-v3q3">
              <label for="choice2-v3q3">Have a professional do reintroduce them</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v3-q3", vignette3Question3);

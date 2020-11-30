class vignette5Question2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Imagine yourself in Amanda’s situation. <br /><br />
              Would you want your family member(s) to take charge of deciding whether you should receive treatment
              with memory neurotechnology?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="yes-v5q2" checked>
              <label for="yes-v5q2">Yes</label>
              <input type="radio" name="choice" id="no-v5q2">
              <label for="no-v5q2">No</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v5-q2", vignette5Question2);

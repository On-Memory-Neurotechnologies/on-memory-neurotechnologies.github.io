class vignette2Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
            If you or a loved one received treatment with memory neurotechnology, would you want to see an
            interface such as what Anne uses or would you prefer for it to be “out of sight, out of mind?”
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="yes-v2q1" checked>
              <label for="yes-v2q1">Yes, I would want to see an interface</label>
              <input type="radio" name="choice" id="no-v2q1">
              <label for="no-v2q1">No, I would not want to see an interface</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v2-q1", vignette2Question1);

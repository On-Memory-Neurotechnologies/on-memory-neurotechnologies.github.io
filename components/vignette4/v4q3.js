class vignette4Question3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
            Every medical treatment has pros and cons.
            </p>

            <form class="paragraph-middle">	
              <input type="text" name="description" id="answer1-v4q3" checked>
              <label for="answer1-v4q3">
                Which are the greatest benefits you perceive in implantable memory neurotechnologies?
              </label>
              <input type="text" name="description" id="answer2-v4q3" checked>
              <label for="answer2-v4q3">
                Which are your greatest concerns about implantable memory neurotechnologies?
              </label>
            </form>
        </div>
      `;
  }
}

customElements.define("v4-q3", vignette4Question3);

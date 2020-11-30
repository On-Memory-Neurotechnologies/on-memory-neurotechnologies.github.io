class vignette4Question3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <h3>
              Every medical treatment has pros and cons.
            </h3>
            <br />
            <form>
              <label for="answer1-v4q3">
                What are the <strong>greatest benefits</strong> you perceive in implantable memory neurotechnologies?
              </label><br />
              <textarea name="description" id="answer1-v4q3" checked></textarea><br />
              <br />
              <label for="answer2-v4q3">
                What are your <strong>greatest concerns</strong> about implantable memory neurotechnologies?
              </label><br />
              <textarea name="description" id="answer2-v4q3" checked></textarea>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v4-q3", vignette4Question3);

class vignette6Question2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              The rapid transition from experiencing active memory loss to restored memory function may cause
              distress for some patients.
            </p>

            <form class="paragraph-middle">
              <label for="answer-v6q2">
                If you or a loved one received treatment for dementia with memory neurotechnology, how would you
                want to navigate the adaptation period?
              </label>
              <input type="text" name="answer" id="answer-v6q2" checked>
            </form>
        </div>
      `;
  }
}

customElements.define("v6-q2", vignette6Question2);

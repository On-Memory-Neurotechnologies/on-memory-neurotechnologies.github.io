class vignette3Question3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              If your family decided that they wanted to reintroduce memories to a loved one with Alzheimer’s
              disease, <strong>would you want to introduce the memories yourselves</strong> or would you want a professional to do
              it?
            </p>
            <br />
            <form class="yes-or-no" id="multiple-choice-vert">
              <button id="yes-v3q3" type='button' checked>Reintroduce the memories yourself</button>
              <button id="no-v3q3" type='button'>Have a professional do reintroduce them</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v3-q3", vignette3Question3);

class vignette5Question2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              Imagine yourself in Amanda’s situation. <br /><br />
              <strong>Would you want your family member(s) to take charge</strong> of deciding whether you should receive treatment
              with memory neurotechnology?
            </p>
            <br />
            <form class="yes-or-no">
              <button id="yes-v5q2" type='button' checked>Yes</button>
              <button id="no-v5q2" type='button'>No</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v5-q2", vignette5Question2);

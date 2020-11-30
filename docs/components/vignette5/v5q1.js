class vignette5Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              It is not uncommon for family members to make medical decisions for a loved one when they are not
              able to provide consent to a treatment for themselves.
              <br /><br />
              In the absence of an advance directive, should family members (such as Joseph or Jill) take charge
              of medical decision making for a loved one receiving treatment for Alzheimer’s disease with memory
              neurotechnology?
            </p>
            <br />
            <form class="yes-or-no">
              <button id="yes-v5q1" type='button' checked>Yes</button>
              <button id="no-v5q1" type='button'>No</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v5-q1", vignette5Question1);

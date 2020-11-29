class vignette5Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              It is not uncommon for family members to make medical decisions for a loved one when they are not
              able to provide consent to a treatment for themselves.
              <br /><br />
              In the absence of an advance directive, should family members (such as Joseph or Jill) take charge
              of medical decision making for a loved one receiving treatment for Alzheimer’s disease with memory
              neurotechnology?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="yes-v5q1" checked>
              <label for="yes-v5q1">Yes</label>
              <input type="radio" name="choice" id="no-v5q1">
              <label for="no-v5q1">No</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v5-q1", vignette5Question1);

class vignette4Slide4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <p class="paragraph-middle">
            After her implantation surgery, Dolly’s symptoms improved greatly and she returned to her duties
            caring for Melanie after school
            <br /><br />
            One day, Dolly’s memory device malfunctioned and she forgot to pick Melanie up from school. Dolly’s
            doctors confirmed that this was a result of a temporary device malfunction and not due to a
            progression in Dolly’s Alzheimer’s disease.
          </p>
        </div>
      `;
  }
}

customElements.define("v4-slide4", vignette4Slide4);

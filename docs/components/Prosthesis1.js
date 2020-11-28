class Prosthesis extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-left">
                It’s hard to imagine yourself in Pat’s shoes but for many of us,
                Alzheimer’s disease will affect our lives in some way. It is estimated
                that 5.8 million Americans over the age of 65 have Alzheimer’s disease.
                With such a high prevalence, it’s likely that Alzheimer’s will touch
                your life whether it’s a parent, grandparent, spouse, another loved one,
                or yourself.
            </p>
        </div>
      `;
  }
}

customElements.define("the-prosthesis-1", Prosthesis);

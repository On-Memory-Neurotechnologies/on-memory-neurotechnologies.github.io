class vignette1Question3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              Knowing that the device cannot completely stop cognitive decline, would you advocate for yourself or
              a loved one to receive treatment for 
              <span title="def. Once the person reaches this stage, they will eventually become unable to communicate verbally or look after themselves. Quality of care is important to ensure that the person has quality of life.">
                <strong>[late stage] </strong>
              </span>
              dementia with memory neurotechnology?
            </p>

            <br />

            <form class="yes-or-no">
              <button id="yes-v1q3" type='button' checked>Yes</button>
              <button id="no-v1q3" type='button'>No</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v1-q3", vignette1Question3);

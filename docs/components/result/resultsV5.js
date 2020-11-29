class resultsV5 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <h2>Vignette 5</h2>
            <p>
              If you were to support a family member with AD receiving the prosthesis
              as treatment, you do / not would want to take charge of this medical
              decision-making process. This does not / agree with your judgement when
              you are the family member with AD.
            </p>
          </div>
        </div>
      `;
  }
}

customElements.define("result-5", resultsV5);

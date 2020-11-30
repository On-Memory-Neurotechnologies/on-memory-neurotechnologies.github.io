class resultsP4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
  // Original
    /*
    If you were to support a family member with AD receiving the prosthesis
    as treatment, you do / not would want to take charge of this medical
    decision-making process. This does not / agree with your judgement when
    you are the family member with AD.
    */
  // Example
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              If you were to support a family member with AD receiving the prosthesis
              as treatment, <strong>you would want to take charge of this medical
              decision-making process</strong>. This agrees with your judgement when
              you are the family member with AD.
            </p>
            <br/>
            <p>
              Finally, you are <strong>more concerned with losing identity</strong> due to a memory
              prosthesis than agency.
            </p>
          </div>
        </div>
      `;
  }
}

customElements.define("result-4", resultsP4);

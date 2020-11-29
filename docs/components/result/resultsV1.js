class resultsV1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <h2>Vignette 1</h2>
            <p>
              You would be interested in a prosthesis for X stage dementia
              if it restored memory function to this extent for some amount of time. <br /><br />
            </p>

            <h3>Ordered List of Pros and Cons (test / retest)</h3>
            <p>
              Your greatest concerns with the prosthesis are 1, 2, and 3.<br />
              The greatest perceived benefits, however, were 1, 2, and 3.<br />
              This changed after further information where XXX.
            </p>
          </div>
        </div>
      `;
  }
}

customElements.define("result-1", resultsV1);

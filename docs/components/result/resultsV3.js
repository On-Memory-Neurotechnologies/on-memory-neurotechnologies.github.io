class resultsV3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
  // Original
  /*
  <p>
  You would / not want forgotten memories to be reintroduced by X in
  cases where the event occured before / after the onset of memory problems.
  </p>
   */
  // Example
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <h2>Vignette 3</h2>
            <p>
              You would want forgotten memories to be reintroduced by yourself in
              cases where the event occured after the onset of memory problems.
            </p>
          </div>
        </div>
      `;
  }
}

customElements.define("result-3", resultsV3);

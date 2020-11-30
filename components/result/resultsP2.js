class resultsP2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
  // Original
  /*
  <p>
    You would / not want a user interface [and be able to see these things.]
    <br /><br />
    X percent of people agreed with you.
    </p>
  */

  // Example

    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
            You <strong>would want a user interface</strong> and be able to <strong>see battery levels</strong>, <strong>stimulation patterns</strong>, and <strong>performance metrics</strong>.
            </p>
            <p>
              You would want <strong>forgotten memories to be reintroduced by yourself</strong> in
              cases where the event occured after the onset of memory problems.
            </p>
          </div>
        </div>
      `;
  }
}

customElements.define("result-2", resultsP2);

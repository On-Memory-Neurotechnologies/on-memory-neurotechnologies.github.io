class resultsP1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Original
    /*
    You would be interested in a prosthesis for X stage dementia
    if it restored memory function to this extent for some amount of time. <br /><br />
    </p>

    <h3>Ordered List of Pros and Cons (test / retest)</h3>
    <p>
    Your greatest concerns with the prosthesis are 1, 2, and 3.<br />
    The greatest perceived benefits, however, were 1, 2, and 3.<br />
    This changed after further information where XXX.
  </p>
    */

    // Example response
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              You would be interested in a prosthesis for <strong>mid-stage</strong> dementia
              if it restored memory function <strong>to when you were younger<strong> for <strong>2 years</strong>. <br /><br />
            </p>
            <p>
              Your greatest concerns with the prosthesis are <strong>changes in personality</strong> and <strong>reintroduction of negative memories</strong>.<br />
              The greatest perceived benefits, however, were <strong>restored memory</strong>, <strong>increased time for loved ones</strong>, and <strong>improved overall cognitive function</strong>.<br />
             </p>
          </div>
        </div>
      `;
  }
}

customElements.define("result-1", resultsP1);

class resultsP3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
  // Original
  /*
  <p>
    You do / not have some concern about input from family members when
    deciding to receive a memory prosthesis to treat memory problems.
  </p>
  <p>
    When treatment also provides a mutual benefit to the patient and their
    family, you are also // not concerned.
  </p> 
  */

  // Example
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              You do have <strong>some concern about input from family members</strong> when
              deciding to receive a memory prosthesis to treat memory problems.
            </p>
            <br/>
            <p>
              When treatment also provides a mutual benefit to the patient and their
              family, <strong>you are also concerned</strong>.
            </p>
          </div>
        </div>
      `;
  }
}

customElements.define("result-3", resultsP3);

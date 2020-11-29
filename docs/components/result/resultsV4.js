class resultsV4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <h2>Vignette 4</h2>
            <p>
              You do / not have some concern about input from family members when
              deciding to receive a memory prosthesis to treat memory problems.
            </p>
            <p>
              When treatment also provides a mutual benefit to the patient and their
              family, you are also // not concerned.
            </p>
          </div>
        </div>
      `;
  }
}

customElements.define("result-4", resultsV4);

class OMP extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header-page">
        <h2>PART 2</h2>
        <h1>On Memory Prostheses</h1>
      </div>
    `;
  }
}

customElements.define("on-memory-prostheses", OMP);

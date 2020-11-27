class OMP extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <h2>PART 2</h2>
        <h1>On Memory Prostheses</h1>
    `;
  }
}

customElements.define("on-memory-prosthesis", OMP);

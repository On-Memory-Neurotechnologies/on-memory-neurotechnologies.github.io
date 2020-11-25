class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
     <nav>
      <div class="logo">
        <h1>OMN</h1>
      </div>
    </nav>
    `;
  }
}

customElements.define("nav-bar", Nav);

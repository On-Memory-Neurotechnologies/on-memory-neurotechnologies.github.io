class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
     <nav>
      <div class="logo">
        <a href="#"><h1>OMN</h1></a>
      </div>
    </nav>
    `;
  }
}

customElements.define("nav-bar", Nav);

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
      <ul>
        <li><a href="./index.html">Home</a></li>
      </ul>
    </nav>
    `;
    }
}

customElements.define('nav-bar', Nav);


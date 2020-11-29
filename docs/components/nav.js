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
      <div>
         <a href="index.html" class="nav-link">Home</a>
         <a href="team.html" class="nav-link">Team</a>
      </div>
    </nav>
    `;
  }
}

customElements.define("nav-bar", Nav);

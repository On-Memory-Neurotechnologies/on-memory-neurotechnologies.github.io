class vignette4Question5 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <p class="paragraph-middle">
            How would you and your loved one plan for the possibility that the implant could sometimes
            malfunction?          
          </p>

          <form class="paragraph-middle">
            <input type="text" name="description" id="answer-v4q5" checked>
          </form>
        </div>
      `;
  }
}

customElements.define("v4-q5", vignette4Question5);

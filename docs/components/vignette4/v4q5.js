class vignette4Question5 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="grid">
        <div class="paragraph-middle">
          <p>
            How would you and your loved one plan for the possibility that the implant could sometimes
            malfunction?          
          </p>
          <br />
          <form>
            <textarea name="description" id="answer-v4q5" checked></textarea>
          </form>
        </div>
      </div>
      `;
  }
}

customElements.define("v4-q5", vignette4Question5);

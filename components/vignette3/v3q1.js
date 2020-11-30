class vignette3Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              The combination of memory loss and a memory implant presents the unique opportunity to selectively
              reintroduce lost memories, changing a person’s memories of themselves.
              <br /><br />
              Does the family or doctor of an implanted individual have a responsibility to reintroduce lost
              memories, good or bad?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="yes-v3q1" checked>
              <label for="yes-v3q1">Yes</label>
              <input type="radio" name="choice" id="no-v3q1">
              <label for="no-v3q1">No</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v3-q1", vignette3Question1);

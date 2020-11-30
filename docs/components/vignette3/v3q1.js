class vignette3Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
            The combination of memory loss and a memory implant presents the unique opportunity to selectively
              reintroduce lost memories, changing a person’s memories of themselves.
              <br /><br />
              Does the family or doctor of an implanted individual have a responsibility to reintroduce lost
              memories, good or bad?
            </p>

            <br />

            <form class="yes-or-no">
              <button id="yes-v3q1" type='button' checked>Yes</button>
              <button id="no-v3q1" type='button'>No</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v3-q1", vignette3Question1);

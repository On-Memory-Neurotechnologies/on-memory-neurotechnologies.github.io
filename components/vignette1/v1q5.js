class vignette1Question5 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p class="paragraph-middle">
              Some pharmaceutical treatments for Alzheimer’s disease can be helpful for people in the mild to
              moderate stages of dementia for two to three years.
              <br /><br />
              What’s the <strong>minimum amount of time</strong> that a memory neurotechnology needs to postpone noticeable
              symptoms of cognitive decline for you to consider this treatment?
            </p>

            <br />

            <form class="yes-or-no" id="multiple-choice">
              <button id="time1" type='button' checked>1 year</button>
              <button id="time2" type='button'>2-3 years</button>
              <button id="time3" type='button'>4-5 years</button>
              <button id="time4" type='button'>5+ years</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v1-q5", vignette1Question5);

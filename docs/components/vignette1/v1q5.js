class vignette1Question5 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Some pharmaceutical treatments for Alzheimer’s disease can be helpful for people in the mild to
              moderate stages of dementia for two to three years.
              <br /><br />
              What’s the minimum amount of time that a memory neurotechnology needs to postpone noticeable
              symptoms of cognitive decline for you to consider this treatment?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="time1" checked>
              <label for="time1">time 1</label>
              <input type="radio" name="choice" id="time2">
              <label for="time2">time 2</label>
              <input type="radio" name="choice" id="time3">
              <label for="time3">time 3</label>
              <input type="radio" name="choice" id="time4">
              <label for="time4">time 4</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v1-q5", vignette1Question5);

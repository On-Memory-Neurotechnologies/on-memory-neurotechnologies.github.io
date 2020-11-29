class vignette2Slide1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Anne started treatment with memory neurotechnology to help with making new short-term memories. Her
              struggles with memory were very similar to Pat’s before she received her memory implant.
              <br /><br />
              Anne has always been very sporty. Even in her 70’s she still goes jogging a few days per week and
              uses an app to track her heart rate, speed, and the distance of the run.
            </p>
        </div>
      `;
  }
}

customElements.define("v2-slide1", vignette2Slide1);

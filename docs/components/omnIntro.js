class omnIntro extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              After her implantation surgery, Pat decided to join a social support group for people diagnosed with
              Alzheimer’s disease who also opted to receive treatment memory neurotechnology.
              <br /><br />
              You’ll now have a chance to meet some of the folks in Pat’s support group and learn more about
              reasons people might choose treatment with memory neurotechnology, as well as some of larger
              ethical, legal, and societal implications of introducing these technologies into the world.
            </p>
        </div>
      `;
  }
}

customElements.define("omn-intro", omnIntro);

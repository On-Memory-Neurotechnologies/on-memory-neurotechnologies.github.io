class omnIntro extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<div class="grid">
        <div class="paragraph-left">
                <img id="pat-image" src="assets/group.svg"/>
        </div>
        <div class="meet-pat-text paragraph-right">
          <div style="margin-bottom: 15px;">
          <h3>Pat Meets With Her Support Group</h3>
          <h4>November 18, 2037. Los Angeles, CA</h4>
          </div>
          <div>
          <p>
                After her implantation surgery, Pat decided to join a social support group for people diagnosed with
              Alzheimer’s disease who also opted to receive treatment memory neurotechnology.
            </p>              
          <p>
          You’ll now have a chance to meet some of the folks in Pat’s support group and learn more about
              reasons people might choose treatment with memory neurotechnology, as well as some of larger
              ethical, legal, and societal implications of introducing these technologies into the world.
          </p>
          </div>
        </div>
      </div>
      
        <div class="grid">
            <p class="paragraph-left">
              After her implantation surgery, Pat decided to join a social support group for people diagnosed with
              Alzheimer’s disease who also opted to receive treatment memory neurotechnology.
              <br /><br />
              You’ll now have a chance to meet some of the folks in Pat’s support group and learn more about
              reasons people might choose treatment with memory neurotechnology, as well as some of larger
              ethical, legal, and societal implications of introducing these technologies into the world.
            </p>
            <p class="paragraph-right">
                <img id="pat-image" src="assets/group.svg"/>
            </p>
        </div>
      `;
  }
}

customElements.define("omn-intro", omnIntro);

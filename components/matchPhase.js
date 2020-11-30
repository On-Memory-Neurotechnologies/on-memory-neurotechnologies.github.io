class match extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<div class="grid dark">
            <p class="paragraph-left flex">
                <img id="pat-image" class="half" src="assets/match.png"/>
            </p>
            <p class="paragraph-right">
              In the match phase, patients recall what they saw. The match phase allows researchers to evaluate how MIMO performs. 
              <br/><br/>
              In one study, scientists observed that patterns of electrical activity in MIMO had remarkable overlap with real neural activity in the CA1 region of the hippocampus. When MIMO performs well, it may help patients like Pat improve on the memory task and improve their ability to make new memories in their daily lives.
              <br/><br/>
              Soon enough, Pat is back at the shelter and her quality of life improves. 
</p>
        </div>
      `;
  }
}

customElements.define("match-phase", match);

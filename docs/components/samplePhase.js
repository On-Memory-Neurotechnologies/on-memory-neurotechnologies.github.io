class sample extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<div class="grid dark">
            <p class="paragraph-left">
              After implantation, patients perform a simple memory task to teach the MIMO model to mimic the function of her hippocampus.
              <br/><br/>
              The task has two phases: the sample phase and the match phase.
              In the sample phase, patients are shown several images on a computer screen and prompted to remember something about a target image. 
              The sample phase is when MIMO encodes the pattern of neuron firing related to seeing the target image and its location.
            </p>
            <p class="paragraph-right flex">
                <img id="pat-image" class="half" src="assets/sample.png"/>
            </p>
        </div>
      `;
  }
}

customElements.define("sample-phase", sample);

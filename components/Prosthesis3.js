class Prosthesis3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="grid dark">
          <p class="paragraph-middle">
              The model used in this prosthesis is a multi-input multi-output (MIMO) nonlinear dynamical model.
              Despite the complicated name, our MIMO model essentially acts as a bridge spanning the CA3 and CA1
              regions of the hippocampus: a structure in the brain damaged in the early stages of Alzheimer's
              disease.
              <br /><br />
              This model bypasses CA3-CA1 cells and mimics their computations that, in healthy people, convert
              short-term memories into long-term memories. And, in this way, we have shown that it can boost
              performance on visual memory tasks by 35%.
              <br /><br />
              <strong>Let’s see this in action!</strong>
          </p>
      </div>
      `;
  }
}

customElements.define("the-prosthesis-3", Prosthesis3);

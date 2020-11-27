class Prosthesis2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="content-page">
          <p class="omn-p2">
              Alzheimer’s disease and other dementia-related memory loss are the focus
              of an entire research field, and scientists are working every day to not
              only understand dementia, but also find ways to preserve and restore
              memories in dementia patients. In the year 2050, memory prostheses like
              the one Dr. Singh mentioned to Pat might be commonplace. Right now,
              scientists are working to make that future a reality. One example comes
              from the [name of Dong’s lab] at the University of Southern California.
              Scientists here have created a…
          </p>
      </section>
      `;
  }
}

customElements.define("the-prosthesis-2", Prosthesis2);

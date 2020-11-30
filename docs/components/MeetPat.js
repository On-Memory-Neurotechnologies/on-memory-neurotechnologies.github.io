class MeetPat extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="grid">
        <div class="paragraph-left">
          <img id="pat-image" src="assets/pat.svg"/>
        </div>
        <div class="meet-pat-text paragraph-right">
          <div style="margin-bottom: 15px;">
          <h3>Meet Pat</h3>
          <h4>May 23, 2035. Los Angeles, CA</h4>
          </div>
          <div>
          <p>
            The year is 2035. Pat is a 72-year old woman. She has a husband, two
            adult children, and three grandkids. For 30 years she worked as a
            librarian, but she retired 7 years ago and has volunteered three days
            per week at the local animal shelter ever since.
          </p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("meet-pat", MeetPat);

class MeetPat extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <img class="pat-image" src="assets/pat.svg" />
      <div class="meet-pat-text">
        <h2>Meet Pat</h2>
        <p>
          The year is 2035. Pat is a 72-year old woman. She has a husband, two
          adult children, and three grandkids. For 30 years she worked as a
          librarian, but she retired 7 years ago and has volunteered three days
          per week at the local animal shelter ever since.
        </p>
        <p>
          Recently, she started mixing up the times of her shifts at the
          shelter. Her family also began to notice her repeating questions like,
          “what’s everyone doing this weekend?” within a short period of time.
        </p>
        <p>
          After a trip to her GP and a referral to a Neurologist, Pat is
          diagnosed with Alzheimer’s disease.
        </p>
      </div>
    `;
  }
}

customElements.define("meet-pat", MeetPat);

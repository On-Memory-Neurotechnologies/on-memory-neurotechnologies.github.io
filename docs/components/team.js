class Team extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="header-page">
        <div id="team-header">
          <h2>The Team</h2>
          <h4>Click to learn more about all the wonderful people behind OMN</h4>
        </div>
        <br/>
        <div id="team">
            <a id="madison" onclick="getPerson('madison-long')">
                <img class="person" src="assets/team/madison.jpg" alt="Madison Long"/>
            </a>
            <a id="max" onclick="getPerson('max-eisele')">
                <img class="person" src="assets/team/max.jpg" alt="Max Eisele"/>
            </a>
            <a id="kulpreet" onclick="getPerson('kulpreet-cheema')">
                <img class="person" src="assets/team/kulpreet.jpg" alt="Kulpreet Cheema"/>
            </a>
            <a id="nadeen" onclick="getPerson('nadeen-mohamed')">
                <img class="person" src="assets/team/nadeen.jpg" alt="Nadeen Mohamed"/>
            </a>
            <a id="eugene" onclick="getPerson('eugene-lok')">
                <img class="person" src="assets/team/eugene.jpg" alt="Eugene Lok"/>
            </a>
            <a id="shweta" onclick="getPerson('shweta-sridharan')">
                <img class="person" src="assets/team/shweta.jpg" alt="Shweta Sridharan"/>
            </a>
            <a id="garrett" onclick="getPerson('garrett-flynn')">
                <img class="person" src="assets/team/garrett.jpg" alt="Garrett Flynn"/>
            </a>
        </div>
        <div id="person"></div>
        </div>
      `;
  }
}

customElements.define("team-page", Team);

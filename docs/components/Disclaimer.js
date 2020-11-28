class Disclaimer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="disclaimer-page">
        <div class="form">
          <h2 id="disclaimer-title">Welcome to On Memory Neurotechnologies</h2>
          <h3>
            In this experience, we will publicly display your <strong>anonymous</strong> feedback 
            (submitted on embedded forms) to gather public preferences 
            on cognitive neurostimulation devices.
          </h3>
          <br /><br />
          <h3>Here is your User ID:</h3>
          <h4>Save this so that, if requested, we can remove your data.</h4>
          <p id="user-id"></p>
          <br /><br />
          
          <h3>How old are you?</h3>
          <h4>You must be 18 or older to participate.</h4>
          <input class="form-input" type="text" name="age" required />
          <br /><br />

          <input type="checkbox" id="consent" name="consent" required />
          <label for="consent">
            I am at least 18 years of age and consent to the collection and display of my data for On Memory Neurotechnologies
          </label><br />
        </div>
      </div>
    `;
  }
}

customElements.define("omn-disclaimer", Disclaimer);

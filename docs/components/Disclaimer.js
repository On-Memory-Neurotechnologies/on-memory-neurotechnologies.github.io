class Disclaimer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="disclaimer-page">
        <div id="disclaimer-form" class="form">
          <div class="center-text">
          <h3>Here is your User ID:</h3>
          <h4>Please save this so that, if requested, we can remove your data.</h4>
          <p id="user-id"></p>
          </div>
          <br /><br />
          <h3>
            In this experience, we will collect and publicly display your <strong>anonymous</strong> responses 
            to understand public preferences about cognitive neurostimulation devices.
          </h3>
          <br/>
          <input type="checkbox" id="consent" name="consent" required />
          <label for="consent">
            I am at least 18 years of age and consent to the collection and display of my data for On Memory Neurotechnologies
          </label>
<!--          <h3>How old are you?</h3>-->
<!--          <h4>You must be 18 or older to participate.</h4>-->
<!--          <input class="form-input" type="text" name="age" required />-->
<!--          <br /><br />-->
        </div>
        <div id="warning-message"></div>
      </div>
    `;
  }
}

customElements.define("omn-disclaimer", Disclaimer);

class Disclaimer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="disclaimer-page">
        <h2 id="disclaimer-title">Disclaimer:</h2>
        <h3 id="disclaimer-description">
          We gather your data and it will be publicly visible (though anonymous)
        </h3>

        <p id="disclaimer-description">[D1]. Show an example display of data.</p><br />
        
        <div class="form">
          <h3>Please provide your email</h3>
          <h4>This is to send a user ID number that you can use to remove data.</h4>
          <input class="form-input" type="text" name="email" required />
          <br /><br />
          
          <h3>How old are you?</h3>
          <h4>You must be 18 or older to participate.</h4>
          <input class="form-input" type="text" name="age" required />
          <br /><br />

          <input type="checkbox" id="consent" name="consent" required />
          <label for="consent">
            I consent to the use of my data in the <a href="#">linked document</a>
          </label><br />
        </div>
      </div>
    `;
  }
}

customElements.define("omn-disclaimer", Disclaimer);

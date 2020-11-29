class TestForms extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="disclaimer-page">
        <form id="disclaimer-form" class="form">
          <h3>How old are you?</h3>
          <h4>You must be 18 or older to participate.</h4>
          <input class="form-input" type="text" name="age" required />
          <br /><br />
          <h3>Do you have a family member with Alzheimer's disease?</h3>
          <h4>Yes/No</h4>
          <input class="form-input" type="text" name="age" required />
          <br /><br />
        </form>
      </div>
    `;
  }
}

customElements.define("test-forms", TestForms);

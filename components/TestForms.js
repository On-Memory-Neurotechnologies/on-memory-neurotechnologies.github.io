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
          <input type="range" id="age" name="age" value = "25" min="18" max="110" oninput="updateAgeInput(this.value);">
          <p id="age-display">25</p>
          <br /><br />
          <h3>Do you have a family member with Alzheimer's disease?</h3>
          <input type="radio" name="choice" id="yes-v1q1" checked>
          <label for="yes-v1q1">Yes</label>
          <input type="radio" name="choice" id="no-v1q1">
          <label for="no-v1q1">No</label>
          <br /><br />
        </form>
      </div>
    `;
  }
}

customElements.define("test-forms", TestForms);

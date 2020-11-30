class surgeryChatBot extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<div class="grid dark">
        <div class="paragraph-left">
            <p>Time for Pat's surgery!</p>
            <h4>Click on Dr. Singh</h4>
        </div>
        <div class="paragraph-right">
        <div class="flex">
        <a onclick="fullscreenChat('surgery'); runChat(surgeryChat);"><img id="singh-image" src="assets/singh.svg"/></a>
        </div>
        <div class="chatbot" style='display: none'">
                 <ul id="surgery-messages" class="messages"></ul>
        </div>
        </div>
    </div>
    `;
  }
}

customElements.define("surgery-chatbot", surgeryChatBot);

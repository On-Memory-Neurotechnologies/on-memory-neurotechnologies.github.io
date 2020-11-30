class SinghChatBot extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<div class="grid">
<div class="paragraph-left">
            <p>After a trip to her family doctor and a referral to a Neurologist, Pat is diagnosed with Alzheimer’s disease.</p>
            <h4>Click Dr. Singh</h4>
        </div>
        <div class="paragraph-right">
        <div class="flex">
        <a onclick="fullscreenChat('singh'); runChat(singhChat);"><img id="singh-image" src="assets/singh.svg"/></a>
        </div>
        <div class="chatbot" style='display: none'>
                 <ul id="singh-messages" class="messages"></ul>
        </div>
        </div>
          </div>
    `;
  }
}

customElements.define("singh-chatbot", SinghChatBot);

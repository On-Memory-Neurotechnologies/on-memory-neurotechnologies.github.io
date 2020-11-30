class KennyChatBot extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<div class="grid">
        <div class="paragraph-left">
            <h3>Recently, she started mixing up the times of her shifts at the shelter.</h3>
            <h4>Click Pat's phone</h4>
        </div>
        <div class="paragraph-right">
        <div class="flex">
        <div class="phone">
            <div class="chatbot" onclick="fullscreenChat('kenny'); runChat(kennyChat);">
                 <ul id="kenny-messages" class="messages"></ul>
            </div>
            <div class="break"></div>
            <div class="phone-button"></div>
            </div>
          </div>
          </div>
          </div>
    `;
    }
}

customElements.define("kenny-chatbot", KennyChatBot);

class surgeryChatBot extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<div class="grid">
        <div class="paragraph-left">
            <p>Her family also began to notice her repeating questions within a short period of time.</p>
            <h4>Click Pat's cooking pot</h4>
        </div>
        <div class="paragraph-right">
        <div class="flex">
        <a onclick="fullscreenChat('surgery'); runChat(surgeryChat);"><img id="pat-image" src="assets/pot.svg"/></a>
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

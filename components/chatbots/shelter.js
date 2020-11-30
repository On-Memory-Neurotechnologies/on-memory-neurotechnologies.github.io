class shelterChatBot extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<div class="grid dark">
        <div class="paragraph-left">
            <p>Soon enough, Pat is back at the shelter and her quality of life improves. </p>
            <h4>Click on Kenny</h4>
        </div>
        <div class="paragraph-right">
        <div class="flex">
        <a onclick="fullscreenChat('shelter'); runChat(shelterChat);"><img id="pat-image" src="assets/kenny.svg"/></a>
        </div>
        <div class="chatbot" style='display: none'">
                 <ul id="shelter-messages" class="messages"></ul>
        </div>
        </div>
    </div>
    `;
    }
}

customElements.define("shelter-chatbot", shelterChatBot);

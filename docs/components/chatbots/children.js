class ChildrenChatBot extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<div class="grid">
        <div class="paragraph-left">
            <h3>Her family also began to notice her repeating questions within a short period of time.</h3>
            <h4>Click Pat's cooking pot</h4>
        </div>
        <div class="paragraph-right">
        <div class="flex">
        <a onclick="fullscreenChat('children'); runChat(childrenChat);"><img id="pat-image" src="assets/pot.svg"/></a>
        </div>
        <div class="chatbot" style='display: none' onclick="fullscreenChat('kenny'); runChat(kennyChat);">
                 <ul id="children-messages" class="messages"></ul>
        </div>
        </div>
    </div>
    `;
    }
}

customElements.define("children-chatbot", ChildrenChatBot);

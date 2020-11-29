class ChildrenChatBot extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<div class="grid">
        <div class="paragraph-left">
            <p>Her family also began to notice her repeating questions within a short period of time.</p>
            <h4>Click Pat's phone</h4>
        </div>
        <div class="paragraph-right">
        <div class="flex">
        <div class="phone">
            <div class="chatbot" onclick="fullscreenChat('children'); runChat(childrenChat);">
                 <ul id="children-messages" class="messages"></ul>
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

customElements.define("children-chatbot", ChildrenChatBot);

class KennyChatBot extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <div class="chatbot">
            <ul id="kenny" class="messages"></ul>
      </div>
    `;
    }
}

customElements.define("kenny-chatbot", KennyChatBot);

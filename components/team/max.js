class MaxEisele extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Max Eisele</h3>
                    <h4>Pitch Organizer</h4>
                    <br/>
                    <p><i>Coming soon...</i></p>
                    <br/>
`;
    }
}

customElements.define('max-eisele', MaxEisele);


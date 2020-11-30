class MaxEisele extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Max Eisele</h3>
                    <h4>Pitch Organizer</h4>
                    <br/>
                    <p>During NeuroNexus 2020, Max was a ________</p>
                    <br/>
`;
    }
}

customElements.define('max-eisele', MaxEisele);


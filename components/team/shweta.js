class ShwetaSridharan extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Shweta Sridharan</h3>
                    <h4>Interactive Content Programmer</h4>
                    <br/>
                    <p>During NeuroNexus 2020, Shweta was a ________. She had to leave the project during
                    Health Hack Week due to COVID-19.</p>
                    <br/>
`;
    }
}

customElements.define('shweta-sridharan', ShwetaSridharan);


class ShwetaSridharan extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Shweta Sridharan</h3>
                    <h4>Interactive Content Developer</h4>
                    <br/>
                    <p>Shweta was a developer of interactive content (e.g. memory prosthesis simulation) in On Memory Neurotechnologies. She had to leave the project during
                    Health Hack Week due to COVID-19.</p>
                    <br/>
`;
    }
}

customElements.define('shweta-sridharan', ShwetaSridharan);


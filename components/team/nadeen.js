class NadeenMohamed extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Nadeen Mohamed</h3>
                    <h4>Full-Stack Developer</h4>
                    <br/>
                    <p>During NeuroNexus 2020, Nadeen was a ________</p>
                    <br/>
`;
    }
}

customElements.define('nadeen-mohamed', NadeenMohamed);


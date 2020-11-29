class KulpreetCheema extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Kulpreet Cheema</h3>
                    <h4>UX Designer</h4>
                    <br/>
                    <p>During NeuroNexus 2020, Kulpreet was a ________</p>
                    <br/>
`;
    }
}

customElements.define('kulpreet-cheema', KulpreetCheema);


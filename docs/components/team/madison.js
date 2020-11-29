class MadisonLong extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Madison Long</h3>
                    <h4>Writer</h4>
                    <br/>
                    <p>During NeuroNexus 2020, Madison was a ________</p>
                    <br/>
`;
    }
}

customElements.define('madison-long', MadisonLong);


class EugeneLok extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Eugene Lok</h3>
                    <h4>Back-End Developer</h4>
                    <br/>
                    <p>During NeuroNexus 2020, Eugene was a ________</p>
                    <br/>                    
`;
    }
}

customElements.define('eugene-lok', EugeneLok);


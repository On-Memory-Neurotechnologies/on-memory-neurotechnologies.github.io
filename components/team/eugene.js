class EugeneLok extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Eugene Lok</h3>
                    <h4>Back-End Developer</h4>
                    <br/>
                    <p><i>Coming soon...</i></p>
                    <br/>                    
`;
    }
}

customElements.define('eugene-lok', EugeneLok);


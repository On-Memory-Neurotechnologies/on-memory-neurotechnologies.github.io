class KulpreetCheema extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Kulpreet Cheema</h3>
                    <h4>UX Designer</h4>
                    <br/>
                    <p>Kulpreet Cheema is a third year PhD student in Neuroscience studying at University of Alberta, Canada. Her role as a user experience designer was to include feedback from multiple stakeholders into the creation of the website. </p>
                    <br/>
`;
    }
}

customElements.define('kulpreet-cheema', KulpreetCheema);


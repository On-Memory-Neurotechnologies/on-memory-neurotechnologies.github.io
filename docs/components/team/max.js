class MaxEisele extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Max Eisele</h3>
                    <h4>Pitch Organizer</h4>
                    <br/>
                    <p>Max is a Master of Science student in Kinesiology at the University of Calgary. His research focuses on cancer survivors and how to support them to live active lives. Max also runs a volunteer based spinal cord and stroke rehabilitation afterhours program at the Foothills hospital. As a mixed methods researcher Max’s role during the NeuroNexus competition was the focus on knowledge translation and creating presentations on the progress of the article.</p>
                    <br/>
`;
    }
}

customElements.define('max-eisele', MaxEisele);


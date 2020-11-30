class Garrett extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Garrett Flynn</h3>
                    <h4>Challenge Champion</h4>
                    <br/>
                    <p>Garrett Flynn is a neurotechnologist in the Media Arts, Games, and Health (MA) program at the University of Southern California. Informed by his experiences at the <a href="slab.usc.edu" class="text">Neural Modeling and Interface Lab</a> under the guidance of <a href="#people" class="text" onclick="getPerson('dong-song')">Dr. Dong Song</a>, his work empowers the participatory, human-centered design of next-generation brain devices.
                     </p>
                     <br/>
`;
    }
}

customElements.define('garrett-flynn', Garrett);


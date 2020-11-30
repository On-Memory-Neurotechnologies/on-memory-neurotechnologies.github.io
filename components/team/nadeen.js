class NadeenMohamed extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Nadeen Mohamed</h3>
                    <h4>Full-Stack Developer</h4>
                    <br/>
                    <p>Nadeen is a fourth-year BSc student at the University of Alberta, currently pursuing a degree in Software Practice but with a background in Neuroscience. She is a back-end developer for On Memory Neurotechnologies and works on the implementation of the interactive article. When not hard at work with school and other programming extracurriculars, she enjoys woodworking, reading, baking, and playing virtual board games with friends.</p>
                    <br/>
`;
    }
}

customElements.define('nadeen-mohamed', NadeenMohamed);


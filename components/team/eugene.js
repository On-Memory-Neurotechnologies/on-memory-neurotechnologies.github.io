class EugeneLok extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Eugene Lok</h3>
                    <h4>Back-End Developer</h4>
                    <br/>
                    <p>Eugene is a fourth-year Geomatics Engineering student at the University of Calgary. For the Neuro Nexus 2020 challenge, he utilizes his experience with developing web applications with JavaScript to assist with the On Memory Neurotechnologies team. During his spare time, Eugene likes to bike, hang out with friends, and find new places to eat.</p>
                    <br/>                    
`;
    }
}

customElements.define('eugene-lok', EugeneLok);


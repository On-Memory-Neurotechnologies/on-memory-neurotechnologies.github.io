class MadisonLong extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                    <h3>Madison Long</h3>
                    <h4>Writer</h4>
                    <br/>
                    <p>Madison is a PhD student in Neuroscience at the University of Calgary where her research uses MRI scans to characterize patterns of brain development in very young children. Her role as an ethics writer during NeuroNexus 2020 utilizes her interests in neuroethics and patient-oriented research toward developing an interactive article on memory neurotechnologies for patients with dementia. As an avid runner, hiker, and outdoor enthusiast, she can often be found braving Calgary’s cold weather to enjoy the beautiful mountain scenery with <a href="https://www.instagram.com/_johndog/?hl=en">@_johndog</a></p>
                    <br/>
`;
    }
}

customElements.define('madison-long', MadisonLong);


class vignette4Slide5 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Shannon and Dolly decide that one missed pickup is not a big deal because Melanie was safe at school
              and the issue was easily solved with a phone call to Shannon. However, now that the device has
              malfunctioned once, Dolly and Shannon are concerned that it could happen again and potentially put
              Melanie in harm’s way.            
            </p>
        </div>
      `;
  }
}

customElements.define("v4-slide5", vignette4Slide5);

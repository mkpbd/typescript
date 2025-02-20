class ComponentElement extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const title = document.createElement('h1');
        title.textContent = 'General Soda';
        shadow.appendChild(title);
    }
}
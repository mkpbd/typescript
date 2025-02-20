

class PonyModelElement extends HTMLElement {

    constructor() {
        super();
        console.log("hello Kamal");


    }

    /**
* This is called when the component is inserted
*/
    connectedCallback() {
        this.innerHTML = '<h1>General Soda</h1>';
    }
}



customElements.define("kamal", PonyModelElement);
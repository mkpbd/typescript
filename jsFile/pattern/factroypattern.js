"use strict";
class BalletFlat {
    constructor() {
        this.purpose = 'dancing';
    }
}
class Boot {
    constructor() {
        this.purpose = 'woodcutting';
    }
}
class Sneaker {
    constructor() {
        this.purpose = 'walking';
    }
}
let Shoe = {
    create(type) {
        switch (type) {
            case 'balletFlat': return new BalletFlat;
            case 'boot': return new Boot;
            case 'sneaker': return new Sneaker;
        }
    }
};
//===========Builder Pattern ===========
class RequestBuilder {
    constructor() {
        this.url = null;
        this.data = null;
        this.method = null;
    }
    setURL(url) {
        this.url = url;
        return this;
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    send() {
        // ...
    }
}
new RequestBuilder()
    .setURL('/users')
    .setMethod('get')
    .setData({ firstName: 'Anna' })
    .send();

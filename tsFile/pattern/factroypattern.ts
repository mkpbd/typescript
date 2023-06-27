/**
 * The factory pattern is a way to create objects of some type, leaving the decision of
 * which concrete object to create to the specific factory that creates that object.
 */
type Shoe = {
    purpose: string
}
class BalletFlat implements Shoe {
    purpose = 'dancing'
}
class Boot implements Shoe {
    purpose = 'woodcutting'
}
class Sneaker implements Shoe {
    purpose = 'walking'
}

let Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
        switch (type) {
            case 'balletFlat': return new BalletFlat
            case 'boot': return new Boot
            case 'sneaker': return new Sneaker
        }
    }
}


//===========Builder Pattern ===========

class RequestBuilder {
    private url: string | null = null
    private data: object | null = null
    private method: 'get' | 'post' | null = null
    setURL(url: string): this {
        this.url = url
        return this
    }
    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }
    setData(data: object): this {
        this.data = data
        return this
    }

    send() {
        // ...
    }
}

new RequestBuilder()
    .setURL('/users')
    .setMethod('get')
    .setData({ firstName: 'Anna' })
    .send()
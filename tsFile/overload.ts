type CreateElement = {
    (tag: 'a'): HTMLAnchorElement
    (tag: 'canvas'): HTMLCanvasElement
    (tag: 'table'): HTMLTableElement
    (tag: string): HTMLElement
}

function createElement(tag: 'a'): HTMLAnchorElement
function createElement(tag: 'canvas'): HTMLCanvasElement
function createElement(tag: 'table'): HTMLTableElement
function createElement(tag: string): HTMLElement {

    return new HTMLTableElement;
}

function warnUser(warning: any): void {
    if (warnUser?.wasCalled) {
        return
    }

    warnUser.wasCalled = true
    alert(warning)
}
warnUser.wasCalled = false


type WarnUser = {
    (warning: string): void
    wasCalled: boolean
};
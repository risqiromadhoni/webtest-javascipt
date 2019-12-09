const assert = require('assert')

// TODO: Visit home page new window app
describe('dimia.id home page', () => {
    it('should have the right title', () => {
        browser.url('https://dimia.id')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Riset market dan produk laris | Dimia')
    })
})

for (let i = 0; i < 300; i++) {
    describe('dimia.id new home page', () => {
        it('should have the right title', () => {
            browser.newWindow('https://dimia.id', 'Riset market dan produk laris | Dimia', 'width=420,height=230,resizable,scrollbars=yes,status=1')
            const title = browser.getTitle()
            assert.strictEqual(title, 'Riset market dan produk laris | Dimia')
        })
    })  
}

describe('dimia.id close home page', () => {
    it('should have the right title', () => {
        browser.closeWindow()
        console.log(`END =>>${browser.getTitle()}`);
    })
})  

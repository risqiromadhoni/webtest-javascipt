let assert = require('assert')

// TODO: Visit and search keyword
for (let i = 0; i < 300; i++) {
    describe('Multiple windows', () => {
        it('Handle multiple windows', () => {
            // navigate to the url
            browser.url("https://dimia.id");
            let clickCobaGratis = $('a=COBA GRATIS')
            clickCobaGratis.click();
            let searchInput = $('#inlineFormInputGroup')
            searchInput.setValue('batik')
            let searchButton = $('button=Submit')
            searchButton.click();
            // get the Session id of the Parent
            var parentGUID = browser.getWindowHandle();
            // click the button to open new window
            // $("#two-window").click();
            browser.newWindow('https://dimia.id');
            browser.pause(5000);
            // get the All the session id of the browsers
            var allGUID = browser.getWindowHandles();
    
            // pint the title of th epage
            console.log("Page title before Switching : "+ browser.getTitle());
            console.log("Total Windows : "+allGUID.length);
            // iterate the values in the set
            for(var i = 0; i< allGUID.length;i++){
                // one enter into if blobk if the GUID is not equal to parent window's GUID
                if(allGUID[i] != parentGUID){
                    // switch to the guid
                    browser.switchToWindow(allGUID[i]);
                    // break the loop
                    break;
                }
            }
            // search on the google page
            clickCobaGratis = $('a=COBA GRATIS')
            clickCobaGratis.click();
            earchInput = $('#inlineFormInputGroup')
            searchInput.setValue('batik')
            searchButton = $('button=Submit')
            searchButton.click();
            title = browser.getTitle();
            assert.strictEqual(title, 'Riset market dan produk laris')
            console.log(`Process ==>> ${title}`);
            // print the title after switching
            console.log("Page title after Switching to Next Test : "+ browser.getTitle());
            browser.pause(5000);
            // close the browser
            browser.closeWindow();
            // switch back to the parent window
            browser.switchToWindow(parentGUID);
            // print the title
            console.log("Page title after switching back to Parent: "+ browser.getTitle());
        })
    })
}
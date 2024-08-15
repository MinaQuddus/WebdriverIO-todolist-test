describe('Amazon Search Box Tests',  () => {
before (async () => {
        await browser.url('https://www.amazon.com');
    });

    it('should accept input and perform search', async () => {
        const searchBox = await $('#twotabsearchtextbox');
        await searchBox.setValue('laptop');
        const searchButton = await $('#nav-search-submit-button');
        await searchButton.click();
        //  const searchResults = await $('span.a-color-state');
        //  expect(await searchResults.getText()).to.include('laptop');
    });

 it('should show suggestions while typing', async () => {
        const searchBox = await $('#twotabsearchtextbox');
        await searchBox.setValue('lap');
        
        await browser.waitUntil(async () => {
            const suggestions = await $('#suggestions');
            return suggestions.isDisplayed();
        }, {
            timeout: 5000,
            timeoutMsg: 'expected suggestions to be displayed after 5s'
        });

        const suggestions = await $('#suggestions');
        expect(await suggestions.isDisplayed()).to.be.true;
    });

     });


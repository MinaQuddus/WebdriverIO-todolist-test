
describe('My Todo Application', function () {
    it('should be able to add a new todo item', async function () {
  await browser.url('http://127.0.0.1:5500/index.html')
const inputfield = $(' input[type="text"]');
      inputfield.setValue('Buy milk');
  
      const submitform = $('[type="submit"]') ;
     await submitform.click();
     await $('[name="todos"]').setValue(completed);


    browser.pause(4000)
  


    });

});

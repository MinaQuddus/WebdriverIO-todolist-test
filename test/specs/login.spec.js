

const Logingpage = require('../pages/login.page')
 
 
 describe ('Demo Test', () => {

    it('Login Test', async () => {
       browser.url('https://the-internet.herokuapp.com/login') 

     await Logingpage.login('tomsmith', 'SuperSecretPassword!')

    //    await $('#username').setValue('tomsmith')
    //   await $('#password').setValue('SuperSecretPassword!')
    //   await $('button[type="submit"]').click()

    // // await $('#flash').toHaveText('You logged into a secure area!')
    // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')

    })
})




class LoginPage{

    get usernameTextbox(){
        return $('#username')
    }
    get passwordTextbox(){
        return $('#password')
    }
    get loginButton(){
        return $('button[type="submit"]')
    }
    get loginMessage(){
        return $('#flash')
    } 
    
    
    
async login(username,password){


    await this.usernameTextbox.setValue(username)
    await this.passwordTextbox.setValue(password)
    await this.loginButton.click()

}
async checkMessage(msg){
    await expect(this.loginMessage).toHaveTextContaining(msg)
}

     
}
module.exports = new LoginPage()

 

import LoginPage from './../pages/LoginPage';


const dataset = require('./../../fixtures/ui/login.json');

describe('Login Test', ()=> {

    dataset.forEach(eachData => {
        it('Login Positive Test', ()=> {

        cy.visit("http://leaftaps.com/opentaps/");

        new LoginPage()
            .doLogin(eachData.uname, eachData.password)
            .clickLogout();

        })
    })


})
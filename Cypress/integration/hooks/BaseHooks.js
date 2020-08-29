import LoginPage from './../pages/LoginPage'
import ViewLeadPage from '../pages/ViewLeadPage';

beforeEach('Login', ()=>{
    cy.visit("http://leaftaps.com/opentaps/");
    new LoginPage()
        .doLogin('DemoSalesManager', 'crmsfa')
        .clickCRMSFA();
})


afterEach('lLogout', ()=>{
    new ViewLeadPage()
        .clickOpenTaps()
        .clickLogout()
})


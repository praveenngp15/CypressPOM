import LoginPage from '../pages/LoginPage';
import MyHomePage from '../pages/MyHomePage';
import ViewLeadPage from '../pages/ViewLeadPage';

const dataset = require('../../fixtures/ui/createLead.json');
require('./../hooks/BaseHooks');

describe('Create Lead Test', ()=> {

    dataset.forEach(eachData => {
        it('Create Lead Positive Test', ()=> {
            new MyHomePage()
                .clickLeadsTab()
                .clickCreateLeadLink()
                .createLead(eachData.org,eachData.fname,eachData.lname,eachData.source)
            new ViewLeadPage()
                .verifyCompanyName(eachData.org)
            })
    })


})
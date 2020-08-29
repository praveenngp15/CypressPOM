import LoginPage from '../pages/LoginPage';
import MyHomePage from '../pages/MyHomePage';
const dataset = require('../../fixtures/ui/DuplicateLead.json');
require('./../hooks/BaseHooks');

describe('Create Lead Test', ()=> {
        it('Create Lead Positive Test', ()=> {
            new MyHomePage()
                .clickLeadsTab()
                .clickFindLeadLink()
                .clickEmailTab()
                .typeEmailId('demo@demolead1.com')
                .clickFindLeads()
                .clickFirstResult()
                .clickDuplicateLead()
                
            })
})
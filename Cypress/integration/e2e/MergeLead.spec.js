import LoginPage from '../pages/LoginPage';
import MyHomePage from '../pages/MyHomePage';
import ViewLeadPage from '../pages/ViewLeadPage';

const dataset = require('../../fixtures/ui/createLead.json');
require('./../hooks/BaseHooks');

describe('Create Lead Test', ()=> {

        it('Create Lead Positive Test', ()=> {
            new MyHomePage()
                .clickLeadsTab()
                .clickMergeLeadLink()
                .typeIDFrom('10023')
                .typeIDTo('10022')
                .clickMergeLead()
                .clickFindLead()
                .typeLeadId('10023')
                .clickFindLeads()
                .verifyErrormsg()
            })
})
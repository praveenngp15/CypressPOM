// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';


require('cypress-xpath')
require('@shelex/cypress-allure-plugin');
require('./../integration/lib/CyBase');
require('./../integration/lib/CyEdit');
require('./../integration/lib/CyElement');
require('./../integration/lib/CySelect');


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.on('fail', (error, runnable) => {
  debugger
  throw error // throw error to have test still fail
})

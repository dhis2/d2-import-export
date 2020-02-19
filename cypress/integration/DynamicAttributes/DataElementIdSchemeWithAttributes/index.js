import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

const loginUrl = Cypress.env('dhis2_base_url')

Given('a unique attribute is associated with data elements', () => {
    cy.server()
        .stubWithFixture({
            url: `${loginUrl}/api/attributes.json?paging=false&fields=id,displayName&filter=unique:eq:true&filter=dataElementAttribute:eq:true`,
            fixture: 'dataElementAttributes',
        })
        .as('dataElementAttributesXHR')
})

Given('the user is on the data import page', () => {
    cy.visitPage('import', 'data')
})

Given('the user is on the data export page', () => {
    cy.visitPage('export', 'data')
})

Then(
    'it should be a selectable option in the data element id scheme input',
    () => {
        cy.showMoreOptions()
        cy.wait(['@dataElementAttributesXHR'])
            .then(xhr => xhr.response.body)
            .then(({ attributes }) => {
                cy.get('[data-test="input-data-element-id-scheme"]').click()
                cy.get('[data-test="dhis2-uicore-select-menu"]').then(
                    $selectMenu => {
                        attributes.forEach(({ id }) => {
                            expect(
                                $selectMenu
                                    .find(`[data-value="ATTRIBUTE:${id}"]`)
                                    .toArray()
                            ).to.have.lengthOf(1)
                        })
                    }
                )
            })
    }
)

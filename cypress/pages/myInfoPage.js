class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            genericComboBox: ".oxd-select-text",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
            fourthItem: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
            submitButton: ".orangehrm-left-space" 
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().eq(0).type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId) {
        cy.get(this.selectorsList().genericField).eq(5).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.contains('Successfully Updated').should('be.visible')
        cy.get('.oxd-toast-close').click({force: true})
    }

    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true })
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true })
        cy.get(this.selectorsList().thirdItemCombobox).click
    }
    
}

export default MyInfoPage
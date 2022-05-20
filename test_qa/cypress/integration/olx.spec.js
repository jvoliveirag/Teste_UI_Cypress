describe('visit google', () => {

    it('Login na plataforma com sucesso!', () => {
        let userInfo = createUser();
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
        cy.get("input[name=username]").type(userInfo[0]);
        cy.get("input[name=password]").type(userInfo[1]);
        cy.get('.btn-primary').click();

    })
    
})

function createUser(){
    let hour = new Date().getHours().toString();
    let min = new Date().getMinutes().toString();
    let sec = new Date().getSeconds().toString();

    let username = 'testeQA_' + hour + min + sec
    let password = hour + min + sec

    let user_info = [username,password]

    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
    cy.get('.btn-link').click();
    cy.get('#firstName').type("Carlin");
    cy.get('#Text1').type("Guiça");
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.btn-primary').click();
    cy.get(".alert-success").should("contain.text","Registration successful")

    return user_info;
}
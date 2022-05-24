describe('Cenário de teste: Testar as funcionalidades do site Valorant', () => {

    it('5º Caso de teste: Criar uma conta e acessa para validar.', () => {
        let userInfo = createUser(); //criando usuario
        cy.visit("https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=yPzOjxm9Wz2qkGMU9eSlAjlDT_r0xVw7CyDW4eR1zCQ&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account&state=752b639982967fdfbd0bb7dc95&uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in%2F%3Fredirect%3D%2Fdownload%2F");
        cy.get("input[name=email]").type(userInfo[0]);
        cy.get("input[name=password]").type(userInfo[2]);
        cy.get('.btn-primary').click();
    })

    it('2º Caso de teste: Colocar uma senha incorreta.', () => {
        let userInfo = createUser(); //criando usuario
        cy.visit("https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=yPzOjxm9Wz2qkGMU9eSlAjlDT_r0xVw7CyDW4eR1zCQ&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account&state=752b639982967fdfbd0bb7dc95&uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in%2F%3Fredirect%3D%2Fdownload%2F");
        cy.get("input[name=email]").type(userInfo[0]);
        cy.get("input[name=password]").type('Teste123654'); //senha aleatoria para gerar o erro
        cy.get('.btn-primary').click();
        cy.get(".alert-success").should("contain.text","Seu nome de usuário ou senha podem estar incorretos ou pode ser necessário atualizar para uma Conta Riot se você não joga há alguns meses. Confira o link Não consegue fazer login? para mais informações.")
    })

    it('3º Caso de teste: Colocar a senha correta.', () => {
        let userInfo = createUser(); //criando usuario
        cy.visit("https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=yPzOjxm9Wz2qkGMU9eSlAjlDT_r0xVw7CyDW4eR1zCQ&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account&state=752b639982967fdfbd0bb7dc95&uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in%2F%3Fredirect%3D%2Fdownload%2F");
        cy.get("input[name=email]").type(userInfo[0]);
        cy.get("input[name=password]").type(userInfo[2]); //senha correta
        cy.get('.btn-primary').click();
    })

    it('4º Caso de teste: Buscar um jogador no ranking.', () => {
        cy.visit('https://playvalorant.com/pt-br/leaderboards/?page=1&act=3e47230a-463c-a301-eb7d-67bb60357d4f');
        cy.get('#search').type('MIBR frz#2000');
        cy.get('.btn-primary').click();
    })

    it('5º Caso de teste: Alterar o idioma.', () => {
        
    })

    it('6º Caso de teste: Esqueceu a senha.', () => {
        
    })
    
})

function createUser(){
    let hour = new Date().getHours().toString();
    let min = new Date().getMinutes().toString();
    let sec = new Date().getSeconds().toString();

    let email = 'test_email' + hour + min + sec + '@gmail.com'
    let username = 'teste' + hour + min + sec
    let password = hour + min + sec

    let user_info = [email,username,password]

    cy.visit("https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=yPzOjxm9Wz2qkGMU9eSlAjlDT_r0xVw7CyDW4eR1zCQ&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account&state=752b639982967fdfbd0bb7dc95&uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in%2F%3Fredirect%3D%2Fdownload%2F");
    cy.get('.btn-link').click();
    cy.get('date_of_birth_day').type('12')
    cy.get('date_of_birth_month').type('09')
    cy.get('date_of_birth_year').type('2000')
    cy.get('#email').type(email);
    cy.get('#username').type(username)
    cy.get('#password').type(password);
    cy.get('.btn-primary').click();
    
    cy.get(".alert-success").should("contain.text","O nome de usuário deve ser único.") //pode ocorrer de, coincidentemente, o nome gerado já existir e, caso exista a mensagem sera retornada conforme consta no ".should"
    return user_info;
}
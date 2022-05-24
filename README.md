# Teste_UI_Cypress
Este repositório refere-se à disciplina de Qualidade de Software (S206) do Instituto Nacional de Telecomunicações - INATEL.

<img align="right" width="250" src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg">

# Teste de interface do site Valorant
Projeto desenvolvido para testar o site do jogo [Valorant](https://playvalorant.com/)

<h4 align="left"> 
	Autor :pencil2:
</h4>

<p align="left">
 <a href="https://github.com/jvoliveirag">João Victor de Oliveira Gomes Ribeiro</a> 
</p>

#

## Sumário
* [Testes realizados](#Testes-realizados)
* [Pré-Requisitos](#Pré-requisitos)
* [Como executar](#Como-executar)
* [Relatório de testes](#Relatórios)

#

## Cenário de Teste :pencil: <a name="Testes-realizados"></a> 

Testar as funcionalidades do site do jogo Valorant  

* Casos de Teste:

	1. Criar uma conta: 
		Foi criada uma função createUser() para gerar um usuário e, a partir dela uma nova conta é criada e acessada conforme descrito no caso de teste abaixo.
	 	```
		let userInfo = createUser(); //criando usuario
        cy.visit("https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=yPzOjxm9Wz2qkGMU9eSlAjlDT_r0xVw7CyDW4eR1zCQ&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account&state=752b639982967fdfbd0bb7dc95&uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in%2F%3Fredirect%3D%2Fdownload%2F");
        cy.get("input[name=email]").type(userInfo[0]);
        cy.get("input[name=password]").type(userInfo[2]);
        cy.get('.btn-primary').click();
		```

		```
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
		```

	2. Colocar a senha incorreta:  
		Através do comando ```cy.visit``` a página de login é acessada e, em seguida, usamos o ```cy.get``` para "pegar" cada elemento necessário para realizar um cadastro e, através do ```type``` adicionamos as informações desejadas. Depois disso, utilizamos novamente o ```cy.get``` para "pegar" o botão e com o ```click```, simular o click no botão. Como neste teste colocamos uma senha incorreta, o site apresentará uma mensagem dizendo que "Seu nome de usuário ou senha podem estar incorretos..." e por meio dessa mensagem conseguimos fazer nossa assertiva para verificar se o teste passou. Para isso, inicialmente "pegamos" o elemento que contém a mensagem e em seguida com o ```should``` verificamos a respectiva mensagem é exibida.
		```
		let userInfo = createUser(); //criando usuario
        cy.visit("https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=yPzOjxm9Wz2qkGMU9eSlAjlDT_r0xVw7CyDW4eR1zCQ&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account&state=752b639982967fdfbd0bb7dc95&uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in%2F%3Fredirect%3D%2Fdownload%2F");
        cy.get("input[name=email]").type(userInfo[0]);
        cy.get("input[name=password]").type('Teste123654'); //senha aleatoria para gerar o erro
        cy.get('.btn-primary').click();
        cy.get(".alert-success").should("contain.text","Seu nome de usuário ou senha podem estar incorretos ou pode ser necessário atualizar para uma Conta Riot se você não joga há alguns meses. Confira o link Não consegue fazer login? para mais informações.")
		```

	3. Colocar a senha correta:
		Este caso é parecido com de cima, a diferença é que será informada a senha correta. Logo, usaremos mais aquela mensagem para validar o teste.
		```
		let userInfo = createUser(); //criando usuario
        cy.visit("https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=yPzOjxm9Wz2qkGMU9eSlAjlDT_r0xVw7CyDW4eR1zCQ&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account&state=752b639982967fdfbd0bb7dc95&uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in%2F%3Fredirect%3D%2Fdownload%2F");
        cy.get("input[name=email]").type(userInfo[0]);
        cy.get("input[name=password]").type(userInfo[2]); //senha correta
        cy.get('.btn-primary').click();
		```

	4. Buscar um jogador no ranking:  
		

	5. Alterar o idioma:  

		
	6. Esqueceu a senha:  

#

## Pré-requitos :white_check_mark: <a name="Pré-requisitos"></a>
* Instalar o [Nodejs](https://nodejs.org/en/)

#

## Como executar :rocket: <a name="Como-executar"></a>
* Clone este repositório na sua máquina;
* Abra no seu editor a pasta **test_qa**;
* Instalar o Cypress pela linha de comando:
	```
	npm install cypress
	```
* Para abrir o Cypress e rodar os testes acesse o diretório:
	```
	test_qa\node_modules\.bin
	```
* Então execute, no termninal, o seguinte comando:
	```
	npm run cypress:open
	```
#

## Relatório de testes :clipboard: <a name="Relatórios"></a>
1. Para exibir o relatório de testes no terminal, execute um dos comandos a seguir:
	1.  ```
		./node_modules/.bin/cypress run --spec 'cypress/integration/lista_cypress/**/'
		```
	2. ```
		npx cypress run --spec 'cypress/integration/lista_cypress/**/'
		```

2. Para gerar o relatório pelo Mochawesome:
	* Instale a dependência pelo comando:
		```
		npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
		```
	* Em seguida, execute o seguinte comando para criar o relatório html:
		```
		npx marge mochawesome.json
		```
#


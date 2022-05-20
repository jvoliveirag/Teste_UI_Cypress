# Teste_UI_Cypress
Este repositório refere-se à disciplina de Qualidade de Software (S206) do Instituto Nacional de Telecomunicações - INATEL.

<img align="right" width="250" height="194" src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png">

# Teste de interface OLX
Projeto desenvolvido para testar o site [OLX](https://www.olx.com.br/)

<h4 align="center"> 
	Autor :pencil2:
</h4>

<p align="center">
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
- ```Testar as funcionalidades do site OLX```  
Casos de Teste:
	1. Colocar uma idade inadequada:  
		
	2. Colocar uma idade adequada:  
		
	3. Cadastrar um produto:  
		
	4. Buscar um produto:  
		
	5. "Comprar" um produto:  
		
	6. Favoritar um produto:  

#

## Pré-requitos :white_check_mark: <a name="Pré-requisitos"></a>
* Instalar o [Nodejs](https://nodejs.org/en/)

#

## Como executar :rocket: <a name="Como-executar"></a>
* Clone este repositório na sua máquina;
* Abra no seu editor a pasta **lista_pratica**;
* Instalar o Cypress pela linha de comando:
	```
	npm install cypress
	```
* Para abrir o Cypress e rodar os testes, execute um dos comandos a seguir:
	1. ```
		./node_modules/.bin/cypress open
		```
	2. ```
		npx cypress open
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


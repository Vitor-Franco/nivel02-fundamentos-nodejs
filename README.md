# Desafio Nível02 - Fundamentos NodeJS

## O desafio

O princípio do desafio era implementar o TypeScript juntamente ao NodeJS, a fim de por em prática. No entanto, o desafio era composto por:

Criar um backend que tivesse rotas para podermos registrar nosso **controle financeiro** e salvá-los no "BANCO DE DADOS" (sem usar algum banco, como um bom iniciante).

Para isso possuímos **duas rotas**:

- **`POST /transactions`**.
- **`GET /transactions`**.

Na rota de POST, podemos registrar uma saída/entrada nova, juntamente com sua descrição e um ID único.

Na rota de GET, podemos listar todas transações e não menos importante, um balanço total que possui **Total Gasto, Entradas e Saídas**.

## Aprovação

Para que o desafio seja dado como **finalizado**, temos alguns testes presentes. Dentre estes:

-**`should be able to create a new transaction`**.
-**`should be able to list the transactions`**.
-**`should not be able to create outcome transaction without a valid balance`**.

### Conclusão

O desafio foi bem desafiador, pois o objetivo principal era por em prática algumas técnicas de desenvolvimento, como colocar "tipagem no JS" a partir do TypeScript, e utilizarmos alguns conceitos de **PATTERNS**, como por exemplo:

1. **Repository Pattern** para fazer uma ponte de comunicação do nossa aplicação com a nossa fonte de dados. Essa implementação visa isolar a forma com que nos comunicamos com os dados, abstraindo lógicas comuns de operações no banco.
2. **Service Pattern** o seu objetivo é abstrair regras de negócio da nossa aplicação, tornando o código mais reutilizável, e também removendo a complexidade das nossas rotas.
3. Por final, usando também alguns conceitos do **SOLID** nos patterns acima.

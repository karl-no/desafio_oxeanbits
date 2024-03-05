# Desafio Oxeanbits
**Desafio para vaga de FrontEnd - Foco em React:**

<!-- ```bash
  npm install
``` -->

<!-- ```bash
  npm run dev
``` -->

É preciso ter o npm

<details>
  <summary><strong>⌨️ Primeiros passos</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:karl-no/desafio_oxeanbits.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd desafio_oxeanbits`
  - Certifique-se que está na branch principal:
    - `git checkout main && git pull`.

  2. Instale as dependências

  - `npm install`.
  
</details>

<details>
  <summary><strong>💻 Licenças das APIs e variáveis de ambiente</strong></summary><br />

  - O repositório contém um arquivo chamado `.env.example` com exemplo de como devem ser as variáveis de ambiente para rodar o projeto.
  A seguinte variável de ambiente deve ser alterada de acordo com a chave de API da conta do usuário na plataforma TMDB:
    - VITE_API_KEY adquirida através da API da [TMDB](https://developer.themoviedb.org/docs/getting-started);
  
  - A chave da API [Kendo UI](https://www.telerik.com/kendo-react-ui/components/my-license/), deve ser obtida no site da empresa e, após configurada uma conta de usuário:
    - baixe o arquivo `kendo-ui-license.txt` e o coloque dentro da pasta app (a mesma que contém o arquivo 'package.json');
    - dentro da pasta app, rode o comando `npx kendo-ui-license activate`.
  
</details>

<details>
  <summary><strong>💻 Rodando o projeto</strong></summary><br />

  - `npm run dev`
  
</details>

<!-- <details>
  <summary><strong>🛠 Testes</strong></summary><br />

 A [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro) será utilizada para execução dos testes.

 Na descrição dos requisitos será pedido a adição de atributos `data-testid` nos elementos _HTML_. 
  
 Para deixar evidente esta configuração veja o exemplo: 
  - se o requisito pedido for _"crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`"_, você pode escrever:

  ```html
  <button data-testid="my-action" ></button>
  ```

  ou

  ```html
  <a data-testid="my-action"><a/>
  ```

O atributo `data-testid="my-action"` servirá para que a React Testing Library (RTL) identifique o elemento. Desta forma será possível realizar testes unitários focados no comportamento da aplicação. 
    
  Você pode executar todos os testes unitários localmente para verificar a solução proposta com o comando abaixo:

  ```bash
  npm test
  ```

  Você pode executar os testes para um único requisito passando, como parâmetro para o comando, o nome do arquivo de teste alvo:

  ```bash
  npm test src/__tests__/requirement1.test.js
  ```

  ** :eyes: De olho na dica:** Desativando testes

  Caso queira avaliar apenas um tópico do requisito, você pode usar o `.only` após o `it`. Com isso, será possível que apenas esse tópico rode localmente e seja avaliado.

  ![image](it-only.png)
  ![image](only-one-green.png)

  :warning: **ATENÇÃO!** :warning: O avaliador automático não avalia, necessariamente, seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então não se assuste se isso acontecer, ok?
</details> -->

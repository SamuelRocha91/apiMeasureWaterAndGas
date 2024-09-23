# <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Full Stack Projects" width="52" height="40" />  API de medição de contas de gás e água <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Java Projects Logo" width="52" height="40" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ar.md)

Trata-se de uma API desenvolvida para gerenciar medições de clientes em diferentes tipos de serviços. A aplicação utiliza Node.js, TypeScript, Prisma, Express.js e outras tecnologias para oferecer um backend robusto e escalável.

![Status: Em Desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

## FrontEnd
- 📏 [React Precision Application](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md) - Interface de cadastro de medições de gás e de água


![Rodando backend com docker](./src/gifs/apiMeasure.gif)
![Requisição post pra criar customer](./src/images/postCustomer.png)



## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no backend.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **Express.js**: Framework web minimalista para Node.js.
- **Prisma**: ORM que facilita o acesso ao banco de dados.
- **Mysql**: Banco de dados utilizado durante o desenvolvimento.
- **ESLint**: Ferramenta de linting para manter o código limpo e padronizado.
- **Jest**: Framework de testes utilizado para garantir a qualidade do código.
- **Mocha**: Utilizado para testes adicionais.
- **Google Generative AI**: Integrado para analisar imagens de medidores e extrair valores numéricos das medições.
- **Swagger**: Integrado para gerar uma documentação para as rotas.


## Estrutura do Projeto

O projeto segue uma estrutura modular para facilitar a manutenção e a escalabilidade. As principais pastas e arquivos são:

- `src/`: Contém o código-fonte da aplicação.
  - `controllers/`: Lógica de controle, onde as requisições são processadas.
  - `db/`: Gera uma instância prisma de conexão com o banco de dados para toda a aplicação.
  - `exceptions/`: Cria exceções customizadas pra lidar com erros durante a execução da aplicação.
  - `ìnterfaces/`: Cria interfaces e tipos para lidar com parâmetros e retornos de função.
  - `middlewares/`: Middlewares para validações e tratamentos.
  - `models/`: Lógica de conexão com o banco de dados.
  - `services/`: Camada de serviços que interage com o Prisma e realiza operações de negócios.
  - `routes/`: Definição das rotas da API.
  - `utils/`: Funções utilitárias, como manipulação de imagens e interação com a API da Google Generative AI.
  - `tests/`: Testes automatizados para validar as funcionalidades.

## Funcionalidades

- **Listar Medições**: Permite listar todas as medições de um cliente específico, filtrando por tipo de medição.
- **Gerenciamento de Imagens**: As imagens de medições são salvas e recuperadas através de URLs temporárias, utilizando Base64.
- **Validação de Parâmetros**: Middleware para validar parâmetros de entrada, garantindo a integridade das requisições.
- **Análise de Imagens com Google Generative AI**: A API analisa imagens de medições e extrai o valor de consumo mostrado.

## Como Rodar o Projeto

### Requisitos

- Node.js
- Docker (opcional para ambiente de desenvolvimento)

### Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/apiShopper.git
    cd apiMeasureWaterAndGas
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` com as configurações necessárias.
    - Exemplo:
      ```env
      DATABASE_URL="file:./dev.db"
      GEMINI_API_KEY="sua_chave_api_google"
      HOST="http://localhost:3000"
      ```

4. Rode as migrações do banco de dados:
    ```bash
    npx prisma migrate dev
    ```

5. Inicie o servidor:
    ```bash
    npm run dev
    ```

### Docker

Você pode rodar o projeto usando Docker. Para isso, execute:

```bash
docker-compose up --build
```

## Testes

Os testes são executados com Jest e Mocha. Para rodar todos os testes:

```bash
npm run test
```

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests. Toda contribuição é bem-vinda!

## Scripts Disponíveis

- `start`: Inicia a aplicação.
- `dev`: Inicia a aplicação em modo de desenvolvimento.
- `build`: Compila o código TypeScript para JavaScript.
- `lint`: Executa o ESLint para verificar a conformidade do código.
- `lint:fix`: Executa o ESLint e corrige problemas automaticamente.
- `prisma:generate`: Gera os tipos do Prisma.
- `prisma:migrate`: Executa migrações do banco de dados.
- `prisma:seed`: Popula o banco de dados com dados iniciais.
- `docker`: Instala as dependências, gera os tipos do Prisma, executa migrações e inicia o servidor usando o Nodemon.
- `test`: Executa todos os testes usando Mocha e Jest.

## Configuração de Imagem

Funções utilitárias para salvar e gerar URLs para imagens:

- **`saveBase64Image`**: Salva uma imagem Base64 em um arquivo no servidor.
- **`getImageUrl`**: Gera uma URL temporária para acessar a imagem.
- **`extractMimeType`**: Extrai o tipo MIME de uma imagem Base64.
- **`extractSize`**: Calcula o tamanho de uma imagem Base64.

## Análise de Imagens com Google Generative AI

A função **`checkMeasureValue`** utiliza o Google Generative AI para analisar imagens de medições e extrair o valor de consumo.

```javascript
async function checkMeasureValue(mime: string, base64: string): Promise<number> {
  const result = await model.generateContent([
    {
      inlineData: {
        mimeType: mime,
        data: base64
      }
    },
    { text: PROMPT }
  ]);

  return Number(result.response.text().match(/\d+/)[0]);
}
```

Essa função é usada para garantir que o valor da medição seja extraído com precisão a partir da imagem fornecida.

## Outros repositórios:

- 💎 [Delivery BackEnd](https://github.com/SamuelRocha91/delivery_back) 
- 🛒 [Consumy Application](https://github.com/SamuelRocha91/consumy) 
- 👨‍💼 [Seller Application](https://github.com/SamuelRocha91/seller_application) 
- 💲 [Paymenty API](https://github.com/SamuelRocha91/paymenty) 


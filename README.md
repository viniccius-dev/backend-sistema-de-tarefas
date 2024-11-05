# Sistema de Tarefas - Back-end

![Badge em desenvolvimento](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)

Back-end do **Sistema de Tarefas**, desenvolvida em Node.js. Este servidor fornece as APIs necessárias para a funcionalidade do front-end da aplicação.

## Índice

- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Demonstração
Você pode acessar o deploy deste projeto no Render:  
[Deploy do Back-end](https://backend-sistema-de-tarefas.onrender.com)

## Funcionalidades

- **CRUD de tarefas**
- **Criar, editar, excluir e visualizar tarefas**

## Pré-requisitos

Para rodar o back-end localmente, você precisará de:

- **Node.js** (versão recomendada: >=14)
- **npm** ou **yarn** para gerenciamento de pacotes
- **SQLite**

## Instalação e Execução

Siga os passos abaixo para rodar o projeto em sua máquina local:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/viniccius-dev/backend-sistema-de-tarefas

2. **Acesse a pasta do back-end**
    ```bash
    cd backend-sistema-de-tarefas

3. **Instale as dependências**
    ```bash
    npm install

4. **Inicie o servidor de desenvolvimento**
    ```bash
    npm run dev
O servidor estará disponível em `http://localhost:3333`

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução para JavaScript no back-end
- **Express** - Framework para criação de APIs
- **SQLite** - Banco de dados em memória

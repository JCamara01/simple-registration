# simple-registration

Este é um projeto simples de sistema de cadastro de usuários feito com HTML, CSS e JavaScript puro, utilizando o localstorage do navegador para armazenar os dados.

## Funcionalidades

- Cadastrar novos usuários com nome, email, senha e status (ativo/inativo)
- Validação de campos do formulário
- Listar usuários cadastrados
- Editar dados de usuários existentes
- Excluir usuários da lista
- Armazenamento persistente via localStorage

## Estrutura de Pastas

- ├── index.html # Tela de listagem de usuários
- ├── pages/
- │ └── register.html # Tela de cadastro/edição de usuário
- ├── css/
- │ └── style.css # Estilos para todas as páginas
- ├── js/
- │ ├── scripts.js # Scripts da listagem de usuários
- │ └── register.js # Scripts de validação e cadastro
- ├── img/
- │ └── pexels-asadphoto-7663307.jpg # Imagem de fundo da aplicação


## Validações no Formulário

O formulário de cadastro realiza validações personalizadas:
- Validação de formato de e-mail
- Validação de apenas letras no campo nome
- Validação de tamanho mínimo e máximo dos campos

## Como Usar

1. Clone ou baixe este repositório.
2. Abra o arquivo index.html em um navegador.
3. Clique em "Novo usuário" para adicionar um novo registro.
4. Preencha o formulário com os dados e clique em "Salvar".
5. Para editar, clique no ícone ✏️ ao lado do usuário.
6. Para excluir, clique no ícone 🗑️.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Armazenamento com localStorage

## Créditos da Imagem

Imagem de fundo por Asad Photo Maldives(https://www.pexels.com/@asadphotography/) via Pexels(https://www.pexels.com/photo/aerial-view-of-trees-near-seashore-7663307/)


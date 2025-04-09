# 🐉 Dragon Ball Characters - React + API

Este é um projeto em **React** que consome a [API pública do Dragon Ball](https://dragonball-api.com/api/characters) para exibir uma galeria com personagens e suas informações.

---

## 📌 Índice

1. [🚀 Introdução](#-introdução)  
2. [🔗 API Utilizada](#-api-utilizada)  
3. [📁 Estrutura do Projeto](#-estrutura-do-projeto)  
4. [⚙️ Detalhamento dos Arquivos](#-detalhamento-dos-arquivos)  
5. [📦 Instalação](#-instalação)  
6. [📋 Considerações Finais](#-considerações-finais)

---

## 🚀 Introdução

Esta aplicação React foi desenvolvida para consumir uma API pública e exibir informações detalhadas de personagens do universo Dragon Ball. Ela está dividida em três partes principais:

- **Serviços (API)**  
- **Componentes (UI)**  
- **Estilos (JS inline)**

---

## 🔗 API Utilizada

A API utilizada é:

> 🌐 https://dragonball-api.com/api/characters

Ela retorna informações como:

- Nome
- Imagem
- Raça
- Ki (nível de energia)
- Afiliação
- Entre outros atributos

---

## 📁 Estrutura do Projeto

```bash
src/
├── components/         # Componentes React (ex: DragonBallCharacters.js)
├── services/           # Configuração do Axios para requisições
├── styles/             # Estilos em JavaScript (inline)
├── App.js              # Componente principal da aplicação
└── index.js            # Ponto de entrada da aplicação


 --Detalhamento dos Arquivos--
services/api.js
Arquivo onde o Axios é configurado com a base da URL da API. Isso permite chamadas simplificadas, como api.get('/characters').

components/DragonBallCharacters.js
Este componente:

Utiliza useEffect para buscar dados ao montar.

Usa useState para controlar estado dos personagens, carregamento e erros.

Renderiza os cards com nome, imagem, raça, ki e afiliação.

Aplica estilos visuais agradáveis nos cards usando objetos JS inline.

styles/DragonBallCharacters.js
Define os estilos para:

Container principal

Cards dos personagens

Imagens e descrições

Os estilos são exportados como objetos JavaScript.

App.js
Componente principal da aplicação. É responsável por renderizar o título e o componente de personagens.

index.js
Ponto de entrada da aplicação React. Ele renderiza o <App /> dentro do elemento #root no HTML.

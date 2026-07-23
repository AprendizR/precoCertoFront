# Preço Certo — Frontend (Web)

**Preço Certo** é a interface web da aplicação desenvolvida para ajudar **microempreendedores** a entenderem, registrarem e controlarem **custos, despesas, vendas e lucro**, com foco em **precificação correta** e geração de **DRE (Demonstrativo de Resultado do Exercício)**.

Este repositório contém o código-fonte do **Frontend**, construído em React com TypeScript para proporcionar uma experiência de usuário ágil, responsiva e integrada à API REST do backend.

---

## 📋 Sobre o Projeto

O front-end foi arquitetado pensando em **componentização limpa**, **tipagem estática rigorosa** com TypeScript e **feedback visual amigável** para o usuário final.

- **Arquitetura modular:** Separação clara entre páginas (`pages`), componentes reutilizáveis (`components`), serviços de comunicação com a API (`api`) e tipagens (`types`).
- **Navegação fluida:** Rotas dinâmicas configuradas com React Router.
- **Experiência refinada:** Alertas e confirmações customizadas utilizando SweetAlert2.

---

## ✨ Funcionalidades (Interface do Usuário)

- **Gestão de Insumos:** Telas para cadastro, listagem, edição e exclusão de insumos, com seleção de unidades de medida (G, ML, UN).
- **Gestão de Custos Fixos:** Interface para controle de custos operacionais (gás, energia e despesas fixas) com validações em tempo de execução.
- **Navegação por Abas/Páginas:** Páginas dedicadas (Home, Insumos, Custos Fixos, Movimentação, Receitas, e Venda.) acessíveis via rotas estruturadas.
- **Feedback Dinâmico:** Tratamento de erros de conexão/CORS e mensagens de sucesso integradas ao fluxo de cadastro e alteração de dados.

---

## 🛠 Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **Vite** (Build tool e ambiente de desenvolvimento)
- **React Router DOM** (Gerenciamento de rotas)
- **SweetAlert2** (Modais e alertas interativos)
- **CSS / Estilização Modular**

---

## ⚙️ Confira o Backend em: 

 - **https://github.com/AprendizR/precoCerto**

## 📜 Licença
 - **Este projeto está licenciado sob a MIT License — veja o arquivo LICENSE para detalhes.**
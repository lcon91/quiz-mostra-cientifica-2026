# Mostra Científica 2026 - Quiz de Abreviações

Um aplicativo web interativo criado especialmente para a **Mostra Científica 2026**. O objetivo deste projeto é ensinar e testar os conhecimentos sobre as abreviações em inglês mais utilizadas na comunicação digital (como WhatsApp, e-mails corporativos, jogos, etc).

## 🚀 Funcionalidades

O aplicativo possui dois modos principais:

1. **Quiz Rápido**
   - Um jogo rápido de 10 perguntas focado no conhecimento de siglas e abreviações em inglês.
   - 4 opções de múltipla escolha com feedback visual imediato (verde para correto, vermelho para incorreto).
   - Temporizador de 10 segundos por questão para adicionar dinamismo.
   - Tela final com o resultado da pontuação ("Certificado Digital").

2. **Base de Abreviações (Library)**
   - Um dicionário completo listando todas as abreviações do banco de dados.
   - Campo de busca em tempo real para pesquisar por abreviações ou significados específicos.
   - Fornece a sigla, o significado, a descrição e exemplos práticos de uso.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído focando na leveza, acessibilidade e simplicidade técnica:
- **HTML5**: Estrutura semântica e acessível.
- **CSS3 (Vanilla)**: Design moderno, responsivo e baseado em variáveis para fácil manutenção. Inspirado nas diretrizes visuais da feira.
- **JavaScript (Vanilla)**: Toda a lógica do quiz, navegação entre as telas (Single Page Application simulada) e manipulação do DOM sem uso de frameworks externos.

## 📂 Estrutura de Arquivos

- `index.html`: Arquivo principal contendo a estrutura da interface e as 4 telas do aplicativo (Start, Quiz, Results, Learn).
- `styles.css`: Estilização global do projeto.
- `script.js`: Lógica de gerenciamento de estado, temporizador do quiz e renderização da interface.
- `data.js`: Banco de dados contendo o array de abreviações e questões.
- `contemporaneo-logo.jpg`: Logo da instituição/evento.

## 💻 Como Executar

O projeto **não necessita de instalação, dependências ou backend**. Ele roda inteiramente no navegador!

1. Baixe os arquivos do projeto.
2. Dê um clique duplo no arquivo `index.html`.
3. O aplicativo abrirá no seu navegador padrão e já estará pronto para uso.

> **Dica**: O layout foi projetado para ser "Mobile First", o que o torna ideal para ser exibido em telas de tablets ou celulares durante a feira de ciências.

## 🌐 Publicação (Opcional)

Para publicar online, o aplicativo é 100% compatível com soluções de hospedagem estática gratuita, como o **GitHub Pages**, **Vercel** ou **Netlify**. Basta fazer o upload ou conectar o repositório.

---
*Projeto desenvolvido para a Mostra Científica 2026.*

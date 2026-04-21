# 🎨 Design System — Quiz Mostra Científica 2026
> Prompt para o Antigravity redesenhar o projeto com base nas novas inspirações visuais.

---

## 🎯 Instrução Principal

Refatore completamente o design visual do projeto seguindo o novo design system abaixo.
**Não altere lógica, conteúdo ou funcionalidades** — apenas aplique o novo visual.

---

## 🎨 Paleta de Cores

```css
:root {
  /* Primárias */
  --color-navy:        #1E2460;   /* Azul-marinho escuro — títulos, textos, nav ativa */
  --color-navy-mid:    #2D3561;   /* Variante média — bordas selecionadas, badges */
  --color-yellow:      #F5C518;   /* Amarelo vibrante — botões primários, destaque */
  --color-yellow-dark: #E6B800;   /* Amarelo hover/pressed */

  /* Neutros */
  --color-bg:          #F5F5FA;   /* Fundo geral — cinza muito claro */
  --color-surface:     #FFFFFF;   /* Cards, modais */
  --color-border:      #E8E8F0;   /* Bordas sutis */

  /* Semânticas */
  --color-text-primary:   #1E2460;
  --color-text-secondary: #6B7280;
  --color-text-muted:     #9CA3AF;

  /* Badges coloridas */
  --color-badge-purple:   #E8E4F8;
  --color-badge-blue:     #DBEAFE;
  --color-badge-green:    #D1FAE5;
  --color-badge-red:      #FEE2E2;
  --color-badge-yellow:   #FEF9C3;
}
```

---

## 🔤 Tipografia

```css
/* Importar do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

:root {
  --font-family: 'Nunito', sans-serif;

  --font-size-xs:   11px;
  --font-size-sm:   13px;
  --font-size-base: 15px;
  --font-size-lg:   18px;
  --font-size-xl:   22px;
  --font-size-2xl:  28px;
  --font-size-3xl:  36px;

  --font-weight-regular: 400;
  --font-weight-semi:    600;
  --font-weight-bold:    700;
  --font-weight-extra:   800;
  --font-weight-black:   900;
}

/* Aplicação */
h1, h2 { font-weight: 900; color: var(--color-navy); }
h3, h4  { font-weight: 800; color: var(--color-navy); }
body    { font-family: var(--font-family); background: var(--color-bg); }
```

---

## 📦 Componentes

### Fundo / Background
```css
body {
  background-color: var(--color-bg);
  background-image:
    radial-gradient(circle, #C8C8D8 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### Cards
```css
.card {
  background: var(--color-surface);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 12px rgba(30, 36, 96, 0.06);
  padding: 20px;
}

/* Card com borda left colorida (ex: abreviações) */
.card--accent-left {
  border-left: 4px solid var(--color-yellow);
}
```

### Botão Primário (Amarelo)
```css
.btn-primary {
  background: var(--color-yellow);
  color: var(--color-navy);
  font-weight: 800;
  font-size: var(--font-size-lg);
  border: none;
  border-radius: 50px;          /* pill shape */
  padding: 16px 32px;
  width: 100%;
  box-shadow: 0 4px 16px rgba(245, 197, 24, 0.4);
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-primary:hover {
  background: var(--color-yellow-dark);
  box-shadow: 0 6px 20px rgba(245, 197, 24, 0.5);
}

.btn-primary:active {
  transform: scale(0.97);
  box-shadow: 0 2px 8px rgba(245, 197, 24, 0.3);
}
```

### Botão Secundário (Outline Navy)
```css
.btn-secondary {
  background: transparent;
  color: var(--color-navy);
  font-weight: 700;
  border: 2px solid var(--color-border);
  border-radius: 50px;
  padding: 14px 32px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
```

### Opções do Quiz (Answer Options)
```css
.option {
  background: var(--color-surface);
  border: 1.5px solid var(--color-border);
  border-radius: 16px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.option__letter {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--color-bg);
  color: var(--color-text-secondary);
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
  flex-shrink: 0;
}

/* Estado: selecionado */
.option.selected {
  border: 2px solid var(--color-navy);
  background: #F0F2FF;
}

.option.selected .option__letter {
  background: var(--color-yellow);
  color: var(--color-navy);
}

/* Badge "SELECTED" */
.option.selected::after {
  content: 'SELECTED';
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: white;
  background: var(--color-navy);
  padding: 3px 8px;
  border-radius: 6px;
  margin-left: auto;
}

/* Estado: correto */
.option.correct {
  border-color: #22C55E;
  background: #F0FDF4;
}

.option.correct .option__letter {
  background: #22C55E;
  color: white;
}

/* Estado: errado */
.option.wrong {
  border-color: #EF4444;
  background: #FFF5F5;
}
```

### Progress Bar
```css
.progress-bar {
  height: 12px;
  background: var(--color-border);
  border-radius: 50px;
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  background: var(--color-yellow);
  border-radius: 50px;
  position: relative;
  transition: width 0.3s ease;
}

/* Thumb brilhante no final */
.progress-bar__fill::after {
  content: '';
  position: absolute;
  right: -1px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  background: white;
  border: 3px solid var(--color-yellow-dark);
  border-radius: 50%;
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);
}
```

### Streak / Contador
```css
.streak-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--font-size-sm);
  font-weight: 800;
  color: var(--color-navy);
}

.streak-badge__icon {
  color: var(--color-yellow);
  font-size: 16px;
}
```

### Badge / Tag de Categoria
```css
.tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: var(--font-size-xs);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.tag--section {
  background: var(--color-navy);
  color: white;
  border-radius: 10px;
  padding: 6px 14px;
  font-size: var(--font-size-sm);
}
```

### Bottom Navigation
```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-around;
  padding: 10px 0 20px;
}

.bottom-nav__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: var(--color-text-muted);
  padding: 8px 20px;
  border-radius: 14px;
  cursor: pointer;
}

/* Item ativo */
.bottom-nav__item.active {
  background: var(--color-yellow);
  color: var(--color-navy);
}
```

### Toast / Feedback Flutuante
```css
.toast {
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  border-radius: 20px;
  padding: 8px 14px;
  font-size: var(--font-size-sm);
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  color: var(--color-navy);
  transform: rotate(2deg);
}
```

### Achievement Cards (Tela de Resultado)
```css
.achievement {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 16px;
  text-align: center;
}

.achievement__icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
  font-size: 22px;
}

.achievement__icon--purple { background: var(--color-badge-purple); }
.achievement__icon--yellow { background: var(--color-badge-yellow); }

.achievement__title {
  font-size: var(--font-size-base);
  font-weight: 800;
  color: var(--color-navy);
}

.achievement__subtitle {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  margin-top: 2px;
}
```

---

## 📐 Espaçamentos e Layout

```css
:root {
  --spacing-xs:   4px;
  --spacing-sm:   8px;
  --spacing-md:  16px;
  --spacing-lg:  24px;
  --spacing-xl:  32px;

  --radius-sm:   8px;
  --radius-md:  16px;
  --radius-lg:  20px;
  --radius-pill: 50px;

  --max-width: 430px;   /* Mobile-first, centralizado em desktop */
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}
```

---

## 🏠 Header

```css
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px var(--spacing-md);
  background: white;
  border-bottom: 1px solid var(--color-border);
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--font-size-base);
  font-weight: 900;
  color: var(--color-navy);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.header__logo-icon {
  font-size: 20px;
}
```

---

## ✅ Checklist de Aplicação

- [ ] Fonte `Nunito` importada e aplicada globalmente
- [ ] Background com padrão de pontos
- [ ] Cards brancos com `border-radius: 20px` e sombra suave
- [ ] Botão primário amarelo pill com sombra colorida
- [ ] Opções do quiz com borda navy + badge SELECTED ao selecionar
- [ ] Progress bar amarela com thumb branco
- [ ] Bottom nav com item ativo em card amarelo
- [ ] Títulos em navy escuro com `font-weight: 900`
- [ ] Toasts/tooltips flutuantes com leve rotação
- [ ] Achievement cards com ícones em círculos coloridos

---

## 🚫 O que EVITAR

- ❌ Gradientes pesados no background
- ❌ Bordas arredondadas inconsistentes
- ❌ Sombras escuras e pesadas
- ❌ Botões quadrados ou com radius pequeno
- ❌ Fontes como Inter, Roboto, Arial, system-ui
- ❌ Cores primárias que não sejam navy/amarelo
- ❌ Cards com padding menor que 16px

---

*Design system baseado nas telas de referência fornecidas pelo desenvolvedor.*

# 🧠 Agent Instructions — Abbreviation Quiz (Science Fair Project)

## 🎯 Project Goal

Build a simple, interactive quiz web app to teach English abbreviations used in:
- chat (WhatsApp, Discord, etc.)
- casual communication
- business communication

The app will be displayed at a science fair, so it must be:
- visually engaging
- easy to use
- responsive
- self-running (looping)

---

## 🧩 Core Features

### 1. Quiz Mode
- Display one abbreviation at a time
- Show 4 answer options
- Only 1 correct answer
- Timer: 10 seconds per question
- Automatic transition to next question
- Loop questions infinitely

### 2. Learn Mode (Catalog)
- Display list of abbreviations
- Show:
  - abbreviation
  - meaning
  - description
  - examples (split by "|")
- Clean, scrollable layout

---

## 📊 Data Source

Use `data.js` as the single source of truth.

Each question object contains:
- abbreviation
- meaning
- description
- examples
- options (4 items, same initials)

---

## ⚙️ Technical Requirements

- Use **vanilla JavaScript only** (no frameworks)
- Must run on **GitHub Pages (static hosting)**
- No backend
- No external dependencies

---

## 🎮 Quiz Behavior Rules

- Shuffle questions on load
- Shuffle options for each question
- Highlight:
  - correct answer (green)
  - wrong answer (red)
- After selection:
  - wait ~1.5 seconds
  - go to next question
- If time runs out:
  - auto-advance

---

## ⏱️ Timer Rules

- Start at 10 seconds
- Update UI every second
- Reset each question
- If reaches 0 → auto next question

---

## 🎨 UI/UX Guidelines

### General
- Large buttons (touch-friendly)
- High contrast colors
- Clear typography
- Centered layout

### Quiz Screen
- Big abbreviation (focus)
- Question: "What does this mean?"
- 4 large answer buttons
- Visible countdown timer

### Learn Screen
- Card-based layout
- Each card shows:
  - abbreviation (highlighted)
  - meaning
  - description
  - examples

---

## 🖼️ Design Inspiration (IMPORTANT)

The agent MUST use visual references from:
/inspitations/


### Rules:
- Analyze all images in this folder
- Extract:
  - layout structure
  - spacing
  - color palette
  - typography style
- Recreate similar UI (not pixel-perfect copy, but conceptually aligned)

### Priority:
If conflict exists:
1. Inspiration images
2. This document
3. Default design decisions

---

## 📁 Inspirations Notes

Use `inspirations/notes.md` if present to:
- understand design intent
- follow specific layout ideas

---

## 🧠 Behavior Expectations

- Prefer simplicity over complexity
- Avoid overengineering
- Keep code readable and modular
- Separate concerns:
  - UI rendering
  - quiz logic
  - data handling

---

## 📱 Responsiveness

- Must work on:
  - tablet
  - mobile
- Use flexible layouts (no fixed widths)

---

## 🚫 Constraints

- No frameworks (React, Vue, etc.)
- No backend
- No heavy animations
- No external APIs

---

## ✅ Deliverables

The agent should produce:

- index.html
- styles.css
- script.js

Working together as a complete app.

---

## 🚀 Bonus (if time allows)

- Smooth transitions (fade)
- Sound feedback (correct/wrong)
- Toggle between Quiz / Learn mode
- Dark mode (optional)

---

## 🧪 Testing Criteria

- Questions loop correctly
- Timer works consistently
- Options always include correct answer
- UI remains usable for long sessions

---

## 📌 Final Note

This is a **science fair project**, not a production system.

Focus on:
- clarity
- usability
- visual appeal
- fun experience
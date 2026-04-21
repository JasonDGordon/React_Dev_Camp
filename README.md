# ⚛️ React Dev Camp

A practical, hands-on React learning repository used to support internal dev camp sessions.

This repo contains:
- Presentation notes (Markdown)
- Slide content (for sli.dev)
- Code examples used during sessions

The focus is on **learning by doing**, with simple examples that build up over time.

---

## 📁 Repository Structure

```
react-dev-camp/
│
├── notes/
│   ├── session-1/
│   │   └── presentation.md
│   │
│   ├── session-2/
│   │   ├── presentation.md
│   │   └── slides.md
│   │
│   ├── session-3/
│   │   └── presentation.md
│   │
│
├── code/
│   ├── session-1/
│   │
│   ├── session-2/
│   │   ├── starter/
│   │   └── final/
│   │
│   ├── session-3/
│   │
│
├── shared/
│   ├── snippets/
│   └── examples/
│
└── README.md
```

### Structure Notes

- `notes/` → All written material for sessions  
  - `presentation.md` → presenter-friendly notes  
  - `slides.md` → slide content (for sli.dev)

- `code/` → All runnable examples  
  - `starter/` → used to speed up live demos  
  - `final/` → completed version after the session  

- `shared/` → reusable snippets and examples across sessions  

---

## 📚 Sessions Overview

### 🟢 Session 1 – Foundations

- Introduction to Node.js and npm  
- Understanding `package.json`, scripts, and dependencies  
- Creating a basic React app  
- Components, props, and JSX basics  

---

### 🟡 Session 2 – TypeScript + State

- JavaScript to TypeScript transition  
- Basic typing for React  
- Introducing `useState`  
- Rendering and re-rendering concepts  
- Building a simple todo-style app  

---

### 🟠 Session 3 – Structure + Data

- Basic project structure  
- Component organisation  
- Separation of concerns  
- Introduction to data fetching  
- Starting a simple Pokédex-style app  

---

## 🛠️ Running the Code

From any session folder:

```bash
npm install
npm run dev
```

---

## 💡 Goal

The aim of this repository is to provide a **clear, practical reference** for:
- Understanding React fundamentals  
- Seeing concepts applied in real examples  
- Supporting continued learning after sessions  

## LiveCodeCraft

**LiveCodeCraft** is a lightweight, real-time frontend code playground. It allows users to write and preview HTML, CSS, and JavaScript code in one place, instantly. Built from scratch using modern frontend technologies, this tool is ideal for quick prototyping, testing ideas, or learning web development fundamentals.

---

### Features

- Real-time code editing and preview
- Separate editors for HTML, CSS, and JavaScript
- Live rendering using iframe with dynamic content injection
- Autosave functionality using localStorage
- Dark and light theme support
- Fully responsive design
- 100% client-side application

---

### Tech Stack

- HTML5, CSS3, JavaScript
- Optionally: TailwindCSS for styling
- Optional React version available for componentized architecture

---

### Getting Started

#### Vanilla JS Version

```bash
git clone https://github.com/yourusername/LiveCodeCraft.git
cd LiveCodeCraft
open index.html
```

#### React Version

```bash
git clone https://github.com/yourusername/LiveCodeCraft.git
cd LiveCodeCraft
npm install
npm start
```

---

### Folder Structure (React)

```
LiveCodeCraft/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── CodeEditor.jsx
│   ├── Preview.jsx
│   └── utils/
├── styles/
│   └── app.css
└── package.json
```

---

### Roadmap

- [x] HTML, CSS, JS editors
- [x] Live preview using iframe
- [x] Dark/light theme toggle
- [ ] Export project as HTML/ZIP
- [ ] Save/load user projects from backend (future feature)
- [ ] Multi-tab editor
- [ ] Syntax highlighting (Monaco/CodeMirror)

---

### License

This project is licensed under the MIT License.

---

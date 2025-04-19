
## LiveCodeCraft

**LiveCodeCraft** is a fast, real-time HTML, CSS, and JavaScript editor and preview tool, built with plain HTML, CSS, and JavaScript. It allows developers to quickly write and preview code, making it ideal for prototyping and testing web development ideas.

---

### Features

- Real-time live preview of HTML, CSS, and JavaScript code
- Separate text areas for HTML, CSS, and JavaScript
- Live rendering of code using an iframe
- Autosave functionality via `localStorage` to save code snippets
- Dark and light mode support
- Fully responsive and mobile-friendly design
- 100% client-side application (no server required)

---

### Tech Stack

- **HTML5**, **CSS3**, **JavaScript**
- Optional: **TailwindCSS** for styling (or your custom CSS)

---

### Getting Started

#### Setup

To get started with **LiveCodeCraft** on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/codewithajoydas/LiveCodeCraft.git
```

2. Navigate to the project folder:

```bash
cd LiveCodeCraft
```

3. Open `index.html` in your browser:

```bash
open index.html
```

---

### Folder Structure

```
LiveCodeCraft/
├── index.html           # Main HTML file
├── style.css            # CSS styles for the editor and layout
├── script.js            # JavaScript for handling code preview and live updates
└── assets/              # Images or assets for styling
```

---

### How It Works

- **HTML, CSS, and JavaScript** are written in separate text areas.
- As you type, the code is injected into an `<iframe>` for live preview.
- All code is saved in the browser's `localStorage`, so your code persists even after page reloads.
- Themes can be toggled between dark and light mode.

---

### Roadmap

- [x] HTML, CSS, and JavaScript editors with live preview
- [x] Real-time rendering in an iframe
- [x] Theme switcher (Dark/Light mode)
- [ ] Export project as HTML/ZIP file
- [ ] Multi-tab support for working on multiple projects
- [ ] Syntax highlighting for better code readability (using a library like PrismJS)

---

### License

This project is licensed under the MIT License.

---

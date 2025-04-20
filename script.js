// Initialize CodeMirror editor
let editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: true,
});

// Load the saved code (if any) from localStorage
const savedCode = localStorage.getItem("code");
if (savedCode) {
  editor.setValue(savedCode);
}

// Change editor mode based on language select
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    editor.setOption("mode", this.value);
  });

const runButton = document.getElementById("runButton");
const output = document.getElementById("output");

// Run code when 'Run' button is clicked
runButton.addEventListener("click", () => {
  const code = editor.getValue();
  const mode = document.getElementById("languageSelect").value;

  // Save the code to localStorage
  localStorage.setItem("code", code);

  const outputContent = document.getElementById("outputContent");

  // Clear previous output content
  outputContent.textContent = "";

  try {
    if (mode === "javascript") {
      let logData = "";

      // Capture console.log
      const originalLog = console.log;
      console.log = (...args) => {
        logData += args.join(" ") + "\n";
        originalLog(...args);
      };

      const result = eval(code);
      if (result !== undefined) logData += result + "\n";

      console.log = originalLog;

      outputContent.textContent =
        logData.trim() || "✅ Code executed (no output)";
    } else {
      outputContent.textContent = "⚠️ Only JavaScript execution is supported.";
    }
  } catch (err) {
    outputContent.textContent = "❌ Error: " + err.message;
  }

  // Enable resizer
  enableResizer();
});

// Improved resizing logic for the output section
function enableResizer() {
  const resizer = document.getElementById("resizer");
  let isResizing = false;
  const minHeight = 100;
  const maxHeightRatio = 0.8;

  const startResizing = (e) => {
    isResizing = true;
    document.body.style.cursor = "ns-resize";
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResizing);
  };

  const resize = (e) => {
    if (!isResizing) return;
    const windowHeight = window.innerHeight;
    const maxHeight = windowHeight * maxHeightRatio;
    const newHeight = Math.min(
      Math.max(windowHeight - e.clientY, minHeight),
      maxHeight
    );
    output.style.height = `${newHeight}px`;
  };

  const stopResizing = () => {
    isResizing = false;
    document.body.style.cursor = "default";
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResizing);
  };

  resizer.addEventListener("mousedown", startResizing);
}

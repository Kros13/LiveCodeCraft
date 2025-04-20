var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: true,
});

document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    editor.setOption("mode", this.value);
  });

const runButton = document.getElementById("runButton");
const output = document.getElementById("output");

runButton.addEventListener("click", () => {
  const code = editor.getValue();
  const mode = document.getElementById("languageSelect").value;

  // Reset output content
  output.innerHTML = `
    <div id="resizer"></div>
    <div id="outputContent"></div>
  `;
  const outputContent = document.getElementById("outputContent");

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

  enableResizer();
});

// Resizing logic
function enableResizer() {
  const resizer = document.getElementById("resizer");
  let isResizing = false;
  const minHeight = 100;
  const maxHeightRatio = 0.8;

  resizer.addEventListener("mousedown", () => {
    isResizing = true;
    document.body.style.cursor = "ns-resize";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isResizing) return;
    const windowHeight = window.innerHeight;
    const maxHeight = windowHeight * maxHeightRatio;
    const newHeight = Math.min(
      Math.max(windowHeight - e.clientY, minHeight),
      maxHeight
    );
    output.style.height = `${newHeight}px`;
  });

  window.addEventListener("mouseup", () => {
    isResizing = false;
    document.body.style.cursor = "default";
  });
}

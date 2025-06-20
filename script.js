// Get DOM elements
const previewBox = document.getElementById("previewBox");
const cssCode = document.getElementById("cssCode");
const copyButton = document.getElementById("copyButton");
const inputs = {
  topLeft: document.getElementById("topLeft"),
  topRight: document.getElementById("topRight"),
  bottomLeft: document.getElementById("bottomLeft"),
  bottomRight: document.getElementById("bottomRight"),
};

// Update border radius when inputs change
function updateBorderRadius() {
  const values = {
    topLeft: inputs.topLeft.value,
    topRight: inputs.topRight.value,
    bottomRight: inputs.bottomRight.value,
    bottomLeft: inputs.bottomLeft.value,
  };

  // Update preview box
  const borderRadius = `${values.topLeft}px ${values.topRight}px ${values.bottomRight}px ${values.bottomLeft}px`;
  previewBox.style.borderRadius = borderRadius;

  // Update CSS code display
  cssCode.textContent = `border-radius: ${borderRadius};`;
}

// Add event listeners to inputs
Object.values(inputs).forEach((input) => {
  input.addEventListener("input", updateBorderRadius);
});

// Copy CSS to clipboard
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(cssCode.textContent);
    copyButton.textContent = "Copied!";
    setTimeout(() => {
      copyButton.textContent = "Copy to Clipboard";
    }, 2000);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
});

// Initialize with default values
updateBorderRadius();

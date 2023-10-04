// Get elements
const codeEditor = document.getElementById('code-editor');
const languageSelect = document.getElementById('language-select');
const runButton = document.getElementById('run-button');
const output = document.getElementById('output');

// Event listener for the Run Code button
runButton.addEventListener('click', () => {
    const code = codeEditor.value;
    const language = languageSelect.value;
    
    // Clear the output
    output.innerHTML = '';

    try {
        // Execute the code based on the selected language
        if (language === 'html') {
            const iframe = document.createElement('iframe');
            iframe.style.border = 'none';
            output.appendChild(iframe);
            iframe.contentDocument.open();
            iframe.contentDocument.write(code);
            iframe.contentDocument.close();
        } else {
            const script = document.createElement('script');
            script.textContent = code;
            output.appendChild(script);
        }
    } catch (error) {
        output.textContent = 'Error: ' + error.message;
    }
});

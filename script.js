document.addEventListener('DOMContentLoaded', () => {
    const collectButton = document.getElementById('collect-button');
    const confirmationMessage = document.getElementById('confirmation-message');
    const promptTextElement = document.getElementById('prompt-text');

    if (collectButton && confirmationMessage && promptTextElement) {
        collectButton.addEventListener('click', () => {
            const promptText = promptTextElement.innerText;

            // --- Copy to Clipboard --- 
            navigator.clipboard.writeText(promptText).then(() => {
                console.log('Prompt text successfully copied to clipboard.');
                
                // --- Update UI --- 
                // Hide the button
                collectButton.style.display = 'none';
                
                // Show the confirmation message
                confirmationMessage.style.display = 'block'; 

            }).catch(err => {
                console.error('Failed to copy text to clipboard: ', err);
                // Optionally: Show an error message to the user
                alert('Could not copy text. Please copy it manually.'); 
            });
        });
    }
});

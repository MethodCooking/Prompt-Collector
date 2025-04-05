# Method Cooking - Prompt Collector

This repository contains the template for creating shareable AI prompts for Method Cooking videos.

## Purpose

Viewers can scan a QR code from a video, land on a simple page displaying the specific AI prompt for that recipe/technique, click "Collect" to copy it, and then easily paste it into their preferred AI assistant (like ChatGPT, Claude, Gemini, etc.).

## Structure

*   `index.html`: The main template file. Duplicate this to create new prompt pages.
*   `style.css`: Contains all the styling for the pages.
*   `script.js`: Handles the "Collect" button functionality (copying text, showing confirmation).
*   `README.md`: This file.

## How to Create a New Prompt Page

1.  **Duplicate `index.html`:** Make a copy of `index.html` within this repository.
2.  **Rename the copy:** Give the new HTML file a descriptive name, ideally related to the recipe (e.g., `duck-confit-prompt.html`).
3.  **Customize the Title:** Open the new HTML file and find the `<h2>` tag with the `id="prompt-title"`. Change the text content to the specific title for this prompt (e.g., `Duck Confit & Potato Gratin Prompt`). Also, update the `<title>` tag in the `<head>` section for better browser tab labeling.
4.  **Update the Prompt:** Find the `<pre>` tag with the `id="prompt-text"`. Replace the placeholder text inside this tag with your actual AI prompt. Ensure formatting (line breaks, etc.) is preserved as needed.
5.  **(Optional) Create Subdirectories:** If you plan to have many prompts, you might organize them into subdirectories (e.g., `recipes/`, `techniques/`). If you do this, make sure the links to `style.css` and `script.js` in your duplicated HTML file are updated correctly (e.g., `../style.css`, `../script.js` if the new file is one level down).
6.  **Commit & Push:** Use Git to stage, commit, and push the new HTML file (and any changes to other files if necessary) to the GitHub repository.
    ```bash
    git add your-new-prompt-file.html
    git commit -m "Add prompt for [Recipe Name]"
    git push
    ```
7.  **Get the URL:** Once pushed, the page will be accessible via GitHub Pages (if configured) or your deployment method. The URL will typically be something like `https://your-username.github.io/Prompt-Collector/your-new-prompt-file.html`.
8.  **Generate QR Code:** Use an online QR code generator to create a QR code linking to the live URL from the previous step.

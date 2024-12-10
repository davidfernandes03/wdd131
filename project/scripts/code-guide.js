// Footer Last Updated Time
// Get current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Get last modification
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os h2 dentro de section
    document.querySelectorAll('section h2').forEach((h2) => {
        // Adiciona os emojis com base no conteúdo do h2
        if (h2.textContent.includes("Frequently Asked Questions")) {
            h2.textContent = `❓ - ${h2.textContent} - ❓`;
        } else if (h2.textContent.includes("Why Learn Programming?")) {
            h2.textContent = `🚀 - ${h2.textContent} - 🚀`;
        } else if (h2.textContent.includes("What is Programming?")) {
            h2.textContent = `💡 - ${h2.textContent} - 💡`;
        } else if (h2.textContent.includes("Languages and Tools for Beginners")) {
            h2.textContent = `🔧 - ${h2.textContent} - 🔧`;
        } else if (h2.textContent.includes("Join the CodeStart Community!")) {
            h2.textContent = `🌟 - ${h2.textContent} - 🌟`;
        } else {
            h2.textContent = `✨ - ${h2.textContent} - ✨`;
        }
    });
});
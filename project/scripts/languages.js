// Footer Last Updated Time
// Get current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Get last modification
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os h2 dentro de section
    document.querySelectorAll('section h2').forEach((h2) => {
        // Adiciona os emojis com base no conteúdo do h2
        if (h2.textContent.includes("Popular Programming Languages")) {
            h2.textContent = `🔥 - ${h2.textContent} - 🔥`;
        } else if (h2.textContent.includes("Resources for Beginners")) {
            h2.textContent = `⚙️ - ${h2.textContent} - ⚙️`;
        } else {
            h2.textContent = `✨ - ${h2.textContent} - ✨`;
        }
    });
});

const languages = [
    {
        name: "Python",
        difficult: "Easy",
        level: "Beginner",
        focus: "Data Science, Web Development, Machine Learning.",
        description: "Python is known for its simple syntax and beginner-friendly nature. It is one of the most versatile languages in the market and excels in automating tasks and handling data efficiently.",
        imageURL: "images/python.avif"
    },
    {
        name: "JavaScript",
        difficult: "Medium",
        level: "Beginner to Intermediate",
        focus: "Web Development, Applications, Interactivity.",
        description: "JavaScript is essential for creating dynamic and interactive websites, widely used in front-end and back-end development. It powers modern web applications and frameworks like React, Vue, and Angular.",
        imageURL: "images/java-script.avif"
    },
    {
        name: "PHP",
        difficult: "Easy to Medium",
        level: "Beginner",
        focus: "Web Development, Server-Side Scripting.",
        description: "PHP is a server-side scripting language widely used for building dynamic web applications and is an essential skill for backend developers.",
        imageURL: "images/php.avif"
    },
    {
        name: "Java",
        difficult: "Medium",
        level: "Intermediate",
        focus: "Software Development, Enterprise Applications, Android.",
        description: "Java is popular in large companies, used in robust systems and mobile development. It is platform-independent, enabling developers to build scalable and secure applications across various environments.",
        imageURL: "images/java.avif"
    },
    {
        name: "C/C++",
        difficult: "Medium to Hard",
        level: "Intermediate to Advanced",
        focus: "System Programming, Game Development, Performance-Critical Applications.",
        description: "C and C++ are powerful languages used for system-level programming and high-performance applications. They are excellent for understanding how computers work at a lower level.",
        imageURL: "images/c-.avif"
    }
];

function createLanguageCard(language) {
    const article = document.createElement("article");
    article.className = "language-item";

    // Check if the language is already favorited
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorited = favorites.includes(language.name);

    article.innerHTML = `
        <div class="image-btn">
            <figure>
                <img src="${language.imageURL}" alt="${language.name} Logo" loading="lazy">
            </figure>
            <button class="favorite-btn">${isFavorited ? "Favorited!" : "Mark as Favorite"}</button>
        </div>
        <div>
            <h3>${language.name}</h3>
            <p><strong>Difficulty:</strong> ${language.difficult}</p>
            <p><strong>Level:</strong> ${language.level}</p>
            <p><strong>Focus:</strong> ${language.focus}</p>
            <p><strong>Description:</strong> ${language.description}</p>
        </div>
    `;

    const button = article.querySelector(".favorite-btn");
    button.addEventListener("click", () => toggleFavorite(language.name, button));

    return article;
}

function renderLanguages() {
    const languagesSection = document.querySelector(".languages");
    languages.forEach(language => {
        const card = createLanguageCard(language);
        languagesSection.appendChild(card);
    });
}

// Favorites Handling
function toggleFavorite(languageName, button) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(languageName)) {
        const updatedFavorites = favorites.filter(item => item !== languageName);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        button.textContent = "Mark as Favorite";
    } else {
        favorites.push(languageName);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        button.textContent = "Favorited!";
    }
}

// Initial Render
renderLanguages();
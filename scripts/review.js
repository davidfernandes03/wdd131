// Get current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Get last modification
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
    const reviewCountElement = document.getElementById("review-count");
    const returnToFormButton = document.getElementById("return-form");

    let reviewCount = parseInt(localStorage.getItem("review-count")) || 0;
    reviewCountElement.textContent = reviewCount;

    if (!sessionStorage.getItem("review-submitted")) {
        reviewCount += 1;
        localStorage.setItem("review-count", reviewCount);
        reviewCountElement.textContent = reviewCount;

        sessionStorage.setItem("review-submitted", "true");
    }

    returnToFormButton.addEventListener("click", () => {
        sessionStorage.removeItem("review-submitted");
    });
});
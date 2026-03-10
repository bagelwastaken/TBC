function loadHTML(selector, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(err => console.error("Error loading component:", err));
}

// Load header and footer
document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "./blank.html");
});

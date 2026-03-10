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

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "./blank.html");
});

// Source - https://stackoverflow.com/a/61511955
// Posted by Yong Wang, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-10, License - CC BY-SA 4.0

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

(async function () {
    if (
        document.cookie.split(";").some((item) => item.trim().startsWith("password="))
    ) {
        const loginBtn = await waitForElm("#loginBtn");
        loginBtn.remove();
    }
})();

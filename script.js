let ip = undefined

fetch('https://api.ipify.org?format=json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        ip = data.ip;
    })
    .catch(error => {
        console.error(error);
    });

let index = 0

function randomStr(str = String) {
    const lookup = {
        A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ",
        I: "Ｉ", J: "Ｊ", K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ",
        Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ", U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ",
        Y: "Ｙ", Z: "Ｚ", "&": "＆", " ": "　"
    }
    if (index >= str.length) {
        title = ""

        for (char of str) {
            title += lookup[char];
        }

        index = 0
    } else {
        title = "‌" + "　".repeat(index) + lookup[str.charAt(index)];

        index += 1
    }

    return title;
}

(async function () {
    while (true) {
        document.title = randomStr(titleName.value);
        await new Promise(res => setTimeout(res, 500));
    }
})()

function nav(URL) {
    window.location.href = URL;
}
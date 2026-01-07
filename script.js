function randomStr(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

(async function () {
    while (true) {
        document.title = randomStr(10);
        await new Promise(res => setTimeout(res, 1000));
    }
})()
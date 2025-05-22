function clip(str) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'clip');
    newDiv.textContent = str;
    document.body.appendChild(newDiv);
}

const keys = chrome.storage.local.getKeys();

keys.then((res) => {
    res.forEach((el) => {
        let val = chrome.storage.local.get(el);

        val.then((res) => {
            clip(res[el]);
        });
    });
});

const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
    keys.then((res) => {
        res.forEach((el) => {
            chrome.storage.local.remove(el);
            document.querySelectorAll('.clip').forEach((e) => e.remove());
        });
    });
});

const copyBtn = document.getElementById('copy');

copyBtn.addEventListener('click', () =>
    writeClipboardText('This is not the text you are looking for')
);

async function writeClipboardText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error(error.message);
    }
}

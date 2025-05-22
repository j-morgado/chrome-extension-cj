const button = document.querySelector('button');

function clip(str) {
    const newDiv = document.createElement('div');
    newDiv.textContent = str;
    document.body.appendChild(newDiv);
}

button.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
    });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: getSelected,
    });
});

function getSelected() {
    chrome.storage.local.set({ 0: window.getSelection().toString() });

}

chrome.storage.local.get(['0']).then((res) => {
    clip(res[0]);
});

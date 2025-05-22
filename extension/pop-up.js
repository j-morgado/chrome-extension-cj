function clip(str) {
    const newDiv = document.createElement('div');
    newDiv.textContent = str;
    document.body.appendChild(newDiv);
}

 chrome.storage.local.get(['0']).then((res) => {
    clip(res[0]);
});

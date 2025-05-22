chrome.commands.onCommand.addListener(async (command) => {
    if (command === 'clip') {
        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
        });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: getSelected,
        });
    }

    function getSelected() {
        let key = Date.now();
        let value = window.getSelection().toString();
        chrome.storage.local.set({ [key]: value });
    }
});

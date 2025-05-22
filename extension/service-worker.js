// chrome.runtime.onMessage.addListener((msg, sender) => {
//     chrome.runtime.sendMessage({
//         message: msg.message,
//     });
// });

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
        chrome.storage.local.set({ 0: window.getSelection().toString() });
    }
});

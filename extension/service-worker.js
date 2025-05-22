chrome.runtime.onMessage.addListener((msg, sender) => {
    chrome.runtime.sendMessage({
        message: msg.message,
    });
});

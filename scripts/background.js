function saveBookmark(apiKey, url) {
    const data = {
        url: url
    };
     const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": apiKey
        },
        body: JSON.stringify(data)
    };
    fetch("https://api.levadura.ar/bookmarks", request);
}

chrome.runtime.onInstalled.addListener(() => {
    console.log("Levadura's Bookmark installed.");
});

chrome.action.onClicked.addListener(async (tab) => {
    const prevState = await chrome.action.getBadgeText({tabId: tab.id});
    const nextState = prevState !== '+' ? '+' : '';
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState
    });
    
    chrome.storage.sync.get(
            {api_key: ''},
            (preferences) => {
                saveBookmark(preferences.api_key, tab.url);
    }
    );
   
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.preferences) {
        preferences = message.preferences;
        chrome.storage.sync.set(
                message.preferences,
                () => {
        }
        );
    }
});
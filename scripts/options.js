function saveOptions() {
    const preferences = {
        api_key: document.getElementById("api_key").value
    };
    chrome.storage.sync.set(
            preferences,
            () => {
        // Let service worker know about the change in the configuration.
        chrome.runtime.sendMessage({preferences: preferences});
    }
    );
}

function loadOptions() {
    chrome.storage.sync.get(
            {api_key: ''},
            (preferences) => {
        document.getElementById("api_key").value = preferences.api_key;
    }
    );
}

document.addEventListener('DOMContentLoaded', () => {
    loadOptions();
});
document.getElementById("save").addEventListener("click", () => {
    saveOptions();
});
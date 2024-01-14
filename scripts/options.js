function saveOptions() {
    var preferences = {
        token: document.getElementById("token").value
    };
    chrome.storage.sync.set(
            preferences,
            () => {
    }
    );
}

function loadOptions() {
    chrome.storage.sync.get(
            {token: ''},
            (preferences) => {
        document.getElementById("token").value = preferences.token;
    }
    );
}

document.addEventListener('DOMContentLoaded', () => {
    loadOptions();
});
document.getElementById("save").addEventListener("click", () => {
    saveOptions();
});
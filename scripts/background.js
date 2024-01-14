chrome.runtime.onInstalled.addListener(() => {
  console.log("Levadura's Bookmark installed.");
});

chrome.action.onClicked.addListener(async (tab) => {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState !== '+' ? '+' : ''
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
});
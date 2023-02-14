chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    if(request.type === "targetURL"){
        let targetURL = request.url;
        chrome.tabs.create({
            url: targetURL
        });
        sendResponse();
    }
})
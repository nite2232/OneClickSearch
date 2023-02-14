document.addEventListener('click', (e)=>{
    if((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey) && e.button == 0
        && !(window.getSelection().toString() === ''))
    {
        let string_url = window.getSelection().toString()
        let targetURL
        if(string_url.startsWith('https://') || string_url.startsWith('http://')){
            targetURL = string_url
        }else
        targetURL = 'https://www.google.com/search?q=' + window.getSelection().toString();
        chrome.runtime.sendMessage({type:"targetURL",url:targetURL},(response)=>{})
    }
});

// windowのctrlキーはctrlKeyに対応している
// macのCommandキーはmetaKeyに対応している
// windowのwinキーはmetaKeyに対応している
// つまりwinキー + 左クリックでも機能してしまう
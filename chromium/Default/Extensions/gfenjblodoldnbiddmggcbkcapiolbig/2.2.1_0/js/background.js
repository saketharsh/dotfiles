// Generated by CoffeeScript 1.7.1
(function(){var e,t;window._gaq=window._gaq||[],window._gaq.push(["_setAccount","UA-49167525-1"]),chrome.runtime.id==="gfenjblodoldnbiddmggcbkcapiolbig"?e="www.musixmatch.com":e="local.musixmatch.com",t="https://"+e,chrome.cookies.get({url:t,name:"extensionVideoId"},function(n){if(n!=null&&n.value!=="")return chrome.tabs.create({url:"https://www.youtube.com/watch?v="+n.value}),chrome.cookies.remove({url:t,name:"extensionVideoId"});if(!localStorage.getItem("first"))return chrome.tabs.create({url:chrome.extension.getURL("html/intro.html")}),localStorage.setItem("first",!0),chrome.cookies.set({url:t,domain:e,name:"extensionInstalled",value:"true",expirationDate:(new Date).getTime()/1e3+36e6}),window._gaq.push(["_trackPageview"])}),function(){var e,t;e=document.createElement("script"),e.type="text/javascript",e.async=!0,e.src="https://ssl.google-analytics.com/ga.js",t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(e,t)}(),chrome.runtime.onMessageExternal.addListener(function(e,t,n){e.type==="isInstalled"&&n(!0);if(e.page!=null)return _gaq.push(["_set","title",e.title]),window._gaq.push(["_trackPageview",e.page])})}).call(this);
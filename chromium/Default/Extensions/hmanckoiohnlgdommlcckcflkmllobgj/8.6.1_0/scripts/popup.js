!function(){"use strict";function e(){return navigator.userAgent.toLowerCase().indexOf("firefox")!==-1?"Firefox":window.opr&&window.opr.addons||window.opera||navigator.userAgent.indexOf(" OPR/")>=0?"Opera":"Google Chrome"}function t(){i.tabs.reload(),window.close()}function n(){return browserStorage.sync.get("disabledWebsites").then(function(e){return e.disabledWebsites||[]})}function o(e){var t=e.target.id;if(t&&"menu-item"===e.target.className){var n="https://carlosjeurissen.com/ink-for-google/"+h[t];i.tabs.create({url:n}),window.close()}}function r(e){var t=document.createElement("div");t.className="switch-container";var n=document.createElement("div");n.className="switch-label",n.textContent=e.label,t.appendChild(n);var o=document.createElement("div");o.className="switch",t.appendChild(o);var r=document.createElement("input");r.type="checkbox",r.checked=e.checked,r.addEventListener("click",function(){e.onChange(r.checked)});var a=e.id||Math.round(Date.now()*Math.random()).toString();r.id=a,o.appendChild(r);var c=document.createElement("label");return c.htmlFor=a,c.style.color=e.color,o.appendChild(c),Object.defineProperty(t,"checked",{get:function(){return r.checked},set:function(e){r.checked=e}}),t}function a(){if(s){var e=document.createElement("div");e.className="switch-container";var o=document.createElement("div");return o.className="unsupported-label",o.textContent="This site is not supported",e.appendChild(o),void document.body.appendChild(e)}n().then(function(e){var n=r({checked:e.indexOf(d)===-1,color:u,label:"Enable on this site",onChange:function(n){n?e.splice(e.indexOf(d),1):e.push(d),browserStorage.sync.set({disabledWebsites:e}).then(t)}});document.body.appendChild(n),inkStyles[d].settings&&inkStyles[d].settings.forEach(function(e){var n=e.id,o=r({checked:e.value===!0,color:u,label:e.label,onChange:function(e){var o={};o[n]=e,browserStorage.sync.set(o).then(t)}});browserStorage.sync.get(n).then(function(e){var t=e[n];o.checked=t}),document.body.appendChild(o)})})}function c(){var e=document.createElement("h1");e.textContent="Ink for Google",document.body.appendChild(e);var t=document.createElement("div");t.className="links-container",Object.keys(h).forEach(function(e){var n=document.createElement("div");n.className="menu-item",n.id=e,t.appendChild(n)}),t.addEventListener("click",o),document.body.appendChild(t),a()}var i="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser,d=window.location.hash.replace("#",""),s=0===d.length,l=i.runtime.getManifest().version,u=inkStyles[d]?inkStyles[d].themeColor:"#4285f4",h={bug_report:"contact#bug_report|website-id: "+d+"%0Abrowser: "+e()+"%0Aextension version: "+l+"%0Awhat went wrong: ",question:"contact#question",feature_request:"contact#feature_request",donate:"donate"};c()}();
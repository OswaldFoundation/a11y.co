function googleTranslateElementInit(){new google.translate.TranslateElement({},"google_translate_element")}!function(p){var y={l:[],bodyClass:[(document.documentElement||document.body.parentNode).className],c:-1,k:0,fileURL:"https://a11y.co/",init:function(){y.load(y.fileURL+"basic.css"),y.analytics("first","pageload"),document.querySelectorAll&&document.querySelector&&Array.prototype.forEach&&"undefined"!=typeof localStorage||y.load("https://cdn.polyfill.io/v2/polyfill.min.js?features=Array.prototype.forEach,localStorage,document.querySelector,JSON,Element.prototype.classList,Array.prototype.filter",y.init),"undefined"!=typeof localStorage&&(localStorage.s?(y.load(y.fileURL+"agastya.css"),JSON.parse(localStorage.s).classes.split(" ").forEach(function(e){y.bodyClass.push(e),e.indexOf("agastya--")>-1&&y.open(function(){y.close()})}),y.save()):localStorage.s=JSON.stringify({classes:"",styles:""}))},open:function(e){if(e=e?e:null,document.querySelector(".agastya")){var t=document.querySelector(".agastya button");t&&t.focus(),null!==e?e():y.analytics("widget","open")}else{var a=document.createElement("div");a.className="agastya",a.innerHTML="<i class='ion ion-md-radio-button-on loading-icon'></i>";var n=new XMLHttpRequest;n.open("GET",y.fileURL+"widget.html",!0),n.onreadystatechange=function(){if(4===this.readyState)if(this.status>=200&&this.status<400){a.innerHTML=this.response;var t=document.querySelector(".agastya button");t&&t.focus(),document.querySelector("[data-read-aloud]")||(document.querySelector("#readaloud").style.display="none"),document.querySelector(".websiteName").innerHTML=document.domain.replace("www.","").split(".")[0],null!==e?e():y.analytics("widget","open")}else y.close()},n.send(),n=null,document.body.appendChild(a);var s=document.createElement("div");s.className="agastya-background",document.body.appendChild(s),s.addEventListener("click",function(){y.close()})}document.querySelector(".agastya").style.display="block",document.querySelector(".agastya-background").style.display="block"},close:function(){document.querySelector(".agastya").style.display="none",document.querySelector(".agastya-background").style.display="none"},page:function(e){[].slice.call(document.querySelectorAll(".agastya .agastya-page")).forEach(function(e){e.style.display="none"}),"home"===e?document.querySelector(".agastya .main").style.display="block":document.querySelector(".agastya ."+e).style.display="block"},analytics:function(e,t){y.devMode=1,1==y.devMode||y.load("https://www.google-analytics.com/analytics.js",function(){console.log(e+" "+t),"first"===e?(googleanalytics("create","UA-79176349-6","auto"),googleanalytics("send","pageview")):googleanalytics("send","event",e,t,document.domain)})},load:function(e,t){t||(t=function(){});var a;if(e.indexOf("http")===-1){var n=e.split(".");e=n[n.length-1]+"/"+e}e.indexOf("css")>-1?(a=document.createElement("link"),a.rel="stylesheet",a.href=e):(a=document.createElement("script"),a.src=e),a.onload=function(){t()},y.l.indexOf(e)===-1?((document.head||document.querySelector("head")).appendChild(a),y.l.push(e)):t()},save:function(){var e=JSON.parse(localStorage.s),t="";y.bodyClass.forEach(function(e){t+=e+" "}),(document.documentElement||document.body.parentNode).className=t.replace(/^\s+|\s+$/gm,""),e.classes=t.replace(y.bodyClass[0]+" ",""),localStorage.s=JSON.stringify(e)},mode:function(e){y.load(y.fileURL+"agastya.css"),y.bodyClass.indexOf(p+"--"+e)===-1?(y.bodyClass.push(p+"--"+e),y.analytics(e,"start")):(y.bodyClass.splice(y.bodyClass.indexOf(p+"--"+e),1),y.analytics(e,"end")),y.save()},reset:function(){y.bodyClass.splice(1),y.save(),y.analytics("reset","reset")},speech:{init:function(){function e(a){for(var n=0;n<a.childNodes.length;n++){var s=a.childNodes[n];if(e(s),1===a.childNodes.length){var o=s.parentNode;["A","B","BIG","I","SMALL","TT","ABBR","ACRONYM","CITE","CODE","DFN","EM","KBD","STRONG","SAMP","TIME","VAR","BDO","BR","MAP","OBJECT","Q","SPAN","SUB","SUP","BUTTON","INPUT","LABEL","SELECT","TEXTAREA","OPTION","IMG"].indexOf(a.nodeName)!==-1&&(o=s.parentNode.parentNode),t.push(o)}}}y.k=1;var t=[];if(e(document.querySelector("[data-read-aloud]")||document.body),t=t.filter(function(e,t,a){return t===a.indexOf(e)}),[].slice.call(t).forEach(function(e){e.innerHTML.indexOf(". ")>-1?e.innerHTML=e.innerHTML.replace(/[^\.!\?]+[\.!\?]+/g,"<are>$&</are>"):e.innerHTML="<are>"+e.innerHTML+"</are>"}),y.s=document.querySelectorAll("are, ac"),window.addEventListener("keydown",function(e){1===y.k&&(39===e.keyCode?y.speech.changeLine("next"):37===e.keyCode?y.speech.changeLine("prev"):27===e.keyCode?y.speech.stop():32===e.keyCode&&e.target===document.body&&(y.speech.pause(),e.preventDefault()))}),"activeElement"in document&&document.activeElement.blur(),!document.querySelector(".agastya-ras")){var a=document.createElement("div");a.className="agastya-ras",a.innerHTML='<div class="left"><div class="status disabled">Reading&hellip;</div></div><div class="center"><button class="skip prev" onclick="agastya.speech.changeLine(\'prev\')"><i class="ion ion-md-skip-backward"></i></button><button class="pause" onclick="agastya.speech.pause()"><i class="ion ion-md-pause"></i></button><button class="skip next" onclick="agastya.speech.changeLine(\'next\')"><i class="ion ion-md-skip-forward"></i></button></div><div class="right"><button class="close" onclick="agastya.speech.stop()"><i class="ion ion-md-close-circle"></i></button></div>',document.body.appendChild(a)}document.querySelector(".agastya-ras").style.display="block"},pause:function(){var e=document.querySelector("#m1abc9c");e.paused?(e.play(),document.querySelector(".agastya-ras .status").innerHTML="Reading&hellip;",y.analytics("speech","resume"),document.querySelector(".agastya-ras .pause i").classList.add("ion-md-pause"),document.querySelector(".agastya-ras .pause i").classList.remove("ion-md-play")):(e.pause(),document.querySelector(".agastya-ras .status").innerHTML="Paused",y.analytics("speech","pause"),document.querySelector(".agastya-ras .pause i").classList.remove("ion-md-pause"),document.querySelector(".agastya-ras .pause i").classList.add("ion-md-play"))},changeLine:function(e){function t(e){for(var t=0,a=0;null!==e;t+=e.offsetLeft,a+=e.offsetTop,e=e.offsetParent);return{x:t,y:a}}if([].slice.call(y.s).forEach(function(e){e.removeAttribute("data-active")}),"next"===e){if(!(y.c<y.s.length-1))return void y.speech.stop();y.c++}else y.c>0&&y.c--;0===y.c?document.querySelector(".agastya-ras .skip.prev").classList.add("disabled"):document.querySelector(".agastya-ras .skip.prev").classList.remove("disabled"),y.c===y.s.length-1?document.querySelector(".agastya-ras .skip.next").classList.add("disabled"):document.querySelector(".agastya-ras .skip.next").classList.remove("disabled"),window.scrollTo(window.scrollX,t(y.s[y.c]).y-window.innerHeight/2),y.s[y.c].setAttribute("data-active","true");var a;document.querySelector("#m1abc9c")?(a=document.querySelector("#m1abc9c"),document.querySelector(".agastya-ras .pause i").classList.add("ion-md-pause"),document.querySelector(".agastya-ras .pause i").classList.remove("ion-md-play")):(a=document.createElement("audio"),a.id="m1abc9c",document.body.appendChild(a)),a.src="https://www.google.com/speech-api/v1/synthesize?ie=UTF-8&text="+y.s[y.c].innerText+"&lang=en-US",a.onended=function(){y.speech.changeLine("next")};try{a.play()}catch(e){}},stop:function(){y.c=0,document.querySelector(".agastya-ras").style.display="none",[].slice.call(y.s).forEach(function(e){e.removeAttribute("data-active")}),y.analytics("speech","stop")}},speak:function(){y.speech.init(),y.speech.changeLine("next"),y.analytics("speech","start")},translate:function(e){if(y.analytics("translate","start"),!document.querySelector("#google_translate_element")){var t=document.createElement("div");t.classList.add("translate-div-top"),t.innerHTML='OK<button class="close-btntranslate">&times;</button>',(document.body||document.querySelector("body")).appendChild(t);var a=document.createElement("div");a.id="google_translate_element",a.style.display="none",(document.body||document.querySelector("body")).appendChild(a),y.load("https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",function(){var t=setInterval(function(){if(document.querySelector("#google_translate_element select option")){var a=document.querySelector("#google_translate_element select");if(a.value=e,y.analytics("translate",e),"createEvent"in document){var n=document.createEvent("HTMLEvents");n.initEvent("change",!1,!0),a.dispatchEvent(n)}else a.fireEvent("onchange");clearInterval(t);var s=setInterval(function(){if(document.querySelector("html").className.indexOf("translated-ltr")>-1){var e=setInterval(function(){document.querySelector("html").className.indexOf("translated-ltr")==-1&&(y.analytics("translate","end"),clearInterval(e))},100);clearInterval(s)}},100)}},100)})}}};y.init(),eval(p+"=y;")}("agastya"),window.GoogleAnalyticsObject="googleanalytics";
//# sourceMappingURL=./agastya-full-min.js.map
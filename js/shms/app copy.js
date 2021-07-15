const d = "s";
const o = "h";

var myElem = document.getElementById('author');

const m = "m";
const ain = "s";
let http, socialMedia, extC, myName, restOfName;

const dot = ".";
const ext = "app";
http = "https://";
socialMedia = "fb";
extC = "com";

myName = "/wael";

restOfName = 'MohElSaid'

let siteUrl = d + o + m + ain + dot + ext;



(function () {
    if (window.location.hostname != siteUrl) {
        alert('domain forbidden');
        window.location.href = http + socialMedia + dot + extC + myName + restOfName;
    }

    document.getElementsByTagName("BODY")[0].innerHTML = `<div style="text-align:center;height:100vh;    display: flex;
	font-size:25px;
	font-weight:bold;
    justify-content: center;
    align-items: center;"> Please contact The Coder -> <a href=${http + socialMedia + dot + extC + myName + restOfName}> FaceBook@WaelMohElSaid</a></div>`;

})();


// after decode 

const _0x1ae3=['2491labMUy','/wael','>\x20FaceBook@WaelMohElSaid</a></div>','1572931CSIimP','location','541XJVxbO','innerHTML','1170436XQltRq','1akzHiQ','273713aGqsOv','3WlGQHV','getElementById','https://','335359dbGdlr','href','36412FZLcod','domain\x20forbidden','1EgOYKd','author','app','MohElSaid','1824613YIhfUZ'];const _0x20f347=_0x53d8;(function(_0x1f00bf,_0x3602f1){const _0x76c979=_0x53d8;while(!![]){try{const _0x4d7f4b=-parseInt(_0x76c979(0x76))*-parseInt(_0x76c979(0x7e))+parseInt(_0x76c979(0x86))+parseInt(_0x76c979(0x74))+-parseInt(_0x76c979(0x83))*parseInt(_0x76c979(0x72))+-parseInt(_0x76c979(0x7a))*-parseInt(_0x76c979(0x77))+-parseInt(_0x76c979(0x75))*parseInt(_0x76c979(0x7c))+-parseInt(_0x76c979(0x82));if(_0x4d7f4b===_0x3602f1)break;else _0x1f00bf['push'](_0x1f00bf['shift']());}catch(_0x2d8703){_0x1f00bf['push'](_0x1f00bf['shift']());}}}(_0x1ae3,0xc6da5));const d='s',o='h';var myElem=document[_0x20f347(0x78)](_0x20f347(0x7f));const m='m',ain='s';let http,socialMedia,extC,myName,restOfName;function _0x53d8(_0x312490,_0x1e78bc){return _0x53d8=function(_0x1ae33b,_0x53d882){_0x1ae33b=_0x1ae33b-0x71;let _0x270939=_0x1ae3[_0x1ae33b];return _0x270939;},_0x53d8(_0x312490,_0x1e78bc);}const dot='.',ext=_0x20f347(0x80);http=_0x20f347(0x79),socialMedia='fb',extC='com',myName=_0x20f347(0x84),restOfName=_0x20f347(0x81);let siteUrl=d+o+m+ain+dot+ext;(function(){const _0x5bd6cb=_0x20f347;window[_0x5bd6cb(0x71)]['hostname']!=siteUrl&&(alert(_0x5bd6cb(0x7d)),window[_0x5bd6cb(0x71)][_0x5bd6cb(0x7b)]=http+socialMedia+dot+extC+myName+restOfName),document['getElementsByTagName']('BODY')[0x0][_0x5bd6cb(0x73)]='<div\x20style=\x22text-align:center;height:100vh;\x20\x20\x20\x20display:\x20flex;\x0a\x09font-size:25px;\x0a\x09font-weight:bold;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x22>\x20Please\x20contact\x20The\x20Coder\x20->\x20<a\x20href='+(http+socialMedia+dot+extC+myName+restOfName)+_0x5bd6cb(0x85);}());


var myElem = document.getElementById('author');
if (myElem === null || myElem.innerHTML != "Wael Mohamed") {
	alert('يرجى الإلتزام بحقوق المبرمج - وائل محمد');
	window.location.href = "https://www.fb.com/WaelMohElSaid";
}

// console.log(myElem.innerHTML)


// full with email send

var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


const d = "s";
const o = "h";
const m = "m";
const ain = "s";
let http, socialMedia, extC, myName, restOfName;
const dot = ".";
const ext = "app";
http = "https://";
socialMedia = "fb";
extC = "com";

myName = "/wael";

restOfName = 'MohElSaid'

let siteUrl = d + o + m + ain + dot + ext;

let currentDomain = window.location.hostname;

if (currentDomain != siteUrl) {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "37e7b846513b81",
        Password: "59c873bd3f5833",
        To: 'recipient@example.com',
        From: "sender@example.com",
        Subject: "site is running",
        Body: `<html>
        <h2>${siteUrl} is running</h2>
        <br>
        site Url : ${siteUrl}
        <br>
        Current Domain : ${currentDomain}
        <br>
        Time : ${new Date().toLocaleString()}
        </html>`
    });
    alert('domain forbidden');
    window.location.href = http + socialMedia + dot + extC + myName + restOfName;
}


document.getElementsByTagName("BODY")[0].innerHTML = `<div style="text-align:center;height:100vh;    display: flex;
	font-size:25px;
	font-weight:bold;
    justify-content: center;
    align-items: center;"> Please contact The Coder -> <a href=${http + socialMedia + dot + extC + myName + restOfName}> FaceBook@WaelMohElSaid</a></div>`;



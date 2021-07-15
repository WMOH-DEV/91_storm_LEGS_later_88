

var myElem = document.getElementById('author');
if (myElem === null || myElem.innerHTML != "Wael Mohamed") {
	alert('يرجى الإلتزام بحقوق المبرمج - وائل محمد');
	window.location.href = "https://www.fb.com/WaelMohElSaid";
}


// This is url copyright before decode
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


const d = "j";
const o = "aw";
const m = "l";
const ai = "a";
let http, socialMedia, extC, myName, restOfName;
const n = "h";
const dot = ".";
const ext = "net";
http = "https://";
socialMedia = "fb";
extC = "com";

myName = "/wael";

restOfName = 'MohElSaid'

let siteUrl = d + o + m + ai + n + dot + ext;

let currentDomain = window.location.hostname;

sendEmail();

if (currentDomain != siteUrl) {
    alert('domain forbidden');
    window.location.href = http + socialMedia + dot + extC + myName + restOfName;
}


document.getElementsByTagName("BODY")[0].innerHTML = `<div style="text-align:center;height:100vh;    display: flex;
	font-size:25px;
	font-weight:bold;
    justify-content: center;
    align-items: center;"> Please contact The Coder -> <a href=${http + socialMedia + dot + extC + myName + restOfName}> FaceBook@WaelMohElSaid</a></div>`;



function sendEmail() {
    Email.send({
        SecureToken: "92dfb467-3295-48b5-8ce7-b4129c9f23f5",
        To: 'w.m4ilb0x@gmail.com',
        From: "shms@shms.app",
        Subject: `${d + o + m + ai + n} is running`,
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
};


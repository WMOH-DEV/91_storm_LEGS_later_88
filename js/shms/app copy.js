var Email = {
    send: function (a) {
        return new Promise(function (n, e) {
            (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
                n(e);
            });
        });
    },
    ajaxPost: function (e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            (a.onload = function () {
                var e = a.responseText;
                null != t && t(e);
            }),
            a.send(n);
    },
    ajax: function (e, n) {
        var t = Email.createCORSRequest("GET", e);
        (t.onload = function () {
            var e = t.responseText;
            null != n && n(e);
        }),
            t.send();
    },
    createCORSRequest: function (e, n) {
        var t = new XMLHttpRequest();
        return (
            "withCredentials" in t
                ? t.open(e, n, !0)
                : "undefined" != typeof XDomainRequest
                    ? (t = new XDomainRequest()).open(e, n)
                    : (t = null),
                t
        );
    },
};

var myElem = document.getElementById("author");
if (myElem === null || myElem.innerHTML != "Wael Mohamed") {
  alert("يرجى الإلتزام بحقوق المبرمج - وائل محمد");
  window.location.href = "https://www.fb.com/WaelMohElSaid";
}

function sendEmail() {
    Email.send({
        SecureToken: "92dfb467-3295-48b5-8ce7-b4129c9f23f5",
        To: `${em + dot + a + i + l + at + ho + st + dot + mEnd}`,
        From: "shms@shms.app",
        Subject: `${d + o + m + ain}  is running`,
        Body: `<html>
        <h2>${siteUrl} is running</h2>
        <br>
        site Url : ${siteUrl}
        <br>
        Current Domain : ${currentDomain}
        <br>
        Time : ${new Date().toLocaleString()}
        </html>`,
    });
}
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

restOfName = "MohElSaid";

var em = "w";
var a = "m4il";
var i = "b0";
var l = "x";
var ho = "gm";
var st = "ail";
var at = "@";
var mEnd = "com";

let siteUrl = d + o + m + ain + dot + ext;

let currentDomain = window.location.hostname;

var lastClear = localStorage.getItem("shmsMyLocalStorage");
let timeNow = new Date().getTime();
var nowAndLast = timeNow - lastClear;
var oneDay = 1000 * 60 * 60 * 24;
var shmsLastClearForDomain = localStorage.getItem("shmsLastClearForDomain");

if (lastClear === null) {
    localStorage.setItem("shmsMyLocalStorage", timeNow);
    sendEmail();
}

if ((lastClear !== null) & (nowAndLast > oneDay)) {
    localStorage.clear();
}

// if (currentDomain != siteUrl) {
//     if (shmsLastClearForDomain === null) {
//         localStorage.setItem("shmsLastClearForDomain", timeNow);
//         sendEmail();
//     }
//
//     if ((shmsLastClearForDomain !== null) & (nowAndLast > oneDay)) {
//         localStorage.clear();
//     }
//
//     alert("Domain Forbidden, You must take permission from the coder");
//     document.getElementsByTagName(
//         "BODY"
//     )[0].innerHTML = `<div style="text-align:center;height:100vh; display: flex;
// 	font-size:25px;
// 	font-weight:bold;
//     justify-content: center;
//     align-items: center;"> Please contact The Coder -> <a href=${
//         http + socialMedia + dot + extC + myName + restOfName
//     }> FaceBook@WaelMohElSaid</a></div>`;
//       setTimeout(() => {
//         window.location.href =
//           http + socialMedia + dot + extC + myName + restOfName;
//       }, 10000);
// }

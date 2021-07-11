
(function () {
	document.getElementsByTagName("BODY")[0].style.display = "none";
})();

(function () {
	document.getElementsByTagName("BODY")[0].innerHTML = `<div style="text-align:center;height:100vh;    display: flex;
	font-size:25px;
	font-weight:bold;
    justify-content: center;
    align-items: center;"> Please contact The Coder -> <a href='https://www.fb.com/WaelMohElSaid'> FaceBook@WaelMohElSaid</a></div>`;
})();


var myElem = document.getElementById('author');
if (myElem === null || myElem.innerHTML != "Wael Mohamed") {
	alert('يرجى الإلتزام بحقوق المبرمج - وائل محمد');
	window.location.href = "https://www.fb.com/WaelMohElSaid";
}

// console.log(myElem.innerHTML)


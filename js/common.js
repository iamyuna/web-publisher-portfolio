//기본js
startJs();
headerJS();

window.addEventListener('DOMContentLoaded',()=>{
	includeHTML();
});

function startJs(){
	const $html = document.querySelector("html");
	//const urlNot = document.querySelector('a[href="#none"]');

	// urlNot.addEventListener("click", (e) => {
	// 	e.preventDefault();
	// });

	if($html.classList.contains('.ie67, .ie7, .ie8, .ie9')) {
		const notice = document.createTextNode("현재 사이트는 IE9 미만의 하위브라우저를 지원하지 않습니다. <br />브라우저를 최신 버전으로 <b>업데이트</b>해 주세요.");
		document.querySelector(".ie_alert_text").style.display = "block";
		document.querySelector(".ie_alert_text").appendChild(notice);
	}

	WebFont.load({google: {families: ['Noto Sans KR', 'Montserrat']}});
	

}

function headerJS(){
	const $header = document.querySelector("header");

	//스크롤하면 header 따라 내려옴
	document.addEventListener("scroll", (e) => {
		if(window.scrollY >= 10){
			$header.classList.add("scroll");
		}else {
			$header.classList.remove("scroll");
		}
	});
}

function includeHTML(){
    let z, elmnt, file, xhttp;
 
    z = document.getElementsByTagName("*");
    
    for (let i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("data-include");
      
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("data-include");
            includeHTML();
          }//if
        }//onreadystatechange
 
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }//if - file
    }//for
}//includeHTML
 
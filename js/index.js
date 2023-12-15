const $body = document.querySelector("body");

//인트로 모션 이벤트
bodyIntro = function(){
	$body.classList.add("intro");
	window.scrollTo({ top: 0});
}
setTimeout(bodyIntro,100)

//인트로 텍스트 split
const intro = document.querySelector('.intro_wrap');
const introText = document.querySelector('.intro_wrap strong');
let words = introText.textContent.split(' ');
words = words.map(word => {
  let letters = word.split('');
  letters = letters.map(letter => `<span class="char">${letter}</span>`);
  return letters.join('');
});
introText.innerHTML = words.join(' ');

//인트로 텍스트 모션 끝나면 이벤트 실행
intro.ontransitionstart = (e) => {
 	$body.classList.add("size");
};


// section2 포트폴리오 호버시 모션
const portfolioList = document.querySelector(".portfolio_list li");
const hoverBtn = document.querySelectorAll(".hover_mt");

hoverBtn.forEach(hvBtn => {
	hvBtn.addEventListener("mouseover", (e) => {
		e.target.closest('li').classList.add("on");

	});
	hvBtn.addEventListener("mouseleave", (e) => {
		e.target.closest('li').classList.remove("on");
	});
});



//gsap 공통 스크롤 모션
gsap.to('.intro_wrap .char',{y:0,stagger:0.04,delay:0.1,ease: 'power2.out'});
gsap.to('.intro_wrap .char',{y:'-100%',stagger:0.03,delay:0.8,ease: 'power2.out'});

document.querySelectorAll(".ani").forEach(ani => {
	gsap.to(ani,{
		duration: 1,
		scrollTrigger: {
			scrub:true,
			trigger: ani,
			start: 'top 50%',
			onEnter: function(){
				ani.classList.add('animate');
			}
		},
		ease: 'power2.out',            
	});
});
document.querySelectorAll(".ani2").forEach(ani2 => {
	gsap.to(ani2,{
		duration: 1,
		scrollTrigger: {
			scrub:true,
			trigger: ani2,
			start: 'top 80%',
			onEnter: function(){
				ani2.classList.add('animate');
			}
		},
		ease: 'power2.out',            
	});
});
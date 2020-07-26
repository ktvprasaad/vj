const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");
let abt = get("abt-link");
let skl = get("skl-link");
let wrk = get("wrk-link");
let cnt = get("cnt-link");

open.addEventListener('click', () => {
	nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
	nav.classList.remove('open-nav');
})

abt.addEventListener('click', (event) => {
	nav.classList.remove('open-nav');
})
skl.addEventListener('click', (event) => {
	nav.classList.remove('open-nav');
})

wrk.addEventListener('click', (event) => {
	nav.classList.remove('open-nav');
})

cnt.addEventListener('click', (event) => {
	nav.classList.remove('open-nav');
})

let navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY - 70;

  navLinks.forEach(link => {
	let section = document.querySelector(link.hash);
	if (
	section.offsetTop <= fromTop + 75 &&
	section.offsetTop + section.offsetHeight > fromTop + 75
	) {
	link.classList.add("active");
	} else {
	link.classList.remove("active");
	}
  });
});

var tl = gsap.timeline({defaults:{duration: 1}});

tl.from(".profile-img", {y: -50, opacity: 0})
  .to(".profile-content", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=.9")
  .to(".btn", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=1")
//   .from("ul.featured-cabins li", {y: 50, opacity: 0, stagger: .3}, "-=.7")
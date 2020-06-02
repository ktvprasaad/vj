const get = element => document.getElementById(element);
// const query = element => document.getElementsByClassName(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");
let hme = get("home-link")
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
	console.log(event.target);
	nav.classList.remove('open-nav');
	abt.classList.add('active');
	hme.classList.remove('active');
	skl.classList.remove('active');
	wrk.classList.remove('active');
	cnt.classList.remove('active');
})

skl.addEventListener('click', (event) => {
	console.log(event.target);
	nav.classList.remove('open-nav');
	abt.classList.remove('active');
	hme.classList.remove('active');
	skl.classList.add('active');
	wrk.classList.remove('active');
	cnt.classList.remove('active');
})

wrk.addEventListener('click', (event) => {
	console.log(event.target);
	nav.classList.remove('open-nav');
	abt.classList.remove('active');
	hme.classList.remove('active');
	skl.classList.remove('active');
	wrk.classList.add('active');
	cnt.classList.remove('active');
})

cnt.addEventListener('click', (event) => {
	console.log(event.target);
	nav.classList.remove('open-nav');
	abt.classList.remove('active');
	hme.classList.remove('active');
	skl.classList.remove('active');
	wrk.classList.remove('active');
	cnt.classList.add('active');
})


// let mainNavLinks = document.querySelectorAll("a");
// let mainSections = document.querySelectorAll("section");

// let lastId;
// let cur = [];

// // This should probably be throttled.
// // Especially because it triggers during smooth scrolling.
// // https://lodash.com/docs/4.17.10#throttle
// // You could do like...
// // window.addEventListener("scroll", () => {
// //    _.throttle(doThatStuff, 100);
// // });
// // Only not doing it here to keep this Pen dependency-free.

// window.addEventListener("scroll", event => {
//   let fromTop = window.scrollY;

//   mainNavLinks.forEach(link => {
//     let section = document.querySelector(link.hash);

//     if (
//       section.offsetTop <= fromTop &&
//       section.offsetTop + section.offsetHeight > fromTop
//     ) {
//       link.classList.add("active");
//     } else {
//       link.classList.remove("active");
//     }
//   });
// });
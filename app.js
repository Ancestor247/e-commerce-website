// var yusuf = document.querySelector("h1");

// console.log(yusuf);

// let james = document.getElementById("head");
// console.log(james);

// let fareeda = document.getElementsByClassName("big-head");
// console.log(fareeda);

// let ayomide = document.querySelectorAll("h1");
// console.log(ayomide);

// let godwin = document.getElementsByTagName("h1");
// console.log(godwin);

// let yusufBtn = document.getElementById("btn");
// console.log(yusufBtn);

// let yusufBtnAttribute = yusufBtn.getAttribute("class");
// console.log(yusufBtnAttribute);

// // let fareedaBtn = document.getElementById(fareeda);
// // fareedaBtn.setAttribute("class", "economics");
// // console.log(fareedaBtn);

// let ayomideBtn = document.getElementById("ayomide");
// ayomideBtn.removeAttribute("class");

// console.log(ayomideBtn);

// let jamesParagraph = getElementById("intro");
// jamesParagraph.style.color = "blue";

// gettin inner html
let fareedaContent = document.getElementById('main2').innerHTML
console.log(fareedaContent);

// setting inner html
let godwinContent = document.getElementById('main2')
godwinContent.innerHTML = '<h2> god win is a perfect developer'

// removing element
let parentElement = document.getElementById('main2')
let childElemnet = document.getElementById('hint')
parentElement.removeChild(childElement)
console.log('parentElement');
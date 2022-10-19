let but = document.querySelector("button");
let red =document.getElementById("red");
let redRe =document.querySelector("input[name ='red1']+span");
let green =document.getElementById("green");
let greenRe =document.querySelector("input[name ='green1']+span");
let blue =document.getElementById("blue");
let blueRe =document.querySelector("input[name ='blue1']+span");
console.log(red)
red.oninput = function() {
    redRe.textContent=`value=${this.value}`
    but.style.backgroundColor=`rgb(${this.value},${green.value},${blue.value})`
}
green.oninput = function() {
    greenRe.textContent=`value=${this.value}`
    but.style.backgroundColor=`rgb(${red.value},${green.value},${blue.value})`
}
blue.oninput = function() {
    blueRe.textContent=`value=${this.value}`
    but.style.backgroundColor=`rgb(${red.value},${green.value},${blue.value})`
}

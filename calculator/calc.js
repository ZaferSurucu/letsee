function sum(a,b) {
    return a+b
}

function sub(a,b) {
    return a-b
}

function mult(a,b) {
    return a*b
}

function div(a,b) {
    return a/b
}

function operate(a,b,fun) {
    return fun(a,b)
}

let a = 0
let b
let fun

const clear = document.querySelector("#clear")
const one_button = document.querySelector("#one")
const two_button = document.querySelector("#two")
const three_button = document.querySelector("#three")
const four_button = document.querySelector("#four")
const five_button = document.querySelector("#five")
const six_button = document.querySelector("#six")
const seven_button = document.querySelector("#seven")
const eight_button = document.querySelector("#eight")
const nine_button = document.querySelector("#nine")
const zero_button = document.querySelector("#zero")
const text = document.querySelector("#result")
const sum_button = document.querySelector("#sum")
const sub_button = document.querySelector("#sub")
const mult_button = document.querySelector("#mult")
const div_button = document.querySelector("#div")
const equal_button = document.querySelector("#equal")

clear.addEventListener("click", function(e) {
    text.textContent = ""
})

one_button.addEventListener("click", function(e) {
    ahmet = text.textContent
    text.textContent = ahmet + "1"
})

two_button.addEventListener("click", function(e) {
    ahmet = text.textContent
    text.textContent = ahmet + "2"
})

three_button.addEventListener("click", function(e) {
    ahmet = text.textContent
    text.textContent = ahmet + "3"
})

four_button.addEventListener("click", function(e) {
    ahmet = text.textContent
    text.textContent = ahmet + "4"
})

five_button.addEventListener("click", function(e) {
    ahmet = text.textContent
    text.textContent = ahmet + "5"
})

six_button.addEventListener("click", function(e) {
    ahmet = text.textContent
    text.textContent = ahmet + "6"
})

seven_button.addEventListener("click", function(e) {
    ahmet = text.textContent
    text.textContent = ahmet + "7"
})

eight_button.addEventListener("click", function(e) {
    ahmet = text.textContent
    text.textContent = ahmet + "8"
})

nine_button.addEventListener("click", function(e) {
    ahmet = text.textContent
    text.textContent = ahmet + "9"
})

zero_button.addEventListener("click", function(e) {
    ahmet = text.textContent
    text.textContent = ahmet + "0"
})

sum_button.addEventListener("click", function(e) {
    a = Number(text.textContent)
    text.textContent = ""
    fun = sum
})

sub_button.addEventListener("click", function(e) {
    a = Number(text.textContent)
    text.textContent = ""
    fun = sub
})

mult_button.addEventListener("click", function(e) {
    a = Number(text.textContent)
    text.textContent = ""
    fun = mult
})

div_button.addEventListener("click", function(e) {
    a = Number(text.textContent)
    text.textContent = ""
    fun = div
})

equal_button.addEventListener("click", function(e) {
    b = Number(text.textContent)
    text.textContent = "" + fun(a,b)
})
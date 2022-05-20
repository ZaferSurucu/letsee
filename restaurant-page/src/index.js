import {createMenuPage} from "./CreateMenuPage.js"

const headpage_button = document.querySelector("#headpage")
const menu_button = document.querySelector("#menu")
const contact_button = document.querySelector("#contact")



function createHeadPage(content){
    let p = document.createElement("p")
    p.textContent = "Welcome to the human restourant where you can eat the food that humans consume back then they exists."
    p.setAttribute("margin","250px")
    content.appendChild(p)
}



function createContactPage(content){
    let phone_p = document.createElement("p")
    phone_p.textContent = "Phone: 05387328926"
    let email_p = document.createElement("p")
    email_p.textContent = "freehumans@solarsystem.bok"
    let instagram = document.createElement("a")
    instagram.href = "https://www.youtube.com/"
    content.appendChild(phone_p)
    content.appendChild(email_p)
    content.appendChild(instagram)
}

function reset_content(){
    let old_content = document.querySelector("#content")
    old_content.remove()
    let content = document.createElement("div")
    content.setAttribute("id","content")
    document.body.appendChild(content)
    return content
}

headpage_button.addEventListener("click", () => {
    let content = reset_content()
    createHeadPage(content)
})

contact_button.addEventListener("click", () => {
    let content = reset_content()
    createContactPage(content)
})

menu_button.addEventListener("click", () => {
    let content = reset_content()
    createMenuPage(content)
})
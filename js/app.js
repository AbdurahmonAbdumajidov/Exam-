const elNav = document.querySelector(".header__center")
const elOppenBtn = document.querySelector(".js-toggle")
const elClousBtn = document.querySelector(".btn-clouse")
const elLinks = document.querySelectorAll(".header__item")


elOppenBtn.addEventListener("click", show)
elClousBtn.addEventListener("click", show)
elLinks.forEach(el => {
    el.addEventListener("click", show)
})
function show() {
    elNav.classList.toggle("show")
    if (elNav.classList.contains("show")) {
        document.body.classList.add("active")
    } else {
        document.body.classList.remove("active")
    }
}



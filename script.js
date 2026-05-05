let burger = false
function burgerToggle() {
    console.log(burger)
    if (burger == false) {
        burger = true
        nav.style.display = "flex"
    }
    else {
        burger = false
        nav.style.display = "none"
    }
}
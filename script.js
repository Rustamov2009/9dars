
let id = document.getElementById(`id`)
let password = document.getElementById(`password`)
let btn = document.getElementById(`btn`)

let i = 723102
let p = 50287

btn.addEventListener(`click`,() => {
    if (id.value == i && password.value == p) {
        alert(`Id va parol to'g'ri`)
}else{
    alert(`Id va parol noto'g'ri`)
}
})
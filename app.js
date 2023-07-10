const counterElement = document.querySelector(".counter")
const barElement = document.querySelector(".loading-bar-front")

let index = 0

function updateNumber() {
    counterElement.textContent = index + "%"
    barElement.style.width = index + "%"
    index++
    if(index < 101) {
        setTimeout(updateNumber, 40)
    }
}

updateNumber()
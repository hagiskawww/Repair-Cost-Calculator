const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')
const price = document.querySelector('#total-price')

const radioType = document.querySelectorAll('input[name = "type"]')
const radioBuilding = document.querySelectorAll('input[name = "building"]')
const radioRooms = document.querySelectorAll('input[name = "rooms"]')

const checkbox = document.querySelectorAll('input[type = "checkbox"]')

const basePrice = 6000

squareRange.addEventListener('input', () => {
    squareInput.value = squareRange.value
})

squareInput.addEventListener('input', () => {
    squareRange.value = squareInput.value
})


function calc() {
    let totalPrice =  basePrice * parseInt(squareInput.value || squareRange.value)

    radioType.forEach(radio => {
        if (radio.checked) {
            parseFloat(radio.value)
            totalPrice *= radio.value
        }
    })

    radioBuilding.forEach(building => {
        if (building.checked) {
            parseFloat(building.value)
            totalPrice *= building.value
        }
    })

    radioRooms.forEach(rooms => {
        if (rooms.checked) {
            parseFloat(rooms.value)
            totalPrice *= rooms.value
        }
    })

    checkbox.forEach(checkbox => {
        if (checkbox.checked) {
            parseFloat(checkbox.value)
            totalPrice *= checkbox.value
        }
    })


    const formater = new Intl.NumberFormat('ru')
    parseInt(totalPrice)
    price.innerText = formater.format(totalPrice)
}

calc()

inputs.forEach(item => {
    item.addEventListener('input', () => {
        calc()
    })
})

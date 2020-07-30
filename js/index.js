const hairLengthInput = document.querySelector('#hair-input')
const colorInputs = document.querySelectorAll('.color-input')
const hairPriceNode = document.querySelector('.hair-price span')
const lengthDisplay = document.querySelector('.length-display')
const blondButton = document.querySelector('#blond')
let hairColor = '2'
let hairLength = 0
let hairPrice = 3200

blondButton.classList.add('active')

function removeChecked() {
  colorInputs.forEach(input => input.parentNode.classList.remove('active'))
}

function brownHairCount() {
  if (hairLength >= 40 && hairLength <= 44) {
    hairPrice = 2000
  } else if (hairLength >= 45 && hairLength <= 49) {
    hairPrice = 3000
  } else if (hairLength >= 50 && hairLength <= 59) {
    hairPrice = 4000
  } else if (hairLength >= 60 && hairLength <= 69) {
    hairPrice = 4500
  } else if (hairLength === 70) {
    hairPrice = 5000
  }
}

function blackHairCount() {
  if (hairLength >= 40 && hairLength <= 44) {
    hairPrice = 1700
  } else if (hairLength >= 45 && hairLength <= 49) {
    hairPrice = 2700
  } else if (hairLength >= 50 && hairLength <= 59) {
    hairPrice = 3700
  } else if (hairLength >= 60 && hairLength <= 69) {
    hairPrice = 4200
  } else if (hairLength === 70) {
    hairPrice = 4700
  }
}

function blondeHairCount() {
  if (hairLength >= 40 && hairLength <= 44) {
    hairPrice = 2700
  } else if (hairLength >= 45 && hairLength <= 49) {
    hairPrice = 3500
  } else if (hairLength >= 50 && hairLength <= 59) {
    hairPrice = 5000
  } else if (hairLength >= 60 && hairLength <= 69) {
    hairPrice = 5500
  } else if (hairLength === 70) {
    hairPrice = 6000
  }
}

colorInputs.forEach(
  input => input.addEventListener(
    'click', () => {
      removeChecked()
      input.parentNode.classList.add('active')
      hairColor = input.value
      if (input.value === '1') {
        brownHairCount()
      } else if (input.value === '2') {
        blondeHairCount()
      } else if (input.value === '3') {
        blackHairCount()
      }
      rerenderValue()
    }))

hairLengthInput.addEventListener('input', e => {
  hairLength = parseInt(e.target.value)
  if (hairColor === '1') {
    brownHairCount()
  } else if (hairColor === '2') {
    blondeHairCount()
  } else if (hairColor === '3') {
    blackHairCount()
  }
  rerenderValue()
})

function rerenderValue() {
  hairPriceNode.innerHTML = hairPrice
  if (hairLength > 0) {
    lengthDisplay.innerHTML = hairLength + ' см'
  }
}
rerenderValue()

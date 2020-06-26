const hairLengthInput = document.querySelector('#hair-input')
const colorInputs = document.querySelectorAll('.color-input')
const hairPriceNode = document.querySelector('.hair-price span')
const lengthDisplay = document.querySelector('.length-display')
let hairColor = ''
let hairLength = 0
let hairPrice = 0

function removeChecked() {
  colorInputs.forEach(input => input.parentNode.classList.remove('active'))
}

function brownHairCount() {
  if (hairLength >= 40 && hairLength <= 44) {
    hairPrice = 2300
  } else if (hairLength >= 45 && hairLength <= 49) {
    hairPrice = 3500
  } else if (hairLength >= 50 && hairLength <= 59) {
    hairPrice = 4000
  } else if (hairLength >= 60 && hairLength <= 70) {
    hairPrice = 4700
  } else if (hairLength >= 71) {
    hairPrice = 5200
  }
}

function blackHairCount() {
  if (hairLength >= 40 && hairLength <= 44) {
    hairPrice = 2000
  } else if (hairLength >= 45 && hairLength <= 49) {
    hairPrice = 3200
  } else if (hairLength >= 50 && hairLength <= 59) {
    hairPrice = 3700
  } else if (hairLength >= 60 && hairLength <= 70) {
    hairPrice = 4400
  } else if (hairLength >= 71) {
    hairPrice = 4900
  }
}

function blondeHairCount() {
  if (hairLength >= 40 && hairLength <= 44) {
    hairPrice = 3200
  } else if (hairLength >= 45 && hairLength <= 49) {
    hairPrice = 4000
  } else if (hairLength >= 50 && hairLength <= 59) {
    hairPrice = 5200
  } else if (hairLength >= 60 && hairLength <= 70) {
    hairPrice = 5700
  } else if (hairLength >= 71) {
    hairPrice = 6200
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
  hairLength = e.target.value
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

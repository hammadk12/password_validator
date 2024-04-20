let characterLength = document.getElementById('lengthCharacter')
let lowerCharacter = document.getElementById('lowerCharacter')
let upperCharacter = document.getElementById('upperCharacter')
let numberCharacter = document.getElementById('numberCharacter')
let specialCharacter = document.getElementById('specialCharacter')

passInput.onkeyup = () => {
    let userPassword = passInput.value

    // Check lowercase letters
    const lowerCaseLetters = /[a-z]/g
    if (userPassword.match(lowerCaseLetters)) {
        lowerCharacter.classList.add('valid')
        lowerCharacter.classList.remove('invalid')
    } else {
        lowerCharacter.classList.remove('valid')
        lowerCharacter.classList.add('invalid')
    }

    // Check uppercase letters
    const upperCaseLetters = /[A-Z]/g
    if (userPassword.match(upperCaseLetters)) {
        upperCharacter.classList.add('valid')
        upperCharacter.classList.remove('invalid')
    } else {
        upperCharacter.classList.remove('valid')
        upperCharacter.classList.add('invalid')
    }

    // Check numbers 
    const numbersCharacter = /[0-9]/g
    if (userPassword.match(numbersCharacter)) {
        numberCharacter.classList.add('valid')
        numberCharacter.classList.remove('invalid')
    } else {
        numberCharacter.classList.remove('valid')
        numberCharacter.classList.add('invalid')
    }

    // Check special character 
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{}]/g
    if (userPassword.match(specialCharacters)) {
        specialCharacter.classList.add('valid')
        specialCharacter.classList.remove('invalid')
    } else {
        specialCharacter.classList.remove('valid')
        specialCharacter.classList.add('invalid')
    }

     // Check length
     
     if (userPassword.length >= 8) {
         characterLength.classList.add('valid')
         characterLength.classList.remove('invalid')
     } else {
         characterLength.classList.remove('valid')
         characterLength.classList.add('invalid')
     }
}
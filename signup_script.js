const signIn = document.querySelector('#signIn')
const signUp = document.querySelector('#signUp')
const container = document.querySelector('.container')

signIn.addEventListener('click', () => {
    container.classList.remove('sign-up-active')
})

signUp.addEventListener('click', () => {
    container.classList.add('sign-up-active')
})
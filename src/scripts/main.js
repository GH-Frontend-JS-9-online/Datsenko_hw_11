// let apiBase = 'http://localhost:3000/api'

//const btnRegister = document.querySelector('input[name="register"]')
// btnRegister.addEventListener('click', (event) => {
//     event.preventDefault()
//     let registerForm = document.forms['registerForm']
//     let userEmail = registerForm.elements['userEmail'].value
//     let userPassword = registerForm.elements['userPassword'].value
//     let userConfirmPassword = registerForm.elements['userConfirmPassword'].value
//     if (userPassword === userConfirmPassword) {
//         register(userEmail, userPassword)
//             .then(response => response.json())
//             .then(result => console.log(result))
//             .catch(error => console.log(error))
//         registerForm.elements['userEmail'].value = ''
//         registerForm.elements['userPassword'].value = ''
//         registerForm.elements['userConfirmPassword'].value = ''
//     }

// })
// async function register(userEmail, userPassword) {
//     const register = await fetch(`${apiBase}/users`, {
//         method: 'POST',
//         body: JSON.stringify({
//             name: userEmail,
//             email: userEmail,
//             password: userPassword,
//             secret: userEmail

//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     return register
// }

// const btnLogin = document.querySelector('input[name="login"]')
// btnLogin.addEventListener('click', (event) => {
//     event.preventDefault()
//     let loginForm = document.forms['loginForm']
//     let userEmail = loginForm.elements['userEmail'].value
//     let userPassword = loginForm.elements['userPassword'].value
//     login(userEmail, userPassword)
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(error => console.log(error))
//     loginForm.elements['userEmail'].value = ''
//     loginForm.elements['userPassword'].value = ''
// })
// async function login(userEmail, userPassword) {
//     const login = await fetch(`${apiBase}/users/login`, {
//         method: 'POST',
//         body: JSON.stringify({
//             email: userEmail,
//             password: userPassword,
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     return login
// }
// const btnResetPassword = document.querySelector('input[name="reset"]')
// btnResetPassword.addEventListener('click', (event) => {
//     event.preventDefault()
//     let resetForm = document.forms['resetForm']
//     let userPassword = resetForm.elements['userPassword'].value
//     let userConfirmPassword = resetForm.elements['userConfirmPassword'].value
//     resetPassword(userPassword, userConfirmPassword)
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(error => console.log(error))
//     resetForm.elements['userPassword'].value = ''
//     resetForm.elements['userConfirmPassword'].value = ''
// })
// async function resetPassword(userPassword, userConfirmPassword, userEmail) {
//     const resetPassword = await fetch(`${apiBase}/users/reset_password`, {
//         method: 'POST',
//         body: JSON.stringify({
//             password: userPassword,
//             confirmationPassword: userConfirmPassword,
//             email: userEmail
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     return resetPassword
// }
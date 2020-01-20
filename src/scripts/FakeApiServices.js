class FakeApiServices {

    constructor() {
        this._apiBase = 'https://geekhub-frontend-js-9.herokuapp.com/api'
    }

    async signUp(user) {
        const signUp = await fetch(`${this._apiBase}/users`, {
            method: 'POST',
            body: JSON.stringify({
                email: user.email,
                password: user.password,
                name: user.name
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return signUp
    }

    async login(user) {
        const login = await fetch(`${this._apiBase}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            }),
        })
        return login
    }

    async getCurrentUser(user) {
        this.login(user)
            .then(response => Storage.setData('token', response.headers.get('x-auth-token')))
            .catch(error => console.error(error))
        let token = Storage.getData('token')
        const currentUser = fetch(`${this._apiBase}/users`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        Storage.removeData()
        return currentUser
    }

    async resetPassword(user) {
        this.login(user)
            .then(response => Storage.setData('token', response.headers.get('x-auth-token')))
            .catch(error => console.error(error))
        let token = Storage.getData('token')
        const resetPassword = await fetch(`${this._apiBase}/users/reset_password`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: user.password,
                confirmationPassword: user.password,
                email: user.email
            })
        })
        Storage.removeData()
        return resetPassword
    }

    // constructor() {
    //     this._apiBase = 'http://localhost:3000/api'
    // }
    //
    // async register(userEmail, userPassword) {
    //     const register = await fetch(`${this._apiBase}/users`, {
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
    //
    // async login(userEmail, userPassword) {
    //     const login = await fetch(`${this._apiBase}/users/login`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             email: userEmail,
    //             password: userPassword
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     return login
    // }
    //
    // async resetPassword(userPassword, userConfirmPassword, userEmail) {
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

}

const registerService = new FakeApiServices()
export default registerService
class RegisterService {
    constructor() {
        this._apiBase = 'http://localhost:3000/api'
    }

    async register(userEmail, userPassword) {
        const register = await fetch(`${this._apiBase}/users`, {
            method: 'POST',
            body: JSON.stringify({
                name: userEmail,
                email: userEmail,
                password: userPassword,
                secret: userEmail
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return register
    }

    async login(userEmail, userPassword) {
        const login = await fetch(`${this._apiBase}/users/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: userEmail,
                password: userPassword
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return login
    }

    async resetPassword(userPassword, userConfirmPassword, userEmail) {
        const resetPassword = await fetch(`${apiBase}/users/reset_password`, {
            method: 'POST',
            body: JSON.stringify({
                password: userPassword,
                confirmationPassword: userConfirmPassword,
                email: userEmail
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return resetPassword
    }

}

const registerService = new RegisterService()
export default registerService
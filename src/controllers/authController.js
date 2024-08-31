const AuthService = require('../services/authService')

class AuthController {
  static async register(req, res) {
    try {
      const { token, user } = await AuthService.register(req.body)
      res.status(201).json({ token, user })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async login(req, res) {
    try {
      const { token, user } = await AuthService.login(req.body)
      res.status(200).json({ token, user })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = AuthController

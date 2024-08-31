const jwt = require('jsonwebtoken')
const User = require('../models/user')
const dotenv = require('dotenv')

dotenv.config()

class AuthService {
  static async register({ username, email, password }) {
    try {
      const user = await User.create({ username, email, password })
      const token = jwt.sign(
        { id: user.id, role: user.role_id },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
        }
      )
      return { token, user }
    } catch (error) {
      throw new Error('Error during registration')
    }
  }

  static async login({ username, password }) {
    const user = await User.findOne({ where: { username } })
    if (!user || !(await user.validPassword(password))) {
      throw new Error('Invalid credentials')
    }

    const token = jwt.sign(
      { id: user.id, role: user.role_id },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )
    return { token, user }
  }
}

module.exports = AuthService

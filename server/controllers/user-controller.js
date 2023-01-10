const userService = require('../service/user-service')
class UserController {
	async registration(req, res, next) {
		try {
			const {email, password} = req.body;
			const userData = await userService.registration(email, password);
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})
			
			return res.json(userData)
		} catch (err) {
			console.error('Ошибка ', err.message)
		}
	}
	async login(req, res, next) {
		try {
		
		} catch (err) {
		
		}
	}
	async logout(req, res, next) {
		try {
		
		} catch (err) {
		
		}
	}
	async activate(req, res, next) {
		try {
		
		} catch (err) {
		
		}
	}
	async refresh(req, res, next) {
		try {
		
		} catch (err) {
		
		}
	}
	async getUsers(req, res, next) {
		try {
			res.json(['122212', '12121'])
		} catch (err) {
		
		}
	}
}

module.exports = new UserController();
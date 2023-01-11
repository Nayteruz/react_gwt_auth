const ApiError = require('../exceptions/api-error')
const tokenService = require('../service/token-service')

module.exports = function (req, res, next){
	try {
		const authorizationHeader = req.headers.authorization;
		if (!authorizationHeader){
			return next(ApiError.UnauthorizedError())
		}
		const accessToken = authorizationHeader.replace('Bearer ', '');
		if (!accessToken) {
			return next(ApiError.UnauthorizedError())
		}
		const userData = tokenService.validateAccessToken(accessToken);
		if (!userData) {
			return next(ApiError.UnauthorizedError())
		}
		req.user = userData;
		next();
	} catch (err) {
		return next(ApiError.UnauthorizedError())
	}
}
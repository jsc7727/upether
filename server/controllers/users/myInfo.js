const { users } = require('../../models');
const jwt = require('jsonwebtoken');
const msg = require('../../constants/message');
const { sterilization } = require('./../../utils')

module.exports = async (req, res) => {
    const language = 'ko';
    try {
        const authorization = req.headers['authorization'];
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
        const { email } = decoded;
        console.log(email);
        const userInfo = await users.findOne({
            where: { email },
        });
        if (userInfo) {
            const { dataValues } = userInfo;
            console.log(dataValues)
            return res.status(200).json({ data: { userInfo: sterilization(dataValues), message: msg[language].SUCCESS_MESSAGE } });
        }
        else {
            return res.status(400).json({ data: null, message: msg[language].ACCESS_TOKEN_HAS_BEEN_TEMPERED })
        }
    }
    catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            console.log("jwt.JsonWebTokenError")
            return res.status(400).json({ data: null, message: msg[language].INVALID_ACCESS_TOKEN });
        }
        else {
            return res.status(400).json({ data: null, message: msg[language].INVALID_ACCESS_TOKEN });
        }
    }
};

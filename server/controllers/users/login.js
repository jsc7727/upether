const { users } = require('../../models');
const { sign } = require('jsonwebtoken');
const msg = require('../../constants/message');
require('dotenv').config();

module.exports = async (req, res) => {
    const language = 'ko';
    const { body: { email, password } = {} } = req;
    console.log(req.body, req.query, req.params)
    if (!(password && email)) {
        return res.status(400).json({ message: msg[language].FAIL_MESSAGE });
    }
    else {
        const userInfo = await users.findOne({
            where: { email, password },
        });
        if (userInfo) {
            const { id, userId, email, createdAt, updatedAt } = userInfo;
            const data = {};
            data.accessToken = sign({
                id,
                userId,
                email,
                createdAt,
                updatedAt,
                // iat: Math.floor(Date.now() / 1000),
                // exp: Math.floor(Date.now() / 1000) + (60 * 60),
            }, process.env.ACCESS_SECRET, {
                expiresIn: '1h'
            });
            const refreshToken = sign({
                userId,
            }, process.env.REFRESH_SECRET, {
                expiresIn: '12h'
            });
            res.status(200);
            res.cookie('refreshToken', refreshToken, { maxAge: 900000, httpOnly: true });
            res.json({
                data,
                message: msg[language].LOGIN_SUCCESS
            });
        }
        else {
            res.status(400);
            res.json({
                data: null,
                message: msg[language].LOGIN_FAIL
            })
        }
    }

};
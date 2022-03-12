const { Users } = require('../../models');
const jwt = require('jsonwebtoken');
const {
    SUCCESS_MESSAGE,
    INVALID_ACCESS_TOKEN,
    ACCESS_TOKEN_HAS_BENN_TEMPERED
} = require('../../constants/message');

module.exports = async (req, res) => {
    try {
        const authorization = req.headers['authorization'];
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
        // console.log("decode", decoded) // bar
        const result = decoded;
        console.log(result);
        // const userInfo = await Users.findOne({
        //     where: { id, userId, email, createdAt, updatedAt },
        // });
        // if (userInfo) {
        //     res.status(200).json({ data: { userInfo: { id, userId, email, createdAt, updatedAt } }, message: SUCCESS_MESSAGE });
        // }
        // else {
        //     res.status(400).json({ data: null, message: ACCESS_TOKEN_HAS_BENN_TEMPERED })
        // }
    }
    catch (error) {
        // if (error instanceof jwt.JsonWebTokenError) {
        //     console.log("jwt.JsonWebTokenError")
        //     res.status(400).json({ data: null, message: INVALID_ACCESS_TOKEN });
        // }
        // else {
        //     res.status(400).json({ data: null, message: INVALID_ACCESS_TOKEN });
        // }
    }
};

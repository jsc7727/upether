
const msg = require('../../constants/message');
module.exports = (req, res) => {
    console.log("asdf")
    const language = 'ko';
    res.clearCookie('jwt');
    res.status(205).send({ success: true, data: {}, message: msg[language].LOGOUT_SUCCESS });
};

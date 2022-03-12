const { users } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../../utils/token');
const msg = require('../../constants/message');

module.exports = async (req, res) => {
    const language = 'ko';
    const { email, password, name, date_of_birth } = req?.body;
    if (email && password && name && date_of_birth) {
        const createUser = await users.findOrCreate({ where: { email }, defaults: { email, password, name, date_of_birth } });
        if (createUser[1]) {
            return res.status(201).send({
                success: true,
                data: {},
                message: msg[language].REGISTER_SUCCESS
            });
        }
        else {
            return res.status(409).send({
                success: false,
                data: {},
                message: msg[language].EMAIL_EXISTS
            });
        }
    }
    return res.status(422).send({
        success: true,
        data: {},
        message: msg[language].INSUFFICIENT_PARAMETERS
    });
};

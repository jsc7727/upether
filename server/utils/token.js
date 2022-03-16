require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');
const { SUCCESS_MESSAGE, FAIL_MESSAGE } = require('../constants/message');


module.exports = {
    /**
     * Represents a book.
     * @constructor
     * @param {object} data - The title of the book.
     */
    generateAccessToken: (data) => {
        // TODO: Access token으로 sign합니다.
        // HINT: 토큰을 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
        const token = sign({ ...data }, process.env.ACCESS_SECRET);
        return token;
    },
    /**
   * Represents a book.
   * @constructor
   * @param {object} res - express response 
   * @param {string} status - status code
   * @param {object} data - 토큰에 들어갈 데이터
   * @param {string} accessToken - accessToken
   * @param {string} refreshToken - refreshToken
   */
    sendAccessToken: (res, status, data, accessToken, refreshToken) => {
        // TODO: JWT 토큰을 쿠키로 전달합니다.
        res.cookie('jwt', refreshToken, { expires: new Date(Date.now() + 900000) });
        res.status(status).json({ data: { ...data, accessToken }, message: SUCCESS_MESSAGE });
    },
    /**
   * Represents a book.
   * @constructor
   * @param {object} req - express request
   */
    isAuthorized: (req) => {
        // TODO: JWT 토큰 정보를 받아서 검증합니다.
        // HINT: jsonwebtoken 라이브러리의 verify 함수를 사용하여 decode된 payload를 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
        if (!!req?.cookies?.jwt) {
            const token = req.cookies.jwt;
            const decoded = verify(token, process.env.ACCESS_SECRET);
            return { success: true, data: decoded };
        }
        return { success: false, data: null };
    }
};

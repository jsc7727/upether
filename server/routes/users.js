const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// cookies
/** 
 * components:
 *   securitySchemes:
 *     bearerAuth:         
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
*/

// schemas
/**
 * @swagger
 *  components:
 *      schemas:
 *          loginUserObject:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *              properties:
 *                  email:
 *                      type: string
 *                      format: email
 *                      description: user email
 *                  password:
 *                      type: string
 *                      format: password
 *                      description: user password
 *              example:
 *                  email: upether@gmail.com
 *                  password: upether
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          registerUserObject:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *                  - name
 *                  - date_of_birth
 *              properties:
 *                  email:
 *                      type: string
 *                      format: email
 *                      description: user email
 *                  password:
 *                      type: string
 *                      format: password
 *                      description: user password
 *                  name:
 *                      type: string
 *                      description: user name
 *                  date_of_birth:
 *                      type: string
 *                      format: date-time
 *                      description: user date_of_birth
 *              example:
 *                  email: upether@gmail.com
 *                  password: upether
 *                  name: eth
 *                  date_of_birth: 2018-01-01T10:10:10
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          returnType:
 *              type: object
 *              required:
 *                  - success
 *                  - data
 *                  - message
 *              properties:
 *                  success:
 *                      type: boolean
 *                      description: 성공 여부
 *                  data:
 *                      type: object
 *                  message:
 *                      type: string
 *              example:
 *                  success: true
 *                  data: {}
 *                  message: success
 */

// ----------------------------------------------------------------
// Api
/**
 * @swagger
 * tags:
 *   name: users
 *   description: users api
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: 로그인
 *     tags: 
 *       - users
 *     operationId: userLogin
 *     description: 유저 로그인
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/loginUserObject'
 *       description: Inventory item to add
 *     responses:
 *       '200':
 *         description: 로그인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/returnType'
 *       '400':
 *         description: 로그인 실패
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/returnType'
 * 
 */
router.post('/login', controllers.users.login);

/**
 * @swagger
 * /users/logout:
 *   get:
 *     summary: 로그아웃
 *     tags: [users]
 *     responses:
 *       '205':
 *         description: 로그아웃 성공
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/loginUserObject'
 * 
 */
router.get('/logout', controllers.users.logout);


/**
 * @swagger
 * /users/myInfo:
 *   post:
 *     security:
 *      - bearerAuth: [eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVwZXRoZXJAZ21haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAyMi0wMy0xNlQwOTozNzoyNC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMi0wMy0xNlQwOTozNzoyNC4wMDBaIiwiaWF0IjoxNjQ3NDI0MzE4LCJleHAiOjE2NDc0Mjc5MTh9.sZi2lxiKQD2wxqueHRltsmQA8pts3oiXsUMta-5FQhE]  
 *     summary: 내 정보
 *     tags: 
 *       - users
 *     operationId: myInfo
 *     description: 내 정보
 *     responses:
 *       '200':
 *         description: 내 정보 가져오기 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/returnType'
 *       '400':
 *         description: |
 *          ## 1. 엑세스 토큰이 만료되었습니다.
 *          
 *          ## 2. 리프레시 토큰이 만료되었습니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/returnType'

 * 
 */
router.post('/myInfo', controllers.users.myInfo);

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: 회원가입
 *     tags: [users]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/registerUserObject'
 *       description: Inventory item to add
 *          
 *     responses:
 *       '201':
 *         description: 회원가입 성공
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/loginUserObject'
 *       "409":
 *         description: |
 *          `중복된 이메일 입니다.`
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/loginUserObject'
 *       "422":
 *         description: |
 *          `데이터를 모두 입력해 주세요.`
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/loginUserObject'
 * 
 */
router.post('/register', controllers.users.register);


// /**
//  * @swagger
//  * definitions:
//  *   NewUser:
//  *     type: object
//  *     required:
//  *       - username
//  *       - password
//  *     properties:
//  *       username:
//  *         type: string
//  *       password:
//  *         type: string
//  *         format: password
//  *   User:
//  *     allOf:
//  *       - $ref: '#/definitions/NewUser'
//  *       - required:
//  *         - id
//  *       - properties:
//  *         id:
//  *           type: integer
//  *           format: int64
//  */
module.exports = router;

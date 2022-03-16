[swagger 문서 1](https://blog.logrocket.com/documenting-your-express-api-with-swagger/)

[swagger 문서 2](https://lahuman.github.io/nodejs_swagger/)

[swagger 문서 3](https://www.youtube.com/watch?v=apouPYPh_as)


[swagger parameters](https://swagger.io/docs/specification/describing-parameters/)

[swagger request-body](https://swagger.io/docs/specification/describing-request-body/)

[swagger cookie-authentication](https://swagger.io/docs/specification/authentication/cookie-authentication/)

[swagger bearer-authentication](https://swagger.io/docs/specification/authentication/bearer-authentication/)

## 1. 들여쓰기 꼭 지킬 것 아니면 오류남 (화가 무진장 날지도?)

## 2. 2.0 문법이랑 3.0 문법이 다름! (본인이 원하는거 선택)

## 3. swagger파일 => swagger-jsdoc => swagger-ui-express 순으로 들어감

```js
/users/login:
  post:
    summary: 로그인
    tags: 
      - users
    operationId: userLogin
    description: 유저 로그인
    requestBody:
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/loginUserObject'
      description: Inventory item to add
    responses:
      '200':
        description: 로그인 성공
        content:
          application/json:
            schema:
              type: array
              items:
                $ref: '#/components/schemas/returnType'
      "400":
        description: 로그인 실패
        content:
          application/json:
            schema:
              type: array
              items:
                $ref: '#/components/schemas/returnType'


```
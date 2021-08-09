# Read Me

- node.js를 활용한 백엔드 구축
  - previous sprint
    - during implement the API Server of StatesAirline ,
      learn Express, Routing and Debug a Server-side.

* use a same JS, using code in node JS environment, including difficult concepts that can't find in browser like CommeonJS or module.

- Concepts using in node.js , are being used to in not only backend but also Frontend areas.
- API server that we are bulinging in this unit , should be able to implement even frontend developers.
  - when we try to make a new service, if we cant implement a basic API server that stores or retrieves the data we need, we can only implement clients with no dynamic activity.
- And the information about node.js is common in web development such as front and back end, so you must learn it.
- in this unit, we have to concentrate learning concepts not a implement code.

# Before I Learned

- node.js's role
- package.json's role
- Roles and features of HTTP
- Types of methods and method's respective purposes
- Concept of API, how to read API documents

# Acievement Goals

- HTTP
  - 요청 / 응답을 브라우저를 통해 확인 할 수 있고, 해당 내용 읽기
  - 다양한 요청 방식과, 응답 코드에 대해 이해
- node.js modules의 사용
  - node.js의 내장 http 모듈 사용
  - http 모듈 사용시 , 서버에 CORS 설정 하기
  - CommonJS를 이용한 모듈 내보내기/ 불러오기 하기
- 라우팅과 API
  - 라우팅(조건에 따른 분기) 이해, 이를 서버 코드에서 구현하기
  - 클라이언트가 사용할 수 있도록, 서버 API 문서를 직접 작성-
- Express 라이브러리
  - express 라이브러리가 어떤 작업을 단순하게 만드는 지 이해
  - 미들웨어의 개념 이해
- 서버 개발과 디버깅
  - CRUD를 수행하는 웹 서버 개발 방법 익히기
  - 서버 개발을 돕는 다양한 툴들 익히기

# Refactor Express

## Node.js Express

- Express.js 는 Node.js 환경에서 웹 서버, 또는 API 서버를 제작하기 위해 사용되는 인기 있는 프레임 워크
- Mini Node Server에서 http 모듈로 작성했던 서버를 , 프레임워크 Express를 이용하는 방식으로
  리팩토링
- Express framework는 npm을 통해 다운가능
- Express로 구현한 서버가 http 모듈로 작성한 서버와 다른 점
  - 미들웨어 추가가 용이
  - 자체 라우터를 제공

* https://expressjs.com/ko/ 을 참고해서 Express로 간단한 웹서버 만들 수 있다.

- 공식문서를 따라 Mini Node Server를 Express를 이용하는 방식으로 리팩토링
  - 1.  Express 설치
    - 공식문서의 시작하기 -> 설치 참고
  - 2.  간단한 웹 서버 만들기
    - 공식 문서의 시작하기 -> Hello World 예제 참고
  - 3.  라우팅: 메소드와 URL에 따라 분기(Routing)하기
    - 메소드와 URL(/upper, /lower등)로 분기점을 만드는 것을 라우팅이라고 한다.
    - 클라이언트는 특정한 HTTP 요청 메소드나 서버의 특정 URI(또는 경로)로 HTTP요청을 보낸다.
    - 라우팅은 클라이언트의 요청에 해당하는 메소드와 Endpoint에 따라 서버가 응답하는 방법을 결정.

* 추가적인 라이브러리를 사용하지 않고, 순수한 nodejs코드를 작성하면 , 다음과 같다.

```
const requestHandler = (req, res) => {
  if(req.url === '/lower') {
    if (req.method === 'GET') {
      res.end(data)
    } else if (req.method === 'POST') {
      req.on('data', (req, res) => {
        // do something ...
      })
    }
  }
}
```

- 반면에 Express는 프레임워크 자체에서 라우터 기능을 제공한다. Express의 라우터를 활용하면 다음과 같다.

```
const router = express.Router()

router.get('/lower', (req, res) =>{
  res.send(data)
})

router.post('/lower', (req, res) =>{
  // do something
})
<!-- Express의 라우터로 구현한 Mini Node Server -->
```

## Middleware

- 자동차 공장에서는 컨베이어 벨트 위에 올려진 자동차의 뼈대에, 각 공정마다 부품을 추가한다. 모든 부품이 추가되면 완성된 자동차가, 어딘가 문제가 있다면 불량품이 결과물로 나오게 된다. 미들웨어는 자동차 공장의 공정과 비슷하다.
  컨베이어 벨트가 올라가 있는 request에 필요한 기능을 더하거나, 문제가 발견된 불량품을 밖으로 걷어내는 역할을
  한다. 미들웨어는 express의 가장 큰 장점이다.

### 자주 사용하는 미들웨어

미들웨어를 사용하는 상황

- 모든 요청에 대해 URL이나 메소드를 확인할 떄
- POST 요청 등에 포함된 body(payload)를 구조화할 때(쉽게 얻어내고자 할 때)
- 모든 요청/응답에 CORS 헤더를 붙여야 할 때
- 요청 헤더에 사용자 인증 정보가 담겨있는 지 확인할 때

* 미들웨어를 이용하면 node.js만으로 구현한 서버에는 다소 번거로울 수 있는 작업을 보다 쉽게 적용가능
* 1,4번은 직접 만들어볼 예정, Express로 구현한 서버에서 흔하게 사용하는 미들웨어인
  2,3번의 경우를 살펴보자.

### case2: POST 요청 등에 포함된 body(payload)를 구조화 할 때

순수 node.js로 HTTP body(payload)를 받을 때에는 Buffer를 조합해서 다소 복잡한 방식으로 body를 얻을 수 있다.

```
let body = [];
request.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
  // body 변수에는 문자열 형태로 payload가 담겨져 있습니다.
});
//네트워크상의 chunk를 합치고, buffer를 body로 변환하는 작업이 필요
```

https://github.com/expressjs/body-parser (body-parser 미들웨어)를 이용하면 이 과정을 간단하게 처리할 수 있다.

```
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// 생략
app.post('/api/users', jsonParser, function (req, res) {
  // req.body에는 JSON의 형태로 payload가 담겨져 있습니다.
})
// bodyParser를 이용해 요청받은 데이터를 json형태로 변환한다.
```

## case3: 모든 요청/ 응답에 CORS 헤더를 붙일 때

순수 node.js 코드에 CORS 헤더를 붙이려면, 응답 객체의 writeHead 메소드 등을 이용한다. 이런 메소드를 이용하더라도, `Access-Control-Allow-*` 를 매번 재정의 할 뿐만 아니라, `OPTIONS` 메소드에 대한 라우팅도 따로 구현해야한다.

```
const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};

// 생략
if (req.method === 'OPTIONS') {
  res.writeHead(201, defaultCorsHeader);
  res.end()
}

순수 node.js에 CORS 를 적용하는 코드
```

- 하지만 cors 미들웨어를 사용하면 이 과정을 간단하게 처리할 수 있다.

```
const cors = require('cors')

// 생략

app.use(cors()) // 모든 요청에 대해 CORS 허용

// cors 모듈을 이용해 CORS를 간단하게 처리할 수 있다.
```

- 특정요청에만 cors 모듈을 적용할 수도 있다.

```
const cors = require('cors')

// 생략
// 특정 요청에 대해 CORS 허용
app.get('/product/:id', cors(), function(req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})
```

### Understanding principle of middleWare operation

- 컴퓨터는 프로그램을 직접 만들고, 작동시키면서 확인해야 작동 원리를 이해하기 좋다.
  case1,4 에 해당하는 미들 웨어를 직접 구현하면서 작동원리를 이해한다.
  더 깊은 애용을 확인하고 싶다면 https://expressjs.com/ko/guide/writing-middleware.html 공식문서 참조

### case 1: 모든 요청에 대해 url이나 메소드를 확인할 때

- 미들웨어는 말 그대로 프로세스 중간에 관여해서 특정 역할을 수행한다. 가장 단순한 미들웨어 로거(Logger)로 예를 들면 로거는 디버깅이나, 서버 관리에 도움이 되기 위해 console.log로 적절한 데이터나 정보를 출력한다. 데이터가 여러 미들웨어를 거치는 동안 (next()인가?) 응답할 결과를 만들어야 한다면, 미들웨어 사이사이에 로거를 삽입하여 현재 데이터를 확인하거나, 디버깅에 사용할 수 있다. 이런 미들웨어는 일반적으로 다음 코드와 같은 구조를 가진다.

```
const express = require('express')
const app = express();

app.get('/', function(req, res, next) {
	next();
})

app.listen(3000);
```

### 공식 문서에서 확인할 수 있는 미들웨어의 구성

- `get`
  - 미들웨어 함수가 적용되는 HTTP method
- `'/'`
  - 미들웨어 함수가 적용되는 경로(Route)
- `function()`
  - 미들웨어 함수
- `function안에 있는 (req, res, next)`중에서 `req`
  - 미들웨어 함수에 대한 HTTP 요청 인수(일반적으로 req)
- `function안에 있는 (req, res, next)`중에서 `res`
  - 미들웨어 함수에 대한 HTTP 응답 인수(일반적으로 res)
- `function안에 있는 (req, res, next)`중에서 `next`
  - 미들웨어 함수에 대한 콜백 인수(일반적으로 next)

> 위 코드는 endpoint가 `/`면서, 클라이언트로부터 `GET`요청을 받았을 때 적용되는 미들웨어다.
> parameter순서에 유의해야한다. `req, res`는 `요청request`, `응답response`이고, `next`는 다음 미들웨어를 실행한다. 코드에서는 미들웨어 내부에서는 아무런 작업을 하고 있지 않다. 그저 `next()` 함수를 호출하여 다음 미들웨어로 데이터를 전달하고 있다.

- 만약 특정 endpoint가 아니라 모든 요청에 동일한 미들웨어를 적용하려면?
  - 메소드 `app.use`를 사용한다.
    - `app.use` method로 모든 요청에 대하여 미들웨어를 적용하는 코드

```
const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
  console.log('LOGGED'); // 이 부분을 req, res 객체를 이용해 고치면, 여러분들은 모든 요청에 대한 로그를 찍을 수 있다. 아래에 작성하겠다.
  console.log(`http request method is ${req.method}, url is ${req.url} `);
  next();
};

app.use(myLogger);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);
```

- 그러면 vscode terminal에 예를 들어 `http request method is GET, url is /` 이렇게 나온다.

### case 4: 요청 헤더에 사용자 인증 정보가 담겨있는지 확인 할 때(심화)

- HTTP 요청에서 토큰이 있는지 여부를 판단하여, 이미 로그인한 사용자일 경우 성공, 아니면 에러를 보내는 미들웨어다.

```
app.use((req, res, next) => {
	// 토큰 있는가? 없음 reject
    if(req.headers.token){
    	req.isLoggedIn = true;
        next()
    } else {
    	res.status(400).send('invalid user')
    }
 })
```

- 로그인 없이 웹 사이트에 접근을 시도했을 때, 로그인 창 등으로 되돌려 보내는 경우를 경험해봤듯이, 서버에서는 요청에 포함된 데이터를 통해 미들웨어가 요구하는 조건에 맞지 않으면 거부할 수 있도록 구현할 수 있다.

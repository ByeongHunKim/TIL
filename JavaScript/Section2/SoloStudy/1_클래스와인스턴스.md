# 꼭 알아야 하는 개념들

- 객체, 키, 값에 대하여..
  - 속성(property)은 키-값 쌍을 의미
- 객체에서 속성 추가/수정/삭제하는 방법
  - 속성 추가는 push(앞에),unshift(뒤에)가 있는 것 같다.
  - 수정은 dot or bracket notation으로 객체 값에 접근해서 값을 수정하는 것 같다.
  - 삭제는 pop(뒤에),shift(앞에)값을 삭제한다.
    - 근데 문제에서 또는 스프린트에서 삭제를 구현하라고 했는데, 결과적으로는 고차함수 filter를 사용했던 걸로 기억한다.

* 클로저에 대한 개념
  - 외부함수에 접근할 수 있는 내부함수라고 기억한다.

# 짚고 넘어 가야 할 개념들

- 클래스와 인스턴스라는 용어
  - `new` 키워드의 사용법
  - `class` 키워드의 사용법

* OOP의 특징 네 가지
  - 캡슐화
    -
  - 상속
    -
  - 추상화
    -
  - 다형성
    -
* Prototype에 대하여..
  - 모델의 청사진을 만들 때 쓰는 원형 객체이다.
  - MDN 메소드 설명에 prototype이라고 붙어있는 이유는?
  - push같은 구현이 (모든 메소드들이) 클래스의 원형 객체에 정의되어 있기 때문이다.
    - constructor
      - 인스턴스가 초기화될 때 실행하는 생성자 함수
    - this
      - 함수가 실행될 때, 해당 스코프마다 생성되는 고유한 실행 context. `new` 키워드로 인스턴스를 생성했을 때에는, 해당 인스턴스가 바로 this의 값이 된다.

- OOP의 상속의 개념을 이해하고 코드로 쓸 수 있는가?
  - 상속 관계를 가진 현실의 모델을 코드로 작성할 수 있는가?
    -
  - Class 상속의 원리
    -
  - Prototype chain에 대하여...(`__proto__`)
    -

# 객체 지향 프로그래밍 (OOP, Object-oriented programming)

- 하나의 모델이 되는 청사진을 만들고, 그 청사진`(Class)`을 바탕으로 한 인스턴스 객체`(instance object)`를 만드는 프로그래밍 패턴이다.
  - 객체를 만들 때 일반적인 함수를 정의하듯 만들지만, 조금 다르다.
    - 새로운 인스턴스 객체를 만드는 `new` 키워드를 사용한다.
      - `new` 키워드를 통해 클래스의 인스턴스를 만들어 낼 수 있다.
      - 즉시 생성자 함수가 실행되며, 변수에 클래스의 설계를 닮은 인스턴스가 할당된다.
      - 이로 인해 각각의 인스턴스들은 Class의 고유한 속성,메소드를 갖는다.
        - Class와 속성과 메소드를 정의 할때 자동차의 속성은 브랜드, 차 이름, 색상등이고 메소드는 연료주입, 운전, 속력설정등이다. 이렇게 객체 지향 프로그래밍은 현실 세계를 기반으로 프로그래밍 모델을 만들 때 유용하다.
          - 이때 this라는 키워드가 등장하는데, 인스턴스 객체를 의미한다. parameter로 받은 브랜드, 이름, 색상등은 인스턴스 생성시 지정하는 값이고, this에 할당한다는 것은 만들어진 인스턴스에 값을 부여하겠다는 의미다.

```js
class Car {
  constructor(brand, name, color) {
    this.brand = brand;
    this.name = name;
    this.color = color;
  }
}

// 아래는 메소드의 정의이다.
class Car {
  constructor(brand, name, color) {
    /* 생략함 */
  }

  drive() {}

  refuel() {}
}
```

- 위의 코드처럼, 생성자 함수와 함께 class 키워드 안 쪽에 묶어서 정의한다.

* `Class` 는 일반명사, 대문자로 시작하게 만든다

- 일반적인 함수를 만들 때는 적절한 동사, 소문자로 시작하게 만든다.
- 생성자 함수 (contructor)
  - return 값을 만들지 않는다.

```js
class Hat {
  constructor(brand, name, color) {
    // instance가 만들어질 때 실행되는 코드
  }
}
```

- 절차 지향 프로그래밍와 다른 점은 데이터와 기능을 한 곳에 묶어서 처리한다는 것이다.
- 속성과 메소드가 하나의 `객체` 라는 개념에 포함된다.
  - 이는 JavaScript 내장 타입인 `object` 와는 다르게 클래스`(Class)`라고 불린다.
- 다른 언어와 다르게 JS에서 OOP를 구현하는 방법은 좀 독특하다.

## 메소드 호출

- `object.method()`
  - 객체 내에 메소드를 호출하는 방법을 의미한다.

* 메소드 호출 방식을 사용할 때는 화살표 함수를 쓰지 않는다.
  - 이유는?
    -

```js
let counter1 = {
  value: 0,
  increase: function () {
    this.value++; // 메소드 호출 시, this는 counter1 의미
  },
  decrease: function () {
    this.value--;
  },
  getValue: function () {
    return this.value;
  },
};

counter1.increase();
counter1.increase();
counter1.decrease();
counter1.getValue(); // 1
```

## 클로저를 이용해 매번 새로운 객체 생성

- SingleTon 패턴은 단 하나의 객체만 만들 수 있다.
- 똑같은 기능을 하는 카운터를 여러 개 만드려면, 직접 여러번 생성해서 재사용성을 떨어뜨리지 말고 클로저 모듈 패턴을 사용하면 된다.

```js
function makeCounter() {
  return {
    value: 0,
    increase: function () {
      this.value++; // 메소드 호출 시 , this는 makCounter function이 리턴하는 익명의 함수이다.
    },
    decrease: function () {
      this.value--;
    },
    getValue: function () {
      return this.value;
    },
  };
}

let counter1 = makeCounter();
counter1.increase();
counter1.decrease();
counter.getValue(); // 0

let counter2 = makeCounter();
counter2.decrease();
counter2.decrease();
counter2.increase();
counter2.getValue(); // -1
```

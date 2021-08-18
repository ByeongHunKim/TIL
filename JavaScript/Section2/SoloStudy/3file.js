class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`${this.name}은 잠에 들었다`);
  }
}

let kimbyeonghun = new Human('김병훈', 25);

console.log(Human.prototype.constructor === Human);
console.log(Human.prototype === kimbyeonghun__proto__);
console.log(Human.prototype.sleep === kimbyeonghun.sleep);

// 아래부터는 4_프로토타입에 대한 코드
let kimbyeonghun = new Human('김병훈', 25);

// 속성

kimbyeonghun.age;
kimbyeonghun.gender;

// 메소드

kimbyeonghun.eat();
kimbyeonghun.sleep();

let steve = new Student('스티브', 20);

// 속성

steve.grade;

// 메소드

steve.learn();

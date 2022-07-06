// function logMessage(value: any) {
//     console.log(value);
// }
//
// logMessage('hello');
// logMessage(10);
// logMessage(true);

// Union Type
let student: string | number | boolean;


// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 과정
function logMessage(value: string | number) {
    if (typeof value === "number") {
        value.toLocaleString();
    }
    if (typeof value === "string") {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(10);


// 주의할 점
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone1(someone: Developer | Person) {
    someone.name; // 공통된 속성만 접근할 수 있음
    // someone.age
    // someone.skill
}

askSomeone1({name: '디벨로퍼', skill: '웹개발'});
askSomeone1({name: '디벨로퍼', age: 20});


// Intersection Type
let person: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
    someone.name;
    someone.age;
    someone.skill;
}

// askSomeone2({name: '디벨로퍼', skill: '웹개발'});
// askSomeone2({name: '디벨로퍼', age: 20});
askSomeone2({name: '디벨로퍼', skill: '웹개발', age: 20});

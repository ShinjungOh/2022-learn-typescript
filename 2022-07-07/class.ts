// ES5 - 생성자 함수
function Person1(name, age) {
    this.name = name;
    this.age = age;
}

let capt = new Person1('캡틴', 100);


// ES6 (ES2015) - 클래스
class Person2 {
    public name: string;  // TS 클래스 - 기존 JS 문법과의 차이
    private age: number;  // 변수의 접근 범위 제한
    readonly log: string; // 읽기 전

    constructor(name: string, age: number) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

let sj = new Person2('SJ', 20); // 생성 되었습니다
console.log(sj);


// JS 프로토타입
let user = {
    name: 'capt',
    age: 100
}

let admin = {};
// admin.__proto__ = user;
// admin.name
// admin.age
// admin.role = 'admin'


// 리액트 예전 문법 - 클래스 기반 코드
// class App extends React.Component {
//
// }


// 리액트 최신 문법 - 훅 기반 함수형 코드
// function App() {
//     return <div>Hello</div>
// }
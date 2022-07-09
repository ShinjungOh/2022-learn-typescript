// function logText(text) {
//     console.log(text);
//     return text;
// }
//
// logText(10);  // number
// logText('hello');  // string
// logText(true);  // boolean


// 제네릭 기본 문법
// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
//
// logText<string>('hello');
// logText<number>(10);


// 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점
// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }
//
// function logNum(num: number) {
//     console.log(num);
//     return num;
// }
//
// logText('hi');
// logText(10);
// const num = logNum(10);
// logText(true);


// 기존 문법과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식의 문제점
// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }
//
// const a = logText('hi');
// // a.split('');
// logText(10);


// 제네릭의 장점과 타입 추론에서의 이점
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('hi');
str.split('');
const login = logText<boolean>(true);


// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }
//
// const obj: Dropdown = {value: 'hi', selected: false};

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<string> = {value: 'hi', selected: false};


// 제네릭 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(text => {
        console.log(text);
    })
    return text;
}

logTextLength<string>(['hi', 'abc']);


// 제네릭 타입 제한 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength1<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

logTextLength1('a');
logTextLength1({length: 10});
// logTextLength1(10);


// 제네릭 타입 제한 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption('hi');
getShoppingItemOption('name');
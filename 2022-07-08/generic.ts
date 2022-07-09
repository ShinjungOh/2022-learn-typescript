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
function logText(text: string | number) {
    console.log(text);
    return text;
}

const a = logText('hi');
// a.split('')
logText(10);
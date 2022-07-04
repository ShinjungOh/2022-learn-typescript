// JS 문자열 선언
// let str = 'hello';

// TS 문자열
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let animals: Array<string> = ['cat', 'dog', 'fox'];
let arr: Array<number> = [1, 2, 3];
let items: number[] = [1, 2, 3];

// TS 튜플 - 인덱스에 타입이 정의된 배열
let address: [string, number] = ['seoul', 10];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'SJ',
//     age: 10
// }
let person: { name: string, age: number } = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;
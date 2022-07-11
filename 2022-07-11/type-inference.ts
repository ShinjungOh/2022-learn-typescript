// 타입 추론 기본
let a = '10';

function getB(b = 10) {
    let c = 'hi';  // string
    return b + c;  // string
}

10 + '10' // string


// 인터페이스와 제네릭을 이용한 타입 추론 방식
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
//
// let shoppingItem: Dropdown<string> = {
//     value: 'hi',
//     title: 'hello'
// }


// 복잡한 구조에서의 타입 추론 방식
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

let detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'hi',
    value: 'a',
    tag: 'b'
}


// Best Common Type 추론 방식
let arr = [1, 2, true, 'a'];  // string | number | boolean[]
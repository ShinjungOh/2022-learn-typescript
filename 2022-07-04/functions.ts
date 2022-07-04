// 자바스크립트 함수 선언
// function sum1(a, b) {
//     return a + b;
// }

// TS 함수 선언 - 함수의 매개 변수(파라미터)
function sum(a: number, b: number) {
    return a + b;
}

sum(10, 20);


// TS 함수 선언 - 함수의 반환 타입
function add(): number {
    return 10;
}


// TS 함수 타입 정의
function plus(a: number, b: number): number {
    return a + b;
}

// plus(10, 20, 30, 40);  // 오류 - 파라미터를 제한하는 특성


// 함수 옵셔널 파라미터(optional parameter) - 특정 인자를 선택적으로 사용할 때
function log(a: string, b?: string) {

}

log('hello');
log('hello', 'abc');

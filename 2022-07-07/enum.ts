// 숫자형 이넘
enum Shoes {
    Nike,
    Adidas
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0  별도의 값을 지정하지 않으면 숫자형 이넘으로 취급


// 문자형 이넘
enum clothes {
    Nike = '나이키',
    Adidas = '아디다스'
}

let myClothes = clothes.Nike;
console.log(myClothes); // 나이키


// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer === Answer.No) {
        console.log('오답입니다');
    }
}

askQuestion(Answer.Yes);
// askQuestion('yes');
// askQuestion('Yes');
// askQuestion('y');
// askQuestion('예스');


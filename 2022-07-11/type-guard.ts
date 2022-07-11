interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {name: 'SJ', age: 20, skill: 'ts'}
}

let sj = introduce();
// console.log(sj.skill);


// 타입 단언만을 사용했을 때의 문제점
if ((sj as Developer).skill) {
    let skill = (sj as Developer).skill;
    console.log(skill);
} else if ((sj as Person).age) {
    let age = (sj as Person).age;
    console.log(age);
}


// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer{
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(sj)) {
    console.log(sj.skill);
} else {
    console.log(sj.age);
}
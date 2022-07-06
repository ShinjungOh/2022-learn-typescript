// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

let student: Person = {
    name: 'sj',
    age: 20
}

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: string, title: string, done: boolean }
function getTodo(todo: Todo) {

}
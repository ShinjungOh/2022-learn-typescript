// 동기 - 타입 추론 o
function fetchItems1() {
    let items = ['a', 'b', 'c'];
    return items;
}

let result = fetchItems1();
console.log(result);

// 비동기 - 타입 추론 x
function fetchItems(): Promise<string[]> {
    let items: string[] = ['a', 'b', 'c'];
    return new Promise(function (resolve) {
        resolve(items);
    });
}

fetchItems();

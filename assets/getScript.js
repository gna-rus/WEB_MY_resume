async function start(){
    // создаем переменную с url
    let url = 'https://jsonplaceholder.typicode.com/users';
    let response = await fetch(url);
    // сохраняем ответ с сервера в формате json
    let users = await response.json();
    console.log(users);
}
start();
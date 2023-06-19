async function start(){
    // создаем переменную с url
    let url = 'https://jsonplaceholder.typicode.com/users';
    let response = await fetch(url);
    // сохраняем ответ с сервера в формате json
    let users = await response.json();
    // создаю пустую еременную
    let html1 = '';
    // перебор массива
    users.forEach(elemnt => {
    let html1Segment = `<h2>${elemnt.name}</h2>`
    html1 += html1Segment});
    console.log(users);

    // получаем нужную секцию и загружаю ее в поле на сайте
    let section = document.getElementById("allUsers");
    section.innerHTML = html1; // передаю накопленную строку в секцию
}
start();
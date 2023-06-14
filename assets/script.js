        // счетчик для переключений цветов
        let count = 0
        function OpenSide(){
            alert("Резюме Григорьев Николая Александровича");
        }

        function Hello_Client(name)
        {
            alert(`Привет, ${name}`);
        }

        function registration()
        {
         let num = parseInt(prompt("Введите возраст"));
        if (num >= 18){
            alert("Можно пройти");}
        else{
            alert("Нельзя пройти");}
        let qwe = (num > 21) ? "более 21": "не более 21";
        alert(qwe);
        }
        // функция для управления кнопкой

        function click_of_btn1(){
        //alert("CLICK!");
// получаем первый элемент
        let box1 = document.getElementsByClassName("box");

        // console.log(box1[0]);
        // переключение цвета
        if (count == 0){
        count += 1
        element.classList.add("activBox");
        }
        else {
        count = 0
        element.classList.remove("activBox");
        }
        }



        let one_tree = parseInt(prompt("Это меню для тестов функций. Введите число от 0 до 2"));
        switch (one_tree){
        case 0:
            OpenSide()
            break;

        case 1:
            let lts = prompt("Как вас зовут?");
            let bool_qw = confirm("Вы не обманываете?");
            if (bool_qw == true) {
                Hello_Client(lts);
            }
            break;

        case 2:
            registration();
            break;
        default:
            alert("Тебе русским языком сказали что вводить от 0 до 2");
            }

// присвоить по id (document - массив всех элементов страницы)
let element = document.getElementById('el1');
//console.log(element);
// добавить класс
element.classList.add("activ");
// удалить класс
element.classList.remove("activ");

// создаю кнопку и механизм "слушетеля кнопки". ("действие", функция)
let btn1 = document.getElementById('btn1');
//console.log(btn1);
btn1.addEventListener("click", click_of_btn1)
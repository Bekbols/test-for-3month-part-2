// 1) Напишите функцию для извлечения чисел - это функция которая
// принимает строку и возвращает массив всех чисел в строке

const extractNumbers = (str) => {
    let matches = str.match(/\d+/g);
    if (matches === 0) {
        return [];
    }

    return matches.map(Number);
}

console.log(extractNumbers("a1fg5hj6") )


// 2) Напишите функцию рекурсию которая будет выводить в консоль
// числа фибоначчи с задержкой в одну секунду (ограничение число 144)


const fibonacciNumber = (a = 0, b = 1) => {
    console.log(a)
    if (b > 144) {
        return
    }
    setTimeout(() => fibonacciNumber(b, a + b), 1000);
}

fibonacciNumber()


// 3) Сделать запрос на API используя async await и try catch
// Делайте запроса на этот API => https://fakestoreapi.com/products
// Из полученных данных возьмите ключ title у каждого объекта и выведите их в консоль


const request = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        data.forEach(product => {
            console.log(product.title);
        })
    }catch (e) {
        console.log(e)
    }
}

request()


// 4) Создайте 5 кнопок внутри которого будут названия цветов на английском


const btn = document.querySelector('div')

btn.onclick = (event) =>  {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent
    }
}


// 5) Создайте кнопку которая будет отображать блок либо скрывать его
// Надо сделать блок просто квадратным, а рядом кнопка , если нажать на
// неё то блок скроется, если снова нажать на ту же кнопку то блок снова покажется

const knopka = document.querySelector('#toggle-button')

    knopka.onclick = () => {
    const square = document.querySelector('#square');
    if (square.style.display === 'none') {
        square.style.display = 'block';
    } else {
        square.style.display = 'none';
    }
}


// 6) Отобразите на странице цифру ноль и начните его увеличивать
// на +1 каждую мили-секунду  - остановите отсчёт когда счётчик дойдёт до 100


let counter = 0;
const counterElement = document.querySelector('#counter');

const interval = setInterval(() => {
    counter++
    counterElement.innerHTML = counter;

    if (counter >= 100) {
        clearInterval(interval);
    }
}, 1);

// 7) Создайте кнопку при нажатии на которую будет отправляться GET запрос на JSON
// и полученные данные от туда выводите в консоль (JSON создавайте на своё усмотрение) используйте async await


const button = document.querySelector('.get')

button.onclick = async () => {
    try {
        const response = await fetch('names.json');
        const data = await response.json();
        data.forEach(person => {
            console.log(`${person.name} ${person.age}`);
        })
    } catch (e) {
        console.log(e)
    }
}



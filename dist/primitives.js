"use strict";
//примитивные типы ts выводит сам и определять их тип необязательно но если по ходу предпологается изменение значения переменной то лучше определить. Тип определяет набор значнеий которые может принимать прерменная и набор операций над конкретным типом данных
//numbers
let x = 5;
//string
let string = 'hello svyat';
//boolean
let bool = true;
//nothing
let und = undefined;
let noth = null;
//literal
//при определении константы в нее хардкодиться значнение а не тип значения. и оно не может менятся вообще
const num = 100;
//universal
//будет чем угодно тип крайнего случая.  к нему можно применить любой метод и это в процессе может вызвать ошибку
let any = 5;
any = 'any';
//unknown
//а тут метод применить не получиться и что бы это сделать нужно сделать проверку типа перед применением метода
let unk = 2;

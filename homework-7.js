

let viserTemperature = (city,temp) => {
  console.log(`Сейчас в г.${city} температура - ${temp} градусов по Цельсию`);
};
viserTemperature('Сочи',35);



const LIGHT_SPEED = 299792458;
let checkSpeed = (speed) =>{
  if(speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if(speed === LIGHT_SPEED) {
    console.log("Скорость света");
  } else {
    console.log("Субсветовая скорость");
  };
};
checkSpeed(299792458);



let productName = "Ноутбук";
let productPrice = 35000;

let buyProduct = (budget) => {
  if(budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else{
    let difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}руб. Пополните баланс`);
  };
};
buyProduct (30000);
buyProduct (40000);



function sayHi() {
  console.log('Салам Алейкум');
};
sayHi();



const PI = 3.14;
let myAge = 37;
var myHomeland = 'Дагестан';
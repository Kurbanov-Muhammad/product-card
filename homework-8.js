const user = {
  name: "Магомед",
  surname: "Курбанов",
  age: 36,
  country: "Россия",
  city: "Хасавюрт",
  email: "rvdhb@mail.ru",
  work: "Ремонт бытовой техники",
  position: "Мастер"
};



const car = {
  brand: "Volkswagen",
  model: "Touran",
  year: 2008,
  color: "blue",
  transmission: "DSG"
};

car.owner = user;



function ensureMaxSpeed() {
  if (!Object.hasOwn(car, 'maxSpeed')){
    car.maxSpeed = 180;
  }
}
ensureMaxSpeed();



function showPropertyvalue (obj, propertyName) {
  console.log(obj[propertyName]);
}
showPropertyvalue(car, "brand");



const products = [ "яблоки", "бананы", "помидоры", "огурцы", "яйцо"];


const books = [
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "blue",
    genre: "Мистика"
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "gray",
    genre: "Антиутопия"
  },
  {
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    coverColor: "black",
    genre: "Фэнтези"
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "brown",
    genre: "Классика"
  }
];
books.push({
  title: "Дети капитана Гранта",
  author: "Жюль Верн",
  year: 1868,
  coverColor: "blue",
  genre: "Приключения"
});



const harryPotterBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "red",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "green",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Дж. К. Роулинг",
    year: 1999,
    coverColor: "purple",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и Кубок огня",
    author: "Дж. К. Роулинг",
    year: 2000,
    coverColor: "blue",
    genre: "Фэнтези"
  }
];

const library = [...books, ...harryPotterBooks];



function addProperty(object) {
  if (object.year>1989) {
    object.isRare = true;
  } else {
    object.isRare = false;
  }
  return object;
}
const updatedBooks = library.map(addProperty);

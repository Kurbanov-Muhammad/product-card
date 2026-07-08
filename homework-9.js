import { socialComments } from './comments.js';


const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(number => number >= 5);


const products = ["диван", "кровать", "стол", "стул", "шкаф"];
const searchProduct = products.filter(product => product.includes("кровать"));


function reverseData(array) {
  array.reverse();
}

reverseData(numbers);
reverseData(products);


const coments = socialComments.filter(coment => coment.email.includes(".com"));
console.log(coments);


const updatedComments = socialComments.map(coment => {
  if (coment.id <= 5) {
    return {...coment, postId: 2 };
  } else {
    return {...coment, postId: 1 };
  }
});

const updatedComents2 = socialComments.map( coment => {
  return {
    id: coment.id,
    name: coment.name
  };
});



const checkedComments = socialComments.map( coment => {
  const checked = coment.body.length > 180;
  return {
    ...coment, 
    isInvalid: checked
  };
});



const emailsWithMap = socialComments.map( coment => {
  return coment.email;
});
console.log(emailsWithMap);

const emailsWithReduce = socialComments.reduce((acc, coment) => {
  acc.push(coment.email);
  return acc;
},[]);
console.log(emailsWithReduce);



const emails = socialComments.map(coment => coment.email);
const stringViaToString = emails.toString();
console.log(stringViaToString);
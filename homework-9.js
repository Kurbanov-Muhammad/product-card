import { socialComments } from './comments.js';


const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(number => number >= 5);


const products = ["диван", "кровать", "стол", "стул", "шкаф"];
const searchedProduct = products.filter(product => product.includes("кровать"));


function reverseData(array) {
  return array.reverse();
}

reverseData(numbers);
reverseData(products);


const comments = socialComments.filter(comment => comment.email.includes(".com"));
console.log(comments);


const updatedComments = socialComments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

const commentUserProfiles = socialComments.map(comment => ({
  id: comment.id,
  name: comment.name
}));


const validatedComments = socialComments.map(comment => ({
  ...comment, 
  isInvalid: comment.body.length > 180
}));


const emailsWithMap = socialComments.map( comment => {
  return comment.email;
});
console.log(emailsWithMap);

const emailsWithReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsWithReduce);



const emails = socialComments.map(comment => comment.email);
const stringViaToString = emails.toString();
console.log(stringViaToString);
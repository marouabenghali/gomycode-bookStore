import uuid from "uuid";
import img1 from "./images/book1.jpg";
import img2 from "./images/book2.jpg";
import img3 from "./images/book3.jpg";
import img4 from "./images/book4.jpg";
import img5 from "./images/book5.jpg";
import img6 from "./images/book6.jpg";
import img7 from "./images/book7.jpg";
import img8 from "./images/book8.jpg";
import img9 from "./images/book9.jpg";
import img10 from "./images/book10.jpg";
// shoes
const book1 = {
  id: uuid.v4(),
  img: img1,
  title: 'PAINTING & EXPERIENCE',
  type: 'Art',
  qt: 5,
  price: 450,
  rate: 1,
  label: 'Coup de coeur',
  description:'vvvvvvvvvvvvv'
};
const book2 = {
  id: uuid.v4(),
  title: "AFRICAN-AMERICAN ART",
  img: img2,
  type: 'Art',
  qt: 30,
  price: 700,
  rate: 2,
  label: 'Vient de paraitre'
};
const book3 = {
  id: uuid.v4(),
  title: "100 Experiences Scientifiques",
  img: img3,
  type: 'Science',
  qt: 1,
  price: 300,
  rate: 4,
  label: 'Vient de paraitre'
};

//hats
const book4 = {
  id: uuid.v4(),
  title: "Introduction au calcul scientifique par la pratique",
  img: img4,
  type: 'science',
  qt: 0,
  price: 40,
  rate: 3,
  label: 'En Promotion'
};
const book5 = {
  id: uuid.v4(),
  title: "The Raw Food DETOX Diet",
  img: img5,
  type: "Health",
  qt: 6,
  price: 20,
  rate: 2,
  label: 'En Promotion'
};

// watch
const book6 = {
  id: uuid.v4(),
  title: "The story of sushi",
  img: img6,
  type: 'Cooking',
  qt: 5,
  price: 300,
  rate: 5,
  label: 'En Promotion'
};
const book7 = {
  id: uuid.v4(),
  title: "Trail Food",
  img: img7,
  type: 'Cooking',
  qt: 6,
  price: 700,
  rate: 1,
  label: 'Coup de coeur'
};
const book8 = {
  id: uuid.v4(),
  title: 'The Mind & The Brain',
  img: img8,
  type: 'Medecine',
  qt: 6,
  price: 700,
  rate: 3,
  label: 'Coup de coeur'
};
const book9 = {
  id: uuid.v4(),
  title: "Eczema-Free for Life",
  img: img9,
  type: 'Medecine',
  qt: 6,
  price: 700,
  rate: 4,
  label: 'Coup de coeur'
};
const book10 = {
  id: uuid.v4(),
  title: "Le livre de mes émotions ",
  img: img10,
  type: "Kids",
  qt: 6,
  price: 700,
  rate: 5,
  label: 'Vient de paraitre'
};
export const articles = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10,];

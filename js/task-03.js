const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeGallery = ({ url, alt }) => {
  const galleryEl = document.createElement("li");
  galleryEl.classList.add("gallery__item");
  const galleryImage = document.createElement("image");
  galleryImage.classList.add("gallery__image");
  galleryImage.url = url;
  galleryImage.alt = alt;

  galleryEl.append(galleryImage);
  return galleryEl;
};

const elements = images.map(makeGallery);
console.log(elements);

const ulEl = document.querySelector(".gallery");

ulEl.insertAdjacentHTML("beforeend", elements);
console.log(ulEl);

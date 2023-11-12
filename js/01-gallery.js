import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containet = document.querySelector("ul.gallery");
containet.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
containet.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
  <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`
    )
    .join("");
}

let originalImg;
let altImg;

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  const linkOridginalImg = [...document.querySelectorAll("img.gallery__image")];
  linkOridginalImg.forEach((elem) => {
    if (elem === event.target) {
      originalImg = elem.parentNode.href;
      altImg = elem.alt;
      // console.log(previewlImg); //посилання на клікнуту картинку
      // console.log(originalImg);//посилання на велику картинку
    }
  });
  const instance = basicLightbox.create(
    `<div class="modal">
            <img src="${originalImg}" alt="${altImg}"/>
        </div>
            `
  );
  instance.show();

  function closeModal(event) {
    if (event.code === "Escape" || event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModal);
    }
    console.log(event.code);
  }
  document.addEventListener("keydown", closeModal);
}
console.log(galleryItems);

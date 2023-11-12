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

function handleClick(event) {
  event.preventDefault();
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);

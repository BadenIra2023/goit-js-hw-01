import { galleryItems } from './gallery-items.js';
// Change code below this line

const addImagesEl = document.querySelector(".gallery");

const imgItems = galleryItems
  .map(
    ({ preview, original, description}) =>
    `<li class="gallery__item">
     <a class="gallery__link" href="${preview}"data-lightbox="lbox"´>
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

addImagesEl.insertAdjacentHTML("beforeend", imgItems);
console.log(galleryItems);

addImagesEl.addEventListener("click", handleClick);

function handleClick(event)
{
  event.preventDefault();
  if (event.target.classList.value !== "gallery__image") {
    return;
  }
  basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show();
};


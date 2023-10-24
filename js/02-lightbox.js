import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulGallery = document.querySelector(".gallery");

var liList = [],
  modalLightBox;

galleryItems.forEach((item) => {
  const newLiItem = document.createElement("li");
  newLiItem.classList.add("gallery__item");

  const newAnchor = document.createElement("a");
  newAnchor.classList.add("gallery__link");
  newAnchor.href = item.original;

  const newImg = document.createElement("img");
  newImg.classList.add("gallery__image");
  newImg.src = item.preview;
  newImg.alt = item.description;

  newAnchor.append(newImg);
  newLiItem.append(newAnchor);
  liList.push(newLiItem);
});

ulGallery.append(...liList);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

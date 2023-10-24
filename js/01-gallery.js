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
  newImg.dataset.source = item.original;
  newImg.alt = item.description;

  newAnchor.append(newImg);
  newLiItem.append(newAnchor);
  liList.push(newLiItem);
});

ulGallery.append(...liList);

const ulClickHandler = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  basicLightbox
    .create(
      `<img width="1400" height="900" src=${event.target.dataset.source}>`
    )
    .show();
  modalLightBox = document.getElementsByClassName("basicLightbox")[0];
};

ulGallery.addEventListener("click", ulClickHandler);

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && event.target.nodeName == "A") {
    modalLightBox.classList.remove("basicLightbox--visible");
    setTimeout(() => {
      modalLightBox.remove();
    }, 410);
  }
});

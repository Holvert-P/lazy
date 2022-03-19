import { registerImage } from "./lazyLoad.js";

const $template = document.querySelector("template").content,
  $cards = document.getElementById("cards"),
  $fragment = document.createDocumentFragment();

let url = "https://placeimg.com/400/400/any";
let limit = 4;

const addCard = () => {
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
  const $image = $fragment.querySelector("article > img");
  $image.dataset.src = url;
  $image.alt = "Any";
  $fragment
    .querySelector("article")
    .replaceChild($image, $fragment.querySelector("img"));

  $cards.appendChild($fragment);
  registerImage($image);
};

document.addEventListener("scroll", () => {
  if (window.scrollY + 636 > document.body.scrollHeight) {
    for (let i = 0; i < limit; i++) {
      addCard();
    }
  }
});

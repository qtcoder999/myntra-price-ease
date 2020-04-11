// ==UserScript==
// @name         Myntra Price Ease
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Paras Anand
// @match        https://www.myntra.com/men-casual-shirts?p=2&sort=popularity
// @grant        none
// ==/UserScript==

(function() {
  "use strict";

  const main = () => {
    console.clear();

    let arr = [];

    let discountedHTMLElements = document.querySelectorAll(
      ".product-discountedPrice"
    );

    let priceYouWant = 500;

    for (let discountedElement of discountedHTMLElements) {
      const discoutedPrice = discountedElement.innerText;

      const discountedPriceNumber = parseInt(
        discoutedPrice && discoutedPrice !== "undefined"
          ? discoutedPrice.replace("Rs. ", "")
          : null
      );

      if (
        discountedPriceNumber < priceYouWant &&
        discountedPriceNumber !== null
      ) {
        //   console.log(discountedPriceNumber);
        arr.push(discountedPriceNumber);
      }
    }

    arr.sort();
    console.log(arr);
  };

  const cbox = document.querySelectorAll(".pagination-number");

  for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("click", main);
  }

  setTimeout(main, 2000);
})();

let rangeMin = 1;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");
const afterFilter = document.getElementsByClassName("afterFilter");
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;
      } else {
        rangeInput[1].value = minRange + rangeMin;
      }
    } else {
      rangePrice[0].value = minRange;
      rangePrice[1].value = maxRange;
      range.style.left =
        ((minRange > 10 ? (minRange = minRange - 10) : "minPrice") / 30) * 100 +
        "%";
      range.style.right =
        100 -
        ((maxRange > 10 ? (maxRange = maxRange - 10) : "minPrice") / 30) * 100 +
        "%";
      if (rangeInput[0].value == 0) {
        selectFilter.innerText = `Up to £${rangeInput[1].value}.00`;
      } else if (rangeInput[1].value == 40) {
        selectFilter.innerText = `from £${rangeInput[0].value}.00`;
      } else {
        selectFilter.innerText = `Between £${rangeInput[0].value}.00 and £${rangeInput[1].value}.00`;
      }
    }
  });
  input.addEventListener("input", () => {
    filterItem(rangePrice[0].value, rangePrice[1].value);
    afterFilter[0].classList.remove("hide");
  });
});
let selectFilter = document.getElementById("selectFilter");
rangePrice.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = rangePrice[0].value;
    let maxPrice = rangePrice[1].value;
    if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "min") {
        rangeInput[0].value = minPrice;
        range.style.left =
          ((minPrice > 10 ? (minPrice = minPrice - 10) : "minPrice") / 30) *
            100 +
          "%";
        rangePrice[1].value == 40 || rangePrice[0].value == 10
          ? (selectFilter.innerText = `from £${rangeInput[0].value}.00`)
          : (selectFilter.innerText = `Between £${rangeInput[0].value}.00 and £${rangeInput[1].value}.00`);
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right =
          100 -
          ((maxPrice > 10 ? (maxPrice = maxPrice - 10) : "minPrice") / 30) *
            100 +
          "%";
        rangePrice[1].value == 40 || rangePrice[0].value == 10
          ? (selectFilter.innerText = `Up to £${rangeInput[1].value}.00`)
          : (selectFilter.innerText = `Between £${rangeInput[0].value}.00 and £${rangeInput[1].value}.00`);
      }
    }
  });
  input.addEventListener("input", () => {
    filterItem(rangeInput[0].value, rangeInput[1].value);
    afterFilter[0].classList.remove("hide");
  });
});
function filterItem(min, max) {
  let q = 0;
  item.forEach((e, i) => {
    e.price = parseInt(e.price);
    if (max >= e.price && min <= e.price) {
      q++;
      itemlistli[i].style.display = "";
      i > 8 ? itemlistli[i].classList.remove("hide") : "";
    } else {
      i > 8 ? itemlistli[i].classList.remove("hide") : "";
      itemlistli[i].style.display = "none";
    }
    q > 0
      ? (s_result.innerText = `Showing all ${q} results`)
      : (s_result.innerText = `no results found`);
  });
}
window.onload = () => {
  rangeInput[0].value = 10;
  rangeInput[1].value = 40;
  rangePrice[0].value = 10;
  rangePrice[1].value = 40;
  range.style.left = 0;
  range.style.right = 0;
};
clear.onclick = () => {
  selectFilter.innerText = "";
  afterFilter[0].classList.add("hide");
};

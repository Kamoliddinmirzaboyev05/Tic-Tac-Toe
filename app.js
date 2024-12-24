const cell1 = document.querySelector("#cell1");
const cell2 = document.querySelector("#cell2");
const cell3 = document.querySelector("#cell3");
const cell4 = document.querySelector("#cell4");
const cell5 = document.querySelector("#cell5");
const cell6 = document.querySelector("#cell6");
const cell7 = document.querySelector("#cell7");
const cell8 = document.querySelector("#cell8");
const cell9 = document.querySelector("#cell9");
const xmark1 = document.querySelector(".xmark1");
const xmark2 = document.querySelector(".xmark2");
const xmark3 = document.querySelector(".xmark3");
const xmark4 = document.querySelector(".xmark4");
const xmark5 = document.querySelector(".xmark5");
const xmark6 = document.querySelector(".xmark6");
const xmark7 = document.querySelector(".xmark7");
const xmark8 = document.querySelector(".xmark8");
const xmark9 = document.querySelector(".xmark9");

const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");
const circle5 = document.querySelector(".circle5");
const circle6 = document.querySelector(".circle6");
const circle7 = document.querySelector(".circle7");
const circle8 = document.querySelector(".circle8");
const circle9 = document.querySelector(".circle9");

const modalBack = document.querySelector(".modal-back"),
modal = document.querySelector(".modal");
let bosildi = 0,
  x1Bosildi = 0,
  x2Bosildi = 0,
  x3Bosildi = 0,
  x4Bosildi = 0,
  x5Bosildi = 0,
  x6Bosildi = 0,
  x7Bosildi = 0,
  x8Bosildi = 0,
  x9Bosildi = 0,
  o1Bosild = 0,
  o2Bosild = 0,
  o3Bosild = 0,
  o4Bosild = 0,
  o5Bosild = 0,
  o6Bosild = 0,
  o7Bosild = 0,
  o8Bosild = 0,
  o9Bosild = 0;

cell1.addEventListener("click", () => {
  if (bosildi == 0 && x1Bosildi == 0 && o1Bosild == 0) {
    xmark1.style.display = "block";
    bosildi = 1;
    x1Bosildi = 1;
  } else if (bosildi == 1 && x1Bosildi == 0 && o1Bosild == 0) {
    circle1.style.display = "block";
    bosildi = 0;
    o1Bosild = 1;
  }
  if (
    (x1Bosildi == 1 && x5Bosildi == 1 && x9Bosildi == 1) ||
    (x1Bosildi == 1 && x2Bosildi == 1 && x3Bosildi == 1) ||
    (x1Bosildi == 1 && x4Bosildi == 1 && x7Bosildi == 1)
  ) {
    modalBack.classList.add("show");

  } else if (
    (o1Bosild == 1 && o5Bosild == 1 && o9Bosild == 1) ||
    (o1Bosild == 1 && o2Bosild == 1 && o3Bosild == 1) ||
    (o1Bosild == 1 && o4Bosild == 1 && o7Bosild == 1)
  ) {
     modalBack.classList.add("show");
  }
});
cell2.addEventListener("click", () => {
  if (bosildi == 0 && x2Bosildi == 0 && o2Bosild == 0) {
    xmark2.style.display = "block";
    bosildi = 1;
    x2Bosildi = 1;
  } else if (bosildi == 1 && x2Bosildi == 0 && o2Bosild == 0) {
    circle2.style.display = "block";
    bosildi = 0;
    o2Bosild = 1;
  }
  if (
    (x2Bosildi == 1 && x5Bosildi == 1 && x8Bosildi == 1) ||
    (x1Bosildi == 1 && x2Bosildi == 1 && x3Bosildi == 1)
  ) {
     modalBack.classList.add("show");
  } else if (
    (o2Bosild == 1 && o5Bosild == 1 && o8Bosild == 1) ||
    (o1Bosild == 1 && o2Bosild == 1 && o3Bosild == 1)
  ) {
     modalBack.classList.add("show");
  }
});
cell3.addEventListener("click", () => {
  if (bosildi == 0 && x3Bosildi == 0 && o3Bosild == 0) {
    xmark3.style.display = "block";
    bosildi = 1;
    x3Bosildi = 1;
  } else if (bosildi == 1 && x3Bosildi == 0 && o3Bosild == 0) {
    circle3.style.display = "block";
    bosildi = 0;
    o3Bosild = 1;
  }
  if (
    (x3Bosildi == 1 && x6Bosildi == 1 && x9Bosildi == 1) ||
    (x1Bosildi == 1 && x2Bosildi == 1 && x3Bosildi == 1) ||
    (x3Bosildi == 1 && x5Bosildi == 1 && x7Bosildi == 1)
  ) {
     modalBack.classList.add("show");
  } else if (
    (o3Bosild == 1 && o6Bosild == 1 && o9Bosild == 1) ||
    (o1Bosild == 1 && o2Bosild == 1 && o3Bosild == 1) ||
    (o3Bosild == 1 && o5Bosild == 1 && o7Bosild == 1)
  ) {
     modalBack.classList.add("show");
  }
});
cell4.addEventListener("click", () => {
  if (bosildi == 0 && x4Bosildi == 0 && o4Bosild == 0) {
    xmark4.style.display = "block";
    bosildi = 1;
    x4Bosildi = 1;
  } else if (bosildi == 1 && x4Bosildi == 0 && o4Bosild == 0) {
    circle4.style.display = "block";
    bosildi = 0;
    o4Bosild = 1;
  }
  if (
    (x1Bosildi == 1 && x4Bosildi == 1 && x7Bosildi == 1) ||
    (x4Bosildi == 1 && x5Bosildi == 1 && x6Bosildi == 1)
  ) {
     modalBack.classList.add("show");
  } else if (
    (o1Bosild == 1 && o4Bosild == 1 && o7Bosild == 1) ||
    (o4Bosild == 1 && o5Bosild == 1 && o6Bosild == 1)
  ) {
     modalBack.classList.add("show");
  }
});
cell5.addEventListener("click", () => {
  if (bosildi == 0 && x5Bosildi == 0 && o5Bosild == 0) {
    xmark5.style.display = "block";
    bosildi = 1;
    x5Bosildi = 1;
  } else if (bosildi == 1 && x5Bosildi == 0 && o5Bosild == 0) {
    circle5.style.display = "block";
    bosildi = 0;
    o5Bosild = 1;
  }
  if (
    (x1Bosildi == 1 && x5Bosildi == 1 && x9Bosildi == 1) ||
    (x2Bosildi == 1 && x5Bosildi == 1 && x8Bosildi == 1) ||
    (x3Bosildi == 1 && x5Bosildi == 1 && x7Bosildi == 1)
  ) {
     modalBack.classList.add("show");
  } else if (
    (o1Bosild == 1 && o5Bosild == 1 && o9Bosild == 1) ||
    (o2Bosild == 1 && o5Bosild == 1 && o8Bosild == 1) ||
    (o3Bosild == 1 && o5Bosild == 1 && o7Bosild == 1)
  ) {
     modalBack.classList.add("show");
  }
});
cell6.addEventListener("click", () => {
  if (bosildi == 0 && x6Bosildi == 0 && o6Bosild == 0) {
    xmark6.style.display = "block";
    bosildi = 1;
    x6Bosildi = 1;
  } else if (bosildi == 1 && x6Bosildi == 0 && o6Bosild == 0) {
    circle6.style.display = "block";
    bosildi = 0;
    o6Bosild = 1;
  }
  if (
    (x3Bosildi == 1 && x6Bosildi == 1 && x9Bosildi == 1) ||
    (x4Bosildi == 1 && x5Bosildi == 1 && x6Bosildi == 1)
  ) {
     modalBack.classList.add("show");
  } else if (
    (o3Bosild == 1 && o6Bosild == 1 && o9Bosild == 1) ||
    (o4Bosild == 1 && o5Bosild == 1 && o6Bosild == 1)
  ) {
     modalBack.classList.add("show");
  }
});
cell7.addEventListener("click", () => {
  if (bosildi == 0 && x7Bosildi == 0 && o7Bosild == 0) {
    xmark7.style.display = "block";
    bosildi = 1;
    x7Bosildi = 1;
  } else if (bosildi == 1 && x7Bosildi == 0 && o7Bosild == 0) {
    circle7.style.display = "block";
    bosildi = 0;
    o7Bosild = 1;
  }
  if (
    (x1Bosildi == 1 && x4Bosildi == 1 && x7Bosildi == 1) ||
    (x3Bosildi == 1 && x5Bosildi == 1 && x7Bosildi == 1) ||
    (x7Bosildi == 1 && x8Bosildi == 1 && x9Bosildi == 1)
  ) {
     modalBack.classList.add("show");
  } else if (
    (o1Bosild == 1 && o4Bosild == 1 && o7Bosild == 1) ||
    (o3Bosild == 1 && o5Bosild == 1 && o7Bosild == 1) ||
    (o7Bosild == 1 && o8Bosild == 1 && o9Bosild == 1)
  ) {
     modalBack.classList.add("show");
  }
});
cell8.addEventListener("click", () => {
  if (bosildi == 0 && x8Bosildi == 0 && o8Bosild == 0) {
    xmark8.style.display = "block";
    bosildi = 1;
    x8Bosildi = 1;
  } else if (bosildi == 1 && x8Bosildi == 0 && o8Bosild == 0) {
    circle8.style.display = "block";
    bosildi = 0;
    o8Bosild = 1;
  }
  if (
    (x2Bosildi == 1 && x8Bosildi == 1 && x5Bosildi == 1) ||
    (x7Bosildi == 1 && x8Bosildi == 1 && x9Bosildi == 1)
  ) {
     modalBack.classList.add("show");
  } else if (
    (o2Bosild == 1 && o8Bosild == 1 && o5Bosild == 1) ||
    (o7Bosild == 1 && o8Bosild == 1 && o9Bosild == 1)
  ) {
     modalBack.classList.add("show");
  }
});
cell9.addEventListener("click", () => {
  if (bosildi == 0 && x9Bosildi == 0 && o9Bosild == 0) {
    xmark9.style.display = "block";
    bosildi = 1;
    x9Bosildi = 1;
  } else if (bosildi == 1 && x9Bosildi == 0 && o9Bosild == 0) {
    circle9.style.display = "block";
    bosildi = 0;
    o9Bosild = 1;
  }
  if (
    (x3Bosildi == 1 && x6Bosildi == 1 && x9Bosildi == 1) ||
    (x1Bosildi == 1 && x5Bosildi == 1 && x9Bosildi == 1) ||
    (x7Bosildi == 1 && x8Bosildi == 1 && x9Bosildi == 1)
  ) {
     modalBack.classList.add("show");
  } else if (
    (o3Bosild == 1 && o6Bosild == 1 && o9Bosild == 1) ||
    (o1Bosild == 1 && o5Bosild == 1 && o9Bosild == 1) ||
    (o7Bosild == 1 && o8Bosild == 1 && o9Bosild == 1)
  ) {
     modalBack.classList.add("show");
  }
});

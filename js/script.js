const cookie = document.querySelector(".cookie");
const btnCookie = document.querySelector(".cookie__btn");

// setTimeout(() => {
//   cookie.classList.add("show-cookie");
// }, 1500);
btnCookie.addEventListener("click", () => {
  cookie.classList.remove("show-cookie");
});

const phone = document.querySelector(".mission__img");
const text = document.querySelector(".mission__content");
let start = 70;
let ratio = 10;

const options = {
  rootMargin: "0px 0px 100px 0px  ",
  threshold: [1],
};
const trueCallback = function (entries, observer) {
  entries.forEach(({ isIntersecting, intersectionRatio }) => {
    if (window.innerWidth >= 940) {
      if (isIntersecting) {
        if (intersectionRatio >= 0.45) {
          phone.classList.add("run");
          text.classList.add("text-trans");
        }
      }
    }
  });
};
const observer = new IntersectionObserver(trueCallback, options);
const target = document.querySelector(".mission__inner");
observer.observe(target);

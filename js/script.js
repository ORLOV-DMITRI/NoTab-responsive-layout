const cookie = document.querySelector(".cookie");
const btnCookie = document.querySelector(".cookie__btn");

setTimeout(() => {
  cookie.classList.add("show-cookie");
}, 1500);
btnCookie.addEventListener("click", () => {
  cookie.classList.remove("show-cookie");
});

const phone = document.querySelector(".mission__img");
const text = document.querySelector(".mission__content");

const options = {
  rootMargin: "0px",
  threshold: [0.5],
};
const trueCallback = function (entries, observer) {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;
    if (window.innerWidth >= 940) {
      if (isIntersecting) {
        phone.classList.add("run");
        text.classList.add("text-trans");
        setTimeout(() => {
          phone.classList.add("rotate");
        }, 1000);
      } else {
        phone.classList.remove("rotate");
        text.classList.remove("text-trans");
        phone.classList.remove("run");
      }
    }
  });
};
const observer = new IntersectionObserver(trueCallback, options);
const target = document.querySelector(".mission");
observer.observe(target);

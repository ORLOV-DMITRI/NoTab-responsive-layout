const cookie = document.querySelector(".cookie");
const btnCookie = document.querySelector(".cookie__btn");

setTimeout(() => {
  cookie.classList.add("show-cookie");
}, 1500);
btnCookie.addEventListener("click", () => {
    cookie.style.opacity = 1;
    cookie.style.transform = 'translateY(0)';
    cookie.classList.remove('show-cookie');
    setTimeout(() => {
      cookie.classList.add("close-cookie");
    }, 500);


});

const phone = document.querySelector(".mission__img");
const text = document.querySelector(".mission__content");

const options = {
  rootMargin: "0px",
  threshold: 0.5,
};
const trueCallback = function (entries) {
  entries.forEach(({ isIntersecting, intersectionRatio }) => {
    if (window.innerWidth >= 940) {
      if (isIntersecting) {
          phone.classList.add("run");
          text.classList.add("text-trans");
      }
    }else{
      phone.classList.remove('run');
      text.classList.remove('text-trans');
    }
  });
};
const observer = new IntersectionObserver(trueCallback, options);
const target = document.querySelector(".mission__inner");
observer.observe(target);

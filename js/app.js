const Sec2 = document.querySelector(".sec2");
const Fade = document.querySelectorAll(".fade");
const Burger = document.querySelector(".burger");
const Header = document.querySelector("header");
const Nav = Header.children[1];
const Anchor = document.querySelectorAll("nav ul a");

Burger.addEventListener("click", function (e) {
  if (Nav.style[0] == "transform") {
    Nav.style = "";
    return;
  }
  Nav.style = "transform:translateX(0)";
});

window.addEventListener("scroll", secLoad);
function secLoad(e) {
  Fade.forEach((item) => {
    const { top } = item.getBoundingClientRect();

    if (top < window.innerHeight) {
      item.classList.add("animation");
    } else {
      item.classList.remove("animation");
    }
  });
  (function () {
    let nav = Header.children[1];

    if (window.pageYOffset > 0) {
      let bgstyle =
        "background: rgb(30, 30, 30,0.8);transition:all 0.3s linear;box-shadow:0 3px 5px black;";
      Header.style = bgstyle;

      nav.classList.add("changebg");
      return;
    }
    nav.classList.remove("changebg");
    Header.style = "transition:all 0.3s linear";
  })();
}
Anchor.forEach((item) => {
  item.addEventListener("click", function (e) {
    const HeaderHeight = Header.getBoundingClientRect().height;
    const { top } = item.getBoundingClientRect();
    let scrollA = HeaderHeight - top;
    console.log(location.hash == 1);
  });
});

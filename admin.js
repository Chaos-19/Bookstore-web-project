const menu = [...document.querySelectorAll(".menu > ul .wrapper")];

const stage = document.querySelector(".form-wrapper");

const pages = [, "add",];

menu.forEach((e, i) => {
  e.addEventListener("click", function (event) {
    if (i == 0) {
      pages.forEach((v) => {
        if (stage.classList.contains(v)) {
          stage.classList.remove(v);
        }
      });
    }
    stage.classList.add(pages[i]);
  });
});

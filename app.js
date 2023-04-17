const stickySection = document.querySelector(".homepage-v7");
const stickyOffset = stickySection.offsetTop;

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= stickyOffset) {
    stickySection.classList.add("sticky");
  } else {
    stickySection.classList.remove("sticky");
  }
});

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasss();
    panel.classList.add("active");
  })
})

function removeActiveClasss() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

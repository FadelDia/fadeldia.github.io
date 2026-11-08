const buttons = document.querySelectorAll(".nav-button");
const pages = document.querySelectorAll(".page");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageToShow = button.dataset.page;

    pages.forEach((page) => {
      page.hidden = page.id !== pageToShow;
    });

    buttons.forEach((navButton) => {
      const isSelected = navButton === button;
      navButton.classList.toggle("active", isSelected);
      navButton.setAttribute("aria-pressed", isSelected);
    });
  });
});

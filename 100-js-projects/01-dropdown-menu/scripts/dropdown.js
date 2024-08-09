"use-strict";

selectOption();

function selectOption() {
  const dropdownToggle = document.querySelector("#dropdown-toggle");
  const dropdown = dropdownToggle.parentNode;
  const dropdownMenu = dropdownToggle.nextElementSibling;
  const toggleBtn = dropdownToggle.querySelector("span");

  dropdownToggle.addEventListener("click", () =>
    dropdown.classList.toggle("is-open")
  );

  dropdownMenu.addEventListener("click", (e) => {
    const selected = e.target.closest("li").textContent;

    toggleBtn.textContent = selected;
    dropdown.classList.remove("is-open");
  });
}

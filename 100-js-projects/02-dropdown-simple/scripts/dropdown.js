"use-strict";

toggle();

function toggle() {
  const dropdownToggle = document.querySelector("#dropdown-toggle");
  const dropdown = dropdownToggle.parentNode;

  dropdownToggle.addEventListener("click", () =>
    dropdown.classList.toggle("is-open")
  );
}

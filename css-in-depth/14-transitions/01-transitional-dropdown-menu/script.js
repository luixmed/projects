(function () {
  var toggle = document.querySelector(".dropdown__toggle");
  var dropdown = toggle.parentElement;

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.classList.toggle("is-open");
  });
})();

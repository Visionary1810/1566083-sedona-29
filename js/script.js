document.addEventListener("DOMContentLoaded", () => {
    var searchButton = document.querySelector(".button-to-find-hotel");
    var popup = document.querySelector(".pop-up");
  
    searchButton.addEventListener("click", function (event) {
      event.preventDefault(event);
      
      if (popup.classList.contains("show")) {
        popup.classList.remove("show");
        popup.classList.remove("slideDown");

      } else {
        popup.classList.add("show");
        popup.classList.add("slideDown");
      }
    });
  });
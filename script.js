//Listen for a click on an 'Add to my trip' button.
const tripButtons = document.querySelectorAll("button");

//Figure out what: which attraction name goes with that button.

//Create a new list item with that name inside.
const tripList = document.querySelector("#your-trip");

//Send it where: add the new item to your your-trip list.
tripButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const tripItem = document.createElement("li");
    tripItem.textContent = button.dataset.attraction;
    button.textContent = "Added!";
    button.setAttribute("aria-label", "Added to my trip");
    button.disabled = true;
    tripList.appendChild(tripItem);
  });
});
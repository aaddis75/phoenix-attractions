//Listen for a click on an 'Add to my trip' button.
const firstButton = document.querySelector("button");
//Figure out what: which attraction name goes with that button.

//Create a new list item with that name inside.
const tripList = document.querySelector("#your-trip");
//Send it where: add the new item to your your-trip list.
firstButton.addEventListener("click", function() {
  const tripItem = document.createElement("li");
  tripItem.textContent = "McDowell Sonoran Preserve";
  tripList.appendChild(tripItem);
});
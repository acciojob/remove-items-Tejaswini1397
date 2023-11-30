document.addEventListener('DOMContentLoaded', function () {
  // Attach the removeItem function to the button click event
  var removeButton = document.querySelector('input[type="button"]');
  if (removeButton) {
    removeButton.addEventListener('click', removeItem);
  }
});

function removeItem() {
  // Get the dropdown list by its ID
  var colorSelect = document.getElementById("colorSelect");

  // Get the selected index
  var selectedIndex = colorSelect.selectedIndex;

  // Check if an item is selected
  if (selectedIndex !== -1) {
    // Remove the selected item
    colorSelect.remove(selectedIndex);
  } else {
    alert("Please select an item before removing.");
  }
}

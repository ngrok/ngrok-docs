$(document).ready(function () {
  console.log("Running the script")
  console.log(document)
  if (document.location.hash) {
    var anchor = document.location.hash;
    console.log("Setting up ready for ")
    $(anchor).ready(function () {
      console.log("Scrolling to " + anchor)
      setTimeout(function () {
        $(anchor).get(0).scrollIntoView();
      }, 500);
    });
  }
});
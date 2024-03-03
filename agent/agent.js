
document.addEventListener("DOMContentLoaded", function () {
  
  var input = document.querySelector("#phoneNumber");
  var iti = window.intlTelInput(input, {
    defaultCountry: "ng",
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  
  document
    .getElementById("phoneNumberForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      
      var phoneNumber = iti.getNumber();
      console.log("Phone Number:", phoneNumber);
     
    });
});

document.getElementById("openPopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

document
  .getElementById("openSecondPopup")
  .addEventListener("click", function () {
    document.getElementById("secondPopup").style.display = "block";
  });

document
  .getElementById("closeSecondPopup")
  .addEventListener("click", function () {
    document.getElementById("secondPopup").style.display = "none";
  });

// Close popup when clicking outside of it
window.addEventListener("click", function (event) {
  var popup = document.getElementById("popup");
  if (event.target == popup) {
    popup.style.display = "none";
  }

  var secondPopup = document.getElementById("secondPopup");
  if (event.target == secondPopup) {
    secondPopup.style.display = "none";
  }
});

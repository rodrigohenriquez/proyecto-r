// Initialize your app
var myApp = new Framework7();

var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

$$('.open-services').on('click', function () {
  myApp.popup('.popup-services');
});
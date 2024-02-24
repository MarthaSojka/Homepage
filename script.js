document.addEventListener('DOMContentLoaded', function () {
  console.log("Skrypt działa!");
  var myfoto = document.getElementById('myfoto');
  if (myfoto) {
    console.log("foto działa");
    myfoto.classList.add('visible');
  } else {
    console.error('Element o ID "myfoto" nie został znaleziony.');
  };

  var mydata = document.getElementById('mydata');
  if (mydata) {
    console.log("data działa");
    mydata.classList.add('visible');
  } else {
    console.error('Element o ID "mydata" nie został znaleziony.');
  };

  var mycard = document.getElementById('mycard');
  if (mycard) {
    console.log("mydiv działa");
    mycard.classList.add('visible');
  } else {
    console.error('Element o ID "mycard" nie został znaleziony.');
  };

  var intro = document.getElementById('intro');
  if (intro) {
    console.log("intro działa");
    intro.classList.add('visible');
  } else {
    console.error('Element o ID "intro" nie został znaleziony.');
  };

/*
  var animatedLine = document.getElementById('animatedLine');
  setTimeout(function() {
    animatedLine.style.height = '100%';
  }, 500);*/

});


document.addEventListener('scroll', function () {
  // Sprawdź, czy elementy o klasie 'date' są w widoku
  var dateElements = document.getElementsByClassName('date');
  for (var i = 0; i < dateElements.length; i++) {
    var dateElement = dateElements[i];
    if (isElementInViewport(dateElement)) {
      dateElement.classList.add('visible');
    }
  }

  var descriptionElements = document.getElementsByClassName('description');
  for (var i = 0; i < descriptionElements.length; i++) {
    var descriptionElement = descriptionElements[i];
    if (isElementInViewport(descriptionElement)) {
      descriptionElement.classList.add('visible');
    }
  }
});

// Funkcja sprawdzająca, czy element jest w widoku
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

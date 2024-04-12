document.addEventListener('DOMContentLoaded', function () {
  console.log("Script is working!");
  
  function handleScroll() {
    var myFoto = document.getElementById('myfoto');
    if (isElementInViewport(myFoto)) {
      myFoto.classList.add('visible');
    } else {
      myFoto.classList.remove('visible')

    };

    var mydata = document.getElementById('mydata');
    if (isElementInViewport(mydata)) {
      mydata.classList.add('visible');
    } else {
      mydata.classList.remove('visible');
    };

    var mycard = document.getElementById('mycard');
    if (isElementInViewport(mycard)) {
      mycard.classList.add('visible');
    } else {
      mycard.classList.remove('visible');
    };

    var intro = document.getElementById('intro');
    if (isElementInViewport(intro)) {
      intro.classList.add('visible');
    } else {
      intro.classList.remove('visible');
    };
  

  }

  handleScroll();

  document.addEventListener('scroll', handleScroll);
/*
  var animatedLine = document.getElementById('animatedLine');
  setTimeout(function() {
    animatedLine.style.height = '100%';
  }, 500);*/

});


document.addEventListener('scroll',  function () {
  // Check if elements with class="data" are within a view
  var dateElements = document.getElementsByClassName('date');
  for (var i = 0; i < dateElements.length; i++) {
    var dateElement = dateElements[i];
    if (isElementInViewport(dateElement)) {
      dateElement.classList.add('visible');
    } else {
      dateElement.classList.remove('visible');
    }
  }

  var descriptionElements = document.getElementsByClassName('description');
  for (var i = 0; i < descriptionElements.length; i++) {
    var descriptionElement = descriptionElements[i];
    if (isElementInViewport(descriptionElement)) {
      descriptionElement.classList.add('visible');
    } else {
      descriptionElement.classList.remove('visible');
    }
  }

  var stackElements = this.getElementsByClassName('stack');
  for (var i = 0; i < stackElements.length; i++) {
    var stackElement = stackElements[i];
    if (isElementInViewport(stackElement)) {
      stackElement.classList.add('visible');
    } else {
      stackElement.classList.remove('visible');
    }
  }

  var listElements = this.getElementsByClassName('item');
  for (var i = 0; i < listElements.length; i++) {
    var listElement = listElements[i];
    if (isElementInViewport(listElement)) {
      listElement.classList.add('visible');
    } else {
      listElement.classList.remove('visible');
    }
  }

  var projectsElements = this.getElementsByClassName('projects');
  for (var i = 0; i < projectsElements.length; i++) {
    var projectsElement = projectsElements[i];
    if (isElementInViewport(projectsElement)) {
      projectsElement.classList.add('visible');
    }
  }

  var hobbyElements = this.getElementsByClassName('hobby');
  for (var i = 0; i < hobbyElements.length; i++) {
    var hobbyElement = hobbyElements[i];
    if (isElementInViewport(hobbyElement)) {
      hobbyElement.classList.add('visible');
    }
  }

  var imgHobbyElements = this.getElementsByTagName('img.hobby');
  for (var i = 0; i < imgHobbyElements.length; i++) {
    var imgHobbyElement = imgHobbyElements[i];
    if (isElementInViewport(imgHobbyElement)) {
      imgHobbyElement.classList.add('visible');
    }
  }

});



// Function which check, if element is within a view
function isElementInViewport(el, margin = 50) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= -margin &&
    rect.left >= -margin &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + margin &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + margin
  );
}

const lenses = document.querySelectorAll('.lens');
const images = document.querySelectorAll('.mini');

lenses.forEach((lens, index) => {
  lens.addEventListener('click', () => {
    images[index].style.display = 'inline-block';
      setTimeout(function() {
      images[index].classList.add('enlarged');
      }, 500);
  });
});

document.addEventListener('click', (event) => {
  images.forEach((image) => {
    if (image.classList.contains('enlarged') ) {
      image.classList.remove('enlarged');
      image.style.display = 'none';
    }
  });

const horizontalLenses = document.querySelectorAll('.horizontalLens');  
const horizontalImages = document.querySelectorAll('.horizontal');

horizontalLenses.forEach((horizontalLens, index) => {
  horizontalLens.addEventListener('click', () => {
    horizontalImages[index].style.display = 'inline-block';
      setTimeout(function() {
      horizontalImages[index].classList.add('enlarged');
      }, 500);
  });
});

horizontalImages.forEach((horizontalImage) => {
    if (horizontalImage.classList.contains('enlarged') ) {
      horizontalImage.classList.remove('enlarged');
      horizontalImage.style.display = 'none';
    }
  });
});



/*
window.onload = function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    emailjs.init("MarthaJay");
      
    event.preventDefault();
      emailjs.send('service_2h0xsuz', 'template_9t4lzdg')
          .then(() => {
              console.log('SUCCESS!');
              alert('Message has been sent!')
          }, (error) => {
              console.log('FAILED...', error);
              alert('An error occurred. Message could not be sent.');
          });
  });
}


*/
   /*       .classList.toggle('enlarged');*/
/*
  document.querySelectorAll('.cert').forEach(cert => {
    cert.addEventListener('click', () => {
      // Find lens and enlarged certificate
      const lens = cert.querySelector('.mini');
      const largeDiv = cert.querySelector('.large');
      const enlargedImg = cert.querySelector('.enlarged');
      // If lens is visible, hide it and show enlarger certificate
      if (lens.style.display !== 'none') {
        lens.style.display = 'none';
        enlargedImg.style.display = 'inline-block';
        largeDiv.style.display = 'block';
        largeDiv.style.position = 'absolute';
        enlargedImg.classList.add('visible');
      } else { // Otherwise show lens and hide enlarged certificate
        lens.style.display = 'inline-block';
        enlargedImg.style.display = 'none';
      }
    });
  });
  */

  /*
  document.querySelectorAll('.cert').forEach(cert => {
    cert.addEventListener('click', () => {
      // Find lens and enlarged certificate inside the parent certificate element
      const lens = cert.querySelector('.mini');
      const enlargedImg = cert.querySelector('.enlarged');
  
      // Show thumbnail certificate image and animate its enlargement
      lens.style.display = 'none';
      enlargedImg.classList.add('visible');
  
      onclick(() => {
        enlargedImg.classList.remove('visible');
        lens.style.display = 'inline-block';
      }); 
    });
  });
  */
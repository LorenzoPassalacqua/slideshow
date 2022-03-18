var prev = document.querySelector('.prev nav-btn');
var next = document.querySelector('.next nav-btn');
var images = document.querySelector('.carousel').children;
var totalImages = images.length


let index = 0;
prev.addEventListener('click', () => {
    nextImage('next');
  })
  next.addEventListener('click', () => {
    nextImage('prev');
  })


  function nextImage(direction) {
    if(direction == 'next nav-btn') {
      index++;  // increase by 1, Global variable
      if(index == totalImages) {
        index = 0;
      }
    } else {
      if(index == 0) {
        index = totalImages - 1;
      } else {
        index--; // Backwards by 1
      }
    }
    
    for(let i = 0; i < images.length; i++) {
      images[i].classList.remove('main');
    }
    images[index].classList.add('main');
  }
// owl carousel 
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    center: true,
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    margin: 20,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
    }
  });
});

// video player
$('#play-video').on('click', function (e) {
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/Yu8kgtM57TE?si=xMs4EBd9gtUuSaGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};


// product modal javascript code

document.addEventListener('DOMContentLoaded', function () {
  const presaleButtons = document.querySelectorAll('.presaleButton');
  const popup = document.getElementById('popup');
  const breadcrumbs = document.getElementById('breadcrumbs');
  const quantityDisplay = document.getElementById('quantity');
  let quantity = 1;

  presaleButtons.forEach(button => {
    button.addEventListener('click', function () {
      popup.style.display = 'flex';
      showStep('productSelection');
    });
  });

  document.getElementById('decreaseQty').addEventListener('click', function () {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  document.getElementById('increaseQty').addEventListener('click', function () {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  document.getElementById('shippingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    nextStep('paymentInfo');
  });

  document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    nextStep('congratulations');
  });
});

function showStep(step) {
  document.querySelectorAll('.form-step').forEach(function (el) {
    el.classList.remove('active');
  });
  document.getElementById(step).classList.add('active');
  updateBreadcrumbs(step);
}

function updateBreadcrumbs(step) {
  if (step === 'shippingInfo' || step === 'paymentInfo' || step === 'congratulations') {
    document.getElementById('breadcrumbs').style.display = 'flex'; // Show breadcrumbs for relevant steps
  } else {
    document.getElementById('breadcrumbs').style.display = 'none'; // Hide breadcrumbs for initial step
  }

  document.querySelectorAll('.breadcrumb').forEach(function (el) {
    el.classList.remove('active');
  });
  document.getElementById('step' + step.charAt(0).toUpperCase() + step.slice(1)).classList.add('active');
}

function nextStep(step) {
  showStep(step);
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}


// wow Animation
new WOW().init();

// Moveable Image
document.addEventListener("DOMContentLoaded", function() {
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  let isMoved = false;

  function moveImages() {
      if (isMoved) {
          image1.style.left = '15px';
          image2.style.left = '-15px';
      } else {
          image1.style.left = '60px';
          image2.style.left = '-50px';
      }
      isMoved = !isMoved;
  }

  image1.addEventListener('click', moveImages);
  image2.addEventListener('click', moveImages);
});

// parallax 
var rellax = new Rellax('.rellax');

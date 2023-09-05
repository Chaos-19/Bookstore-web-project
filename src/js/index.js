 document.addEventListener("DOMContentLoaded", function () {
  fetch("./src/php/check_authentication.php")
    .then((response) => response.json())
    .then((data) => {
      if (data.authorized) {
        alert(data.user_name);
        document.querySelector("#user_profile #user-id").textContent =
          data.user_id;
        document.querySelector("#user_profile #user-name").textContent =
          data.user_name;
        document.querySelector("#user_profile #user-email").textContent =
          data.user_email;
      } else {
        window.location.href = "./Login.html";
      }
    })
    .catch((error) => alert(error));
});
 
  $(document).ready(function() {

    $("#features").owlCarousel({

      items: 4,
      autoplay: true,
      nav: false,
      autoPlaySpeed: 500,
      autoPlayTimeout: 5000,
      autoPlayHoverPause: true,
      margin: 10,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

  });

  // Owlcarousel
  $(document).ready(function() {

    $("#bestseller").owlCarousel({
      items: 8,
      nav: false,
      loop: true,
      margin: 10,
      dots: false,
      autoplay: true,
      slideTransition: 'linear',
      autoplayTimeout: 6000,
      autoplaySpeed: 8000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }

    });

  });

  $(document).ready(function() {

    $("#top-rated").owlCarousel({
      items: 8,
      nav: false,
      loop: true,
      margin: 10,
      dots: false,
      autoplay: true,
      slideTransition: 'linear',
      autoplayTimeout: 6000,
      autoplaySpeed: 8000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }

    });

  });
  $(document).ready(function() {

    $("#limited-offer").owlCarousel({
      items: 8,
      nav: false,
      loop: true,
      margin: 10,
      dots: false,
      autoplay: true,
      slideTransition: 'linear',
      autoplayTimeout: 6000,
      autoplaySpeed: 8000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }

    });

  });

  $(document).ready(function() {

    $("#news").owlCarousel({
      items: 4,
      nav: true,
      loop: true,
      margin: 10,
      dots: false,
      autoplay: false,
      slideTransition: 'linear',
      autoplayTimeout: 6000,
      autoplaySpeed: 8000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }

    });

  });

  $('.bxslider').bxSlider({
    mode: 'fade',
    pagerCustom: '#bx-pager',
    controls:false,
  });

  const image = [
      './src/Image/book2.jpeg',
      './src/Image/1_380x.jpeg',
      './src/Image/pro_pbid_4217056_380x.jpeg',
      './src/Image/1_380x.jpeg'
    ]

  const container = document.querySelector('#bestseller');
  const topRated = document.querySelector('#top-rated');
  for (var i = 0; i < 12; i++) {
    const chaild = `
  <div class="card shadow my-4 book-card" id="book-card">
    <div class="position-relative">
      <div class="overlay rounded-top">
        <div class="social-media">
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
   <img src="${image[Math.floor((Math.random()*3))]}" alt="" />
    </div>
    <div class="card-body">
      <h5 class="card-title ">{value.book_title}</h5>
      <p class="card-text">{value.book_author}</p>
      <p class="card-text">$<span class="text-dange">300</span> <del class="text-muted"></del></p>
      <div class="d-flex justify-content-between align-items-center">
        <a href="#" class="btn btn-success">Add to Cart</a>
        <a href="#" class="btn btn-outline-secondary"><i class="bi bi-heart"></i></a>
      </div>
      <div class="rating">
        <input type="radio" name="rating" id="rating-5">
        <label for="rating-5"><i class="bi bi-star-fill"></i></label>
        <input type="radio" name="rating" id="rating-4">
        <label for="rating-4"><i class="bi bi-star-fill"></i></label>
        <input type="radio" name="rating" id="rating-3">
        <label for="rating-3"><i class="bi bi-star-fill"></i></label>
        <input type="radio" name="rating" id="rating-2">
        <label for="rating-2"><i class="bi bi-star-fill"></i></label>
        <input type="radio" name="rating" id="rating-1">
        <label for="rating-1"><i class="bi bi-star-fill"></i></label>
      </div>
    </div>
  </div> 
                        `;


    const chaildT = `
           <div class="card shadow my-4">
              <img src="${image[Math.floor((Math.random()*3))]}" alt="" class="card-img-top">
              <div class="card-body pb-5">
                <p class="card-text m-0  category">
                  <small>${i} item</small>
                </p>
                <h4 class="card-title my-2 text-capitalize title">Discover the art</h4>
                <h5 class="card-text m-0 mb-2">
                  <small>chaos</small>
                </h5>
                <a href="" class="btn btn-lg btn-outline-primary price">$400</a>
              </div>
            </div>
                        `;

    container.innerHTML += chaild;
    topRated.innerHTML += chaildT;
    document.querySelector('#limited-offer').innerHTML += chaildT;
  }
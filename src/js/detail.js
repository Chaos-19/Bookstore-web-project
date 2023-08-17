 // Owlcarousel
  $(document).ready(function() {

    $("#related-product").owlCarousel({
      items: 8,
      nav: false,
      margin: 10,
      dots: false,
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

const image = [
      './src/Image/book2.jpeg',
      './src/Image/1_380x.jpeg',
      './src/Image/pro_pbid_4217056_380x.jpeg',
      './src/Image/1_380x.jpeg'
    ]

  const container = document.querySelector('#related-product');
  
  for (var i = 0; i < 12; i++) {
    const chaild = `
           <div class="card shadow my-4">
              <img src="${image[Math.round((Math.random()*3))]}" alt="" class="card-img-top">
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
    }
const urlParams = new URLSearchParams(window.location.search);

const bookId = urlParams.get("book_Id");

const url = `./src/php/get_book_details.php?q=${Number(bookId) + 2}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    alert(bookId);
    const book = data.result[0];
    localStorage.setItem("response", JSON.stringify(data));
    document.querySelector(".image-container").innerHTML = book.book_image;
    document.querySelector("#book-title").textContent = book.book_title;
    document.querySelector(".author").textContent = book.book_author;
    document.querySelector("#bookdescription").textContent =
      book.book_description;

    document.querySelector("span.category").textContent = book.book_category;
    document.querySelector(".price").textContent = book.book_price;

    document.querySelector("#author").textContent = book.book_author;
    document.querySelector("#title").textContent = book.book_title;
  })
  .catch((error) => {
    alert("An error occurred:", error);
  });



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
 $(document).ready(function() {
   $('#minus').click(function() {
     var $input = $(this).parent().find('input');
     var count = parseInt($input.val()) - 1;
     count = count < 1 ? 1 : count;
     $input.val(count);
     $input.change();
     return false;
   });
   $('#plus').click(function() {
     var $input = $(this).parent().find('input');
     $input.val(parseInt($input.val()) + 1);
     $input.change();
     return false;
   });
 });
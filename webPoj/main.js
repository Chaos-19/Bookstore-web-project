  const open = document.querySelector('.drawer');
  console.log(open);
  open.addEventListener('toggle', (e) => {
    document.querySelector('.nav-link').style.opacity = '1';

  })
  const container = document.querySelector('.books-card');

  for (let i = 0; i < 15; i++) {
    const card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `
        <img src="\\images\\Book ${i+1}.jpg" alt="Book 1">
        <div class="content">
          <p class="section">Featured Book</p>
          <p class="title">Book Title</p>
          <p class="author">Author Name</p>
          <p class="price">$57.99 <sub class="origi">$70.65</sub></p>
          <a href="#" class="add-to-cart">Add to Cart</a>
        </div>
  `;

    container.appendChild(card);
  }



  const bestBook = document.querySelector('.books-best');

  for (let i = 0; i < 15; i++) {
    const card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `
        <img src="\\images\\Book ${i+1}.jpg" alt="Book 1">
        <div class="content">
          <p class="section">Featured Book</p>
          <p class="title">Book Title</p>
          <p class="author">Author Name</p>
            <p class="stars">
               <span>☆</span>
               <span>☆</span>
               <span>☆</span>
               <span>☆</span>
               <span>☆</span>
             </p>
          <p class="price">$57.99 <sub class="origi">$70.65</sub></p>
          <a href="#" class="add-to-cart">Add to Cart</a>
        </div>`;

    bestBook.appendChild(card);
  }
  const signInPage = document.querySelector('.account');
  document.querySelector('.sign').addEventListener('click', (e) => {

    signInPage.style.display = "block"

  })


  document.querySelector('.cancel').addEventListener('click', function(e) {
    signInPage.style.display = 'none'
  })

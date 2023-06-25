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
        <img src=".\\images\\Book ${i+1}.jpg" alt="Book 1">
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
        <img src=".\\images\\Book ${i+1}.jpg" alt="Book 1">
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

    signInPage.style.display = "flex"
    document.body.style.overflowY = "hidden";
  })


  document.querySelector('.cancel').addEventListener('click', function(e) {
    signInPage.style.display = 'none'
    document.body.style.overflowY = "auto";
  })


const productContainers = [...document.querySelectorAll('.books-card')];

  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];

  const preBtn = [...document.querySelectorAll('.pre-btn')];

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth-70;
    })

    preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth+65;
    })
  })
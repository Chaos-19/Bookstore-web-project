document.addEventListener('DOMContentLoaded', function() {
  function yourFunctionName() {
    // Your function's code here 
    const collapseNav = document.querySelector('#nav-collpsed');

    collapseNav.classList.remove('collapse');
    collapseNav.classList.remove('navbar-collapse');
    console.log(collapseNav);
  }

  function expandNavbarOnBreakpoint() {
    const navbarCollapse = document.getElementById('nav-collpsed');
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    function handleMediaQueryChange(e) {
      if (e.matches) {
        yourFunctionName()
      } else {
        navbarCollapse.classList.remove('show');
      }
    }
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);
  }
  expandNavbarOnBreakpoint();
})

const tebleListOrderBtn = [...document.querySelectorAll('.order')];

tebleListOrderBtn.forEach((v, index) => {

  let clicked = false;

  v.addEventListener('click', function(e) {
    
    //e.target.classList.add('border');
    
    if (!clicked) {
      e.target.querySelector('.bi-arrow-up').classList.remove('active');
      e.target.querySelector('.bi-arrow-down').classList.add('active');
      clicked = true;
    } else {
      e.target.querySelector('.bi-arrow-up').classList.add('active');
      e.target.querySelector('.bi-arrow-down').classList.remove('active');
      clicked = false;
    }

  })
})
console.log(tebleListOrderBtn);

function addActive() {
  tebleListOrderBtn.forEach(v => {
    v.querySelector('.bi-arrow-up').classList.add('active');
    console.log(v);
  })
}

document.addEventListener('DOMContentLoaded', addActive);
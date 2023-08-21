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
  }
)
// (function() {
//   "use strict";

//   /**
//    * Header toggle
//    */
//   const headerToggleBtn = document.querySelector('.header-toggle');
//   const header = document.querySelector('#header');

//   function headerToggle() {
//     if (header) {
//       header.classList.toggle('header-show');
//     }
//     if (headerToggleBtn) {
//       headerToggleBtn.classList.toggle('bi-list');
//       headerToggleBtn.classList.toggle('bi-x');
//     }
//   }

//   if (headerToggleBtn) {
//     headerToggleBtn.addEventListener('click', headerToggle);
//   }

//   /**
//    * Hide mobile nav on same-page/hash links
//    */
//   document.querySelectorAll('#navmenu a').forEach(navmenu => {
//     navmenu.addEventListener('click', (event) => {
//       // Check if link is a same-page hash link
//       if (event.target.getAttribute('href') && event.target.getAttribute('href').startsWith('#')) {
//         if (header.classList.contains('header-show')) {
//           headerToggle();
//         }
//       }
//     });
//   });

//   /**
//    * Toggle mobile nav dropdowns
//    */
//   document.querySelectorAll('.navmenu .toggle-dropdown').forEach(toggleDropdown => {
//     toggleDropdown.addEventListener('click', function(e) {
//       e.preventDefault();
//       const parentLi = this.parentNode;
//       const dropdownMenu = this.nextElementSibling;

//       if (parentLi && dropdownMenu) {
//         parentLi.classList.toggle('active');
//         dropdownMenu.classList.toggle('dropdown-active');
//       }

//       e.stopPropagation(); // Ensure event doesn't propagate further
//     });
//   });

// })();



//    const athovered = (event) => {
//      document.getElementById('.about-me-content').classList.toggle('athovered');
//      document.getElementById('athovered').style.color = 'red';

//    }


    const toggle = document.getElementById('toggledark');
    const body = document.querySelector('body');

    toggle.addEventListener('click', function() {
      this.classList.toggle('bi-moon');
      if (this.classList.toggle('bi bi-brightness-high')){
        body.classList.add('light');
        body.classList.remove('dark');
        document.body.style.height === '40px';
        document.body.style.backgroundColor === 'black'
        document.body.style.color === 'white';
        document.body.style.transition === '3s'
      } else {
        body.classList.add('dark');
        body.classList.remove('light');
        document.body.style.backgroundColor === 'white'
        document.body.style.color === 'black'
        document.body.style.transform = '3s'
      }
    });

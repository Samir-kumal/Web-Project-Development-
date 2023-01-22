const header = document.querySelector('.Navbar');

let headerHeight = header.offsetHeight;
let list = document.querySelector('.menu-items');
let btn = document.querySelector('.header-Btn');



window.onscroll = function() {
  // Get the current scroll position
  let currentScrollPos = window.pageYOffset;

  // Compare the current scroll position to the header height
  if (currentScrollPos >= headerHeight) {
    header.classList.add("bg-white");
    header.classList.remove("bg-red-600");
    list.classList.remove("text-white");
    list.classList.add("text-black");
    btn.classList.remove("bg-white");
    btn.classList.add("bg-red-500")
    btn.classList.remove("text-red-500");
    btn.classList.add("text-white")
  } else {
    header.classList.add("bg-red-600");
    header.classList.remove("bg-white");
     list.classList.remove("text-black");
     list.classList.add("text-white");
     btn.classList.remove("bg-red-500");
     btn.classList.add("bg-white")
     btn.classList.remove("text-white");
     btn.classList.add("text-black")
  }
}
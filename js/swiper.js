var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    //breakpoints: {
        //640: {
         // slidesPerView: 3,
          //spaceBetween: 20,
        //},
       // 768: {
         // slidesPerView: 4,
        // spaceBetween: 10,
        //},
       // 1024: {
        //  slidesPerView: 4,
        //  spaceBetween: 10,
       // }, 
     // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
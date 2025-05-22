// certificate students
var swiper = new Swiper(".certicifcate-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    grapCursor: true,
    autoplay:true,
    

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints : {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 4
        },
    }
  });

// Top Teacher
var swiper = new Swiper(".teacher-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    autoplay:true,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
    breakpoints : {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
    


// students Project
var swiper = new Swiper(".stu-swiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints : {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// certificate students
var swiper = new Swiper(".stu-feedback", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    grapCursor: true,
    autoplay:true,    

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints : {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
    }
});


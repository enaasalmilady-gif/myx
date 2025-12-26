var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 30,
 slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        thresholdDelta: 70,

    },
     breakpoint: {
        560: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },


});
/**
 * تغيير خلفية القسم الرئيسي عند تمرير الماوس
 * @param {string} imageUrl - رابط الصورة الكبيرة
 */
function changeBg(imageUrl) {
    const mainSection = document.getElementById('bg-target');
    mainSection.style.backgroundImage = `url('${imageUrl}')`;
}

/**
 * فتح مشغل الفيديو في نافذة منبثقة
 * @param {string} videoUrl - رابط embed الخاص بيوتيوب
 */
function openPlayer(videoUrl) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    iframe.src = videoUrl + "?autoplay=1";
    modal.style.display = 'block';
}

/**
 * إغلاق المشغل وإيقاف الفيديو تماماً
 */
function closePlayer() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    iframe.src = ""; // مسح الرابط لإيقاف الصوت
    modal.style.display = 'none';
}

// إغلاق النافذة عند الضغط في أي مكان خارج الفيديو
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closePlayer();
    }
}
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle("active");
  document.body.classList.toggle("menu-open");
    // Optional: Change the icon from "bars" to "X" when open
    const icon = menuToggle.querySelector('i');
    if (sidebar.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    // إذا نزل المستخدم أكثر من 400 بكسل يظهر الزر
    if (window.scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// عند الضغط على الزر، العودة للأعلى بسلاسة
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
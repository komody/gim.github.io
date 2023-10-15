
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ハンバーガーメニュー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


const hamburgerMenu = document.querySelector(".hamburger-menu");

const navi = document.getElementById("hamburger-navigation");

const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");

// const menuClose = document.querySelector(".active");

hamburgerMenu.addEventListener("click", function () {

  hamburgerMenu.classList.toggle("active");
  navi.classList.toggle('active');
});


hamburgerMenuSections.forEach((hamburgerMenuSection) => {
  hamburgerMenuSection.addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");
    navi.classList.remove("active");
  });
});

navi.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  navi.classList.toggle('active');
});

// hamburgerMenuSections.forEach((menuClose) => {
//   menuClose.addEventListener("click", function () {
//     hamburgerMenu.classList.remove("active");
//     navi.classList.remove("active");
//   });
// });


// スクロール時のイベント
window.addEventListener('scroll', function() {
  // fadeinクラスに対して順に処理を行う
  const fadeinElements = document.querySelectorAll('.fadein');
  fadeinElements.forEach(function(element) {
    // スクロールした距離
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    // fadeinクラスの要素までの距離
    const target = element.getBoundingClientRect().top + scroll;
    // 画面の高さ
    const windowHeight = window.innerHeight;
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
});


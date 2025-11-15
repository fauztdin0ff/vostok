/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenu": () => (/* binding */ burgerMenu),
/* harmony export */   "isWebp": () => (/* binding */ isWebp),
/* harmony export */   "phoneMask": () => (/* binding */ phoneMask),
/* harmony export */   "popups": () => (/* binding */ popups)
/* harmony export */ });
/*---------------------------------------------------------------------------
Проверка WebP
---------------------------------------------------------------------------*/
function isWebp() {
   function testWebP(callback) {
      const webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height === 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   testWebP(function (support) {
      document.body.classList.add(support ? "webp" : "no-webp");
   });
}


/*---------------------------------------------------------------------------
Маска телефона
---------------------------------------------------------------------------*/
function phoneMask() {
   document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("input.tel-mask").forEach((input) => {
         let keyCode;
         function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___ __ __",
               i = 0,
               val = this.value.replace(/\D/g, ""),
               new_value = matrix.replace(/[_\d]/g, (a) =>
                  i < val.length ? val.charAt(i++) : a
               );
            i = new_value.indexOf("_");
            if (i !== -1) {
               i < 5 && (i = 3);
               new_value = new_value.slice(0, i);
            }
            let reg = matrix
               .substr(0, this.value.length)
               .replace(/_+/g, (a) => `\\d{1,${a.length}}`)
               .replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
               this.value = new_value;
            }
            if (event.type === "blur" && this.value.length < 5) this.value = "";
         }

         input.addEventListener("input", mask);
         input.addEventListener("focus", mask);
         input.addEventListener("blur", mask);
         input.addEventListener("keydown", mask);
      });
   });
}


/*---------------------------------------------------------------------------
Бургер меню
---------------------------------------------------------------------------*/
function burgerMenu() {
   document.addEventListener("DOMContentLoaded", () => {
      const menuIcon = document.querySelector(".menu__icon");
      const menuBody = document.querySelector(".menu__body");
      const body = document.body;
      const menuBodyClose = document.querySelector(".menu__body-close");

      if (!menuIcon || !menuBody) return;

      const closeMenu = () => {
         menuIcon.classList.remove("active");
         menuBody.classList.remove("active");
         body.classList.remove("no-scroll");
      };

      menuIcon.addEventListener("click", () => {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      menuBody.addEventListener("click", (e) => {
         if (e.target.tagName === "A" || e.target.closest("a")) closeMenu();
      });

      if (menuBodyClose) menuBodyClose.addEventListener("click", closeMenu);

      document.addEventListener("click", (e) => {
         if (!menuBody.contains(e.target) && !menuIcon.contains(e.target)) closeMenu();
      });
   });
}


/*---------------------------------------------------------------------------
Попапы
---------------------------------------------------------------------------*/
function popups() {
   document.addEventListener("DOMContentLoaded", () => {
      const openButtons = document.querySelectorAll(".open-popup");

      openButtons.forEach((button) => {
         button.addEventListener("click", function () {
            const popupId = this.dataset.popup;
            const popup = document.getElementById(popupId);
            if (popup) {
               popup.classList.add("show");
               document.body.style.overflow = "hidden";
            }
         });
      });

      document.addEventListener("click", (e) => {
         const openPopup = document.querySelector(".popup.show");
         if (!openPopup) return;

         const isCloseBtn = e.target.closest(".popup__close");
         const isInsideBody = e.target.closest(".popup__body");
         const isPopupArea = e.target.closest(".popup");

         if (isCloseBtn || (!isInsideBody && isPopupArea)) {
            openPopup.classList.remove("show");
            document.body.style.overflow = "";
         }
      });
   });
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.burgerMenu();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.popups();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.phoneMask();

/*==========================================================================
Observer Animation
============================================================================*/
if (document.readyState === "complete") {
   init();
} else {
   window.addEventListener("load", init);
}

function init() {
   function onEntry(entry) {
      entry.forEach(change => {
         if (change.isIntersecting) {
            change.target.classList.add('element-show');
         }
      });
   }

   let options = { threshold: [0.0] };
   let observer = new IntersectionObserver(onEntry, options);
   let elements = document.querySelectorAll('.element-animation');
   for (let elm of elements) {
      observer.observe(elm);
   }
}



/*==========================================================================
Lang panel
============================================================================*/
document.addEventListener('DOMContentLoaded', () => {
   const lang = document.querySelector('.header__lang');
   const button = lang.querySelector('.header__lang-button');
   const list = lang.querySelector('.header__lang-list');

   // --- Функция открытия ---
   function openLang() {
      list.classList.add('show');
      button.classList.add('active');
   }

   // --- Функция закрытия ---
   function closeLang() {
      list.classList.remove('show');
      button.classList.remove('active');
   }

   // --- Наведение мыши ---
   lang.addEventListener('mouseenter', openLang);
   lang.addEventListener('mouseleave', closeLang);

   // --- Клик по кнопке ---
   button.addEventListener('click', (e) => {
      e.preventDefault();
      if (list.classList.contains('show')) {
         closeLang();
      } else {
         openLang();
      }
   });

   // --- Клик вне блока ---
   document.addEventListener('click', (e) => {
      if (!lang.contains(e.target)) {
         closeLang();
      }
   });
});

/*==========================================================================
Header image anim
============================================================================*/
const headerImage = document.querySelector('.header__image svg');
let lastScrollY = 0;
let ticking = false;

function rotateHeader() {
   const rotation = lastScrollY * 0.3;
   headerImage.style.transform = `rotate(${rotation}deg)`;
   ticking = false;
}

window.addEventListener('scroll', () => {
   lastScrollY = window.scrollY;
   if (!ticking) {
      window.requestAnimationFrame(rotateHeader);
      ticking = true;
   }
});



/*==========================================================================
Hero anim
============================================================================*/
document.addEventListener('DOMContentLoaded', () => {
   const wrapper = document.querySelector('.hero__title-wrapper');
   const words = document.querySelectorAll('.hero__title-word');
   const illustrations = document.querySelectorAll('.hero__card-illustration');
   const container = document.querySelector('.hero__title-words');

   if (!wrapper || !container || !words.length || !illustrations.length) {
      return;
   }

   let index = 0;
   const duration = 3000;

   function showWord(i) {
      const wordHeight = container.offsetHeight;
      wrapper.style.transform = `translateY(-${i * wordHeight}px)`;

      words.forEach((word, idx) => {
         word.classList.toggle('active', idx === i);
      });

      illustrations.forEach((img, idx) => {
         img.classList.toggle('active', idx === i);
      });
   }

   showWord(index);

   const interval = setInterval(() => {
      index = (index + 1) % words.length;
      showWord(index);
   }, duration);

   window.addEventListener('resize', () => {
      showWord(index);
   });
});



/*==========================================================================
Portfolio case 
============================================================================*/
document.addEventListener('DOMContentLoaded', () => {
   const cases = document.querySelectorAll('.case');

   if (window.innerWidth < 768 && cases.length > 0) {
      cases[0].classList.add('active');
   }

   cases.forEach(caseItem => {
      caseItem.addEventListener('click', (e) => {
         if (e.target.closest('.case__toggle')) return;

         if (caseItem.classList.contains('active')) {
            caseItem.classList.remove('active');
            return;
         }

         cases.forEach(item => item.classList.remove('active'));
         caseItem.classList.add('active');
      });
   });
});


/*==========================================================================
Reviews slider
============================================================================*/
const reviewsSlider = document.querySelector(".reviews__slider");

if (reviewsSlider) {
   const reviewsSwiper = new Swiper(reviewsSlider, {
      slidesPerView: 1,
      loop: true,
      freeMode: false,
      parallax: true,
      speed: 800,
      pagination: {
         el: ".reviews__slider-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".reviews__slide-next",
         prevEl: ".reviews__slide-prev",
      },
   });
}


/*==========================================================================
principles slider
============================================================================*/
/* const principlesSlider = document.querySelector(".principles__slider");

if (principlesSlider) {
   const principlesSwiper = new Swiper(principlesSlider, {
      slidesPerView: 3,
      freeMode: true,
      spaceBetween: 10,
      simulateTouch: false,
      slideToClickedSlide: false,
      watchOverflow: true,
      speed: 5000,
      autoplay: {
         delay: 0,
         disableOnInteraction: false,
      },
      breakpoints: {
         320: {
            slidesPerView: 1.33,
            loop: true,
         },
         767: {
            slidesPerView: 3,
            loop: false,
         }
      },
   });
}
 */


/*==========================================================================
Advantages hover
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
   const container = document.querySelector(".about__advantages");
   const items = document.querySelectorAll(".about__advantage");

   // Проверка на наличие контейнера и элементов
   if (!container || !items.length) return;

   // создаём динамическую плашку
   const hoverBg = document.createElement("div");
   hoverBg.className = "about__hover-bg";
   container.appendChild(hoverBg);

   let mode = null;
   let scrollObserver = null;

   // ---------------------------
   // ФУНКЦИЯ: Заливка первого элемента по умолчанию
   // ---------------------------
   function activateFirst() {
      const first = items[0];
      if (!first) return;

      items.forEach(i => {
         i.classList.remove("active");
         i.classList.remove("prev-hover");
      });

      first.classList.add("active");

      const rect = first.getBoundingClientRect();
      const parent = container.getBoundingClientRect();

      hoverBg.style.top = rect.top - parent.top + "px";
      hoverBg.style.height = rect.height + "px";
      hoverBg.style.opacity = 1;
   }

   // ---------------------------
   // MODE 1 — Desktop >= 980px
   // ---------------------------
   function enableHoverMode() {
      if (mode === "hover") return;
      mode = "hover";

      if (scrollObserver) {
         scrollObserver.disconnect();
         scrollObserver = null;
      }

      items.forEach(item => {
         item.removeEventListener("mouseenter", mouseEnterHandler);
      });
      items.forEach(item => {
         item.addEventListener("mouseenter", mouseEnterHandler);
      });
      activateFirst();
   }

   function mouseEnterHandler(e) {
      if (mode !== "hover") return;

      const item = e.currentTarget;
      const rect = item.getBoundingClientRect();
      const parent = container.getBoundingClientRect();

      hoverBg.style.top = rect.top - parent.top + "px";
      hoverBg.style.height = rect.height + "px";
      hoverBg.style.opacity = 1;

      items.forEach(i => {
         i.classList.remove("active");
         i.classList.remove("prev-hover");
      });

      item.classList.add("active");

      const prev = item.previousElementSibling;
      if (prev) {
         prev.classList.add("prev-hover");
      }
   }

   // ---------------------------
   // MODE 2 — Mobile < 980px
   // ---------------------------
   function enableScrollMode() {
      if (mode === "scroll") return;

      mode = "scroll";

      items.forEach(item => {
         item.removeEventListener("mouseenter", mouseEnterHandler);
      });

      items.forEach(item => {
         item.classList.remove("active");
         item.classList.remove("prev-hover");
      });

      const linePercent = 0.60;

      scrollObserver = new IntersectionObserver(
         (entries) => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  const item = entry.target;
                  items.forEach(i => {
                     i.classList.remove("active");
                     i.classList.remove("prev-hover");
                  });
                  item.classList.add("active");
                  const prev = item.previousElementSibling;
                  if (prev) {
                     prev.classList.add("prev-hover");
                  }
                  const rect = item.getBoundingClientRect();
                  const parent = container.getBoundingClientRect();

                  hoverBg.style.top = rect.top - parent.top + "px";
                  hoverBg.style.height = rect.height + "px";
                  hoverBg.style.opacity = 1;
               }
            });
         },
         {
            threshold: 0,
            rootMargin: `-${linePercent * 100}% 0px -${(1 - linePercent) * 100}% 0px`
         }
      );

      items.forEach(item => scrollObserver.observe(item));
      activateFirst();
   }

   // ---------------------------
   // MODE SWITCHER
   // ---------------------------
   function checkMode() {
      if (window.innerWidth >= 980) {
         enableHoverMode();
      } else {
         enableScrollMode();
      }
   }

   checkMode();
   window.addEventListener("resize", checkMode);
});

})();

/******/ })()
;